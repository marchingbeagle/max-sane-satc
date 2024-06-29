import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const AuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {    
          throw new Error('Email and password are required');
        }

        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        if (!response.ok) {
          throw new Error('Error while fetching user');
        }

        const user = await response.json();

        if (!user) {
          throw new Error('No user found with the given email');
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          phone: user.phone
        };
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
          phone: user.phone
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        role: token.role,
        phone: token.phone
      };
      return session;
    }
  },
  pages: {
    signIn: '/auth/login'
  }
};

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
