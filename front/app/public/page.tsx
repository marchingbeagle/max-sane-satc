'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"

export default function PublicPage() {
    const { data: session } = useSession()
    return(
        <div className="w-full max-w screen-xl h-screen flex flex-col justify-center items-center">
            <h1>Bem vindo</h1>
            {/* Devolve uma array com as informações do Usuario*/}
            {session && <pre className="bg-cyan-500 text-slade-200 font-bold p-10 rounded-lg mt-10 text-neutral-50">{JSON.stringify(session.user?.name,null,2)}</pre>}
            {/* Condiciona a renderização do botão com base na existência da sessão */}
            {!session && <button><Link rel="stylesheet" className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" href="/private">Acesse</Link></button>}
        </div>
    )
}
