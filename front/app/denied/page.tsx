import Link from "next/link";

export default function DeniedPage(){
    return (
        <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-6">Acesso Restrito</h1>
        <p className="text-base t ext-slate-600 mb-10">Você não tem permissão para prosseguir</p>
        <Link href="/" className="p-4 bg-cyan-500 text-slate-50 text-center text font-semibold w-1/4">Voltar</Link>
        </div>
    )
}