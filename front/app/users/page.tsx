'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon, } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

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


function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
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
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  phone: string;
}

export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      email: "admin@admin.com",
      password: "admin",
      name: "Administrador do Sistema",
      role: "admin",
      phone: "(11) 12345-6789",
    },
    // Adicione outros usuários aqui...
  ]);

  const [newUser, setNewUser] = useState<User>({
    id: "",
    email: "",
    password: "",
    name: "",
    role: "",
    phone: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleDeleteUser = (userId: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleAddUser = () => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setNewUser({
      id: "",
      email: "",
      password: "",
      name: "",
      role: "",
      phone: "",
    });
  };

  const handleEditUser = (user: User) => {
    setEditMode(true);
    setCurrentUser(user);
  };

  const handleUpdateUser = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === currentUser?.id ? currentUser : user))
    );
    setEditMode(false);
    setCurrentUser(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editMode) {
      setCurrentUser((prevUser) => ({ ...prevUser, [name]: value } as User));
    } else {
      setNewUser((prevUser) => ({ ...prevUser, [name]: value } as User));
    }
  };

  return (
        
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
      <div className="flex items-center mb-6">
      <Link className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 font-bold" href="./Menu">
        <ArrowLeftIcon className="h-5 w-5" />
        Back
      </Link>
      <div>
      <h1 className="p-6 text-3xl font-bold fixed ml-auto text-gray-700">Configuração de Usuario</h1>
      </div>
    </div>
    
        <div className="flex items-center space-x-2">
          <Button size="sm">
            <SearchIcon className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button  size="sm"  onClick={editMode ? handleUpdateUser : handleAddUser}
        ><Link href="/form"></Link>
          <PlusIcon className="mr-2 h-4 w-4" />         
          {editMode ? "Atualizar Usuário" : "Adicionar Usuário"}
        </Button>
        </div>
      </div>
      <div className="relative p-2">
            <SearchIcon className=" absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 hover:bg-gray-150 active:bg-gray-100 focus:ring-bg-gray-100 focus:border-transparent"
              placeholder="Buscar usuario..."
              type="text"
            />
          </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full table-auto">
          <thead className="m-2">
            <tr className="bg-gray-100 text-gray-600 font-medium">
              <th className="px-5 py-4 text-left">Nome</th>
              <th className="px-5 py-4 text-left">Email</th>
              <th className="px-5 py-4 text-left hidden sm:table-cell">Telefone</th>
              <th className="px-5 py-4 text-left hidden sm:table-cell ">Ações</th>
            </tr>
          </thead>
          <tbody className="p-2">
            {users.map((user) => (
              <tr  className="border-b" key={user.id}>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">
                  <div className="">
                    <Button
                      className="text-primary m-1"
                      size="sm"
                      variant="outline"
                      onClick={() => handleEditUser(user)}
                    >
                      Editar
                    </Button>
                    <Button
                      className="text-red-500"
                      size="sm"
                      variant="outline"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Excluir
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
