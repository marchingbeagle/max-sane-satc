'use client'
import { signOut } from "next-auth/react"
import Link from "next/link"

export const SignOutButton = () => {
    return (
        <button  onClick={() => signOut()}> 
        <Link href={'/'}>
        Sair
        </Link>
        </button>
    )
}