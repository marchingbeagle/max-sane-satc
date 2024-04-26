import NextAuth from "next-auth/next";
    import { NextAuthOptions } from "next-auth";
    import CredencialProvider from "next-auth/providers/credentials"

    
    const AuthOptions: NextAuthOptions = {
        providers: [
            CredencialProvider({
                name: 'Credentials',
                credentials : {
                    email: { label: 'Email', type: 'email'},
                    password: {label: 'Password', type: 'password'}
                },
                async authorize(credencials){
                    // Validar pelo banco de dados 
                    // Valor falso via de testes 
                    const user =  {
                        id: '1',
                        email: 'admin@admin.com',
                        passsword: 'admin',
                        name: 'Administrador do Sistema',
                        role: 'admin',
                        phone: '4002-8922'
                    }
                    
                const isValidEmail = user.email === credencials?.email 
                const isValidPassword = user.passsword === credencials?.password
                
                if (!isValidEmail || !isValidPassword){
                    return null
                }
                return user
                }
            })
        ], 
        callbacks: {
            jwt: async ({token, user}) => {
                const customUser = user as unknown as any
            if (user){
                return {
                    ...token,
                    role: customUser.role,
                    phone: customUser.phone
                }
            }
            return token
            },
            session: async ({ session, token }) =>{
                return {
                    ...session,
                    user: {
                        name: token.name,
                        email: token.email,
                        role: token.role,
                        phone: token.phone
                    }
                }
            }
        },
        pages:{
            signIn: '/auth/login'
        }
    }
    const handler = NextAuth(AuthOptions)

    export { handler as GET, handler as POST}