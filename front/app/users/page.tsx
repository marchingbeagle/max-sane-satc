'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gerenciar Usuários</h1>
        <Button
          className="bg-primary text-white hover:bg-primary-dark"
          size="sm"
          onClick={editMode ? handleUpdateUser : handleAddUser}
        >
          {editMode ? "Atualizar Usuário" : "Adicionar Usuário"}
        </Button>
      </div>
      <div className="mb-4 space-y-2">
        <input
          type="text"
          name="name"
          value={editMode ? currentUser?.name : newUser.name}
          onChange={handleChange}
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          value={editMode ? currentUser?.email : newUser.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={editMode ? currentUser?.password : newUser.password}
          onChange={handleChange}
          placeholder="Senha"
        />
        <input
          type="text"
          name="role"
          value={editMode ? currentUser?.role : newUser.role}
          onChange={handleChange}
          placeholder="Função"
        />
        <input
          type="text"
          name="phone"
          value={editMode ? currentUser?.phone : newUser.phone}
          onChange={handleChange}
          placeholder="Telefone"
        />
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Button
                      className="text-primary"
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
