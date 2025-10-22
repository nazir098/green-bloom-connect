import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

// Input validation schemas
export const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" }).max(255);
export const passwordSchema = z.string().min(6, { message: "Password must be at least 6 characters" }).max(72);
export const signUpSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  fullName: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100).optional(),
});

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: AuthError | null }>;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      // Validate inputs
      const validation = signUpSchema.safeParse({ email, password, fullName });
      if (!validation.success) {
        return { error: { message: validation.error.errors[0].message } as AuthError };
      }

      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: validation.data.email,
        password: validation.data.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: validation.data.fullName,
          }
        }
      });

      return { error };
    } catch (err) {
      return { error: { message: 'An unexpected error occurred' } as AuthError };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Validate inputs
      const emailValidation = emailSchema.safeParse(email);
      const passwordValidation = passwordSchema.safeParse(password);
      
      if (!emailValidation.success) {
        return { error: { message: emailValidation.error.errors[0].message } as AuthError };
      }
      if (!passwordValidation.success) {
        return { error: { message: passwordValidation.error.errors[0].message } as AuthError };
      }

      const { error } = await supabase.auth.signInWithPassword({
        email: emailValidation.data,
        password: passwordValidation.data,
      });

      return { error };
    } catch (err) {
      return { error: { message: 'An unexpected error occurred' } as AuthError };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      loading,
      signUp,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
