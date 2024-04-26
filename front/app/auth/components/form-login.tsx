'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginForm = () => {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    //Async para sincronizar com o fomulario padrão do NextAuth
    const handleLogin = async (e: React.FormEvent) => { 
        e.preventDefault()

        try{ 
            const response = await signIn('credentials', {
                redirect: false,
                email,
                password
            })
            console.log('[LOGIN_RESPONSE]:',response)

            if(!response?.error){
                router.push('/Menu')
                router.refresh()
            } else {
                setError('Email ou senha invalidas')
            }

        } catch (error) {
            console.log('[LOGIN_ERROR]:', error)
        }
    }
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <form className="p-10 border rounded-lg w-96"onSubmit={handleLogin}>
                <h1 className="text-xl font-bold mb-4 flex justify-center font-semibold	">Login</h1>
                <p className="text-slate-700 items-center justify-center font-medium flex justify-center">Faça Login</p>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1 mb-6">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="text"
                        name="email" 
                        onChange={(e)=> setEmail(e.target.value)} 
                        className="border rounded w-full p-3 "
                        />
                    </div>
                    <div className="flex flex-col gap-1 mb-6">
                        <label htmlFor="password">Senha</label>
                        <input 
                        type="password"
                        name="password" 
                        onChange={(e)=>setPassword(e.target.value) } 
                        className="border rounded w-full p-3"
                        />
                    </div>
                    {error && <span className="text-red-400 text-sm block mt-2">{}</span>}
                    <button 
                    type="submit"
                    className="mt-10 bg-cyan-950 text-slate-50 p-3 rounded"
                    >
                    Entrar
                    </button>
                </div>
            </form>
        </div>
    )
}
export {LoginForm}