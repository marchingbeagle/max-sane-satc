import Link from "next/link"
function DeleteIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
        <line x1="18" x2="12" y1="9" y2="15" />
        <line x1="12" x2="18" y1="9" y2="15" />
      </svg>
    )
  }
  
  
  function TrashIcon(props: any) {

    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    )
  }
  function ArrowLeftIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    )
  }
export default function MenuConfiguracoes() {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex items-center mb-6">
      <Link className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700" href="./Menu">
        <ArrowLeftIcon className="h-5 w-5" />
        Back
      </Link>
      <h1 className="text-3xl font-bold ml-auto">Usuários</h1>
    </div>
    <div className="grid gap-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-4" />
          <div>
            <h2 className="text-lg font-medium">
              <Link href="/perfil">John Doe</Link>
            </h2>
            <p className="text-gray-500">johndoe@example.com</p>
            <p className="text-gray-500">Gerente</p>
          </div>
          <div className="ml-auto flex space-x-2">
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              <DeleteIcon className="h-5 w-5" />
            </Link>
            <Link className="text-gray-500 hover:text-red-500" href="#">
              <TrashIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-4" />
          <div>
            <h2 className="text-lg font-medium">
              <Link href="#">Jane Smith</Link>
            </h2>
            <p className="text-gray-500">janesmith@example.com</p>
            <p className="text-gray-500">Desenvolvedor</p>
          </div>
          <div className="ml-auto flex space-x-2">
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              <DeleteIcon className="h-5 w-5" />
            </Link>
            <Link className="text-gray-500 hover:text-red-500" href="#">
              <TrashIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-4" />
          <div>
            <h2 className="text-lg font-medium">
              <Link href="#">Bob Johnson</Link>
            </h2>
            <p className="text-gray-500">bobjohnson@example.com</p>
            <p className="text-gray-500">Designer</p>
          </div>
          <div className="ml-auto flex space-x-2">
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              <DeleteIcon className="h-5 w-5" />
            </Link>
            <Link className="text-gray-500 hover:text-red-500" href="#">
              <TrashIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-4" />
          <div>
            <h2 className="text-lg font-medium">
              <Link href="#">Sarah Lee</Link>
            </h2>
            <p className="text-gray-500">sarahlee@example.com</p>
            <p className="text-gray-500">Analista</p>
          </div>
          <div className="ml-auto flex space-x-2">
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              <DeleteIcon className="h-5 w-5" />
            </Link>
            <Link className="text-gray-500 hover:text-red-500" href="#">
              <TrashIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
