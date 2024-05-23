import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface User {
  name: ReactNode;
  phone: ReactNode;
  last_order_date: ReactNode;
  total_spent: ReactNode;
  last_order: ReactNode;
  id: string;
  user_name: string;
  role: string;
  password: string;
  email: string;
  cpf: string;
  phonenumber: string;
}

const CrudDeUsuarios: React.FC = () => {
  enum View {
    LIST,
    CREATE,
    EDIT,
    DETAILS,
  }

  const [view, setView] = useState<View>(View.LIST);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [formData, setFormData] = useState<User>({
    id: '',
    user_name: '',
    role: '',
    password: '',
    email: '',
    cpf: '',
    phonenumber: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3001/users');
    setUsers(response.data);
  };

  const handleCreateUser = () => {
    setView(View.CREATE);
  };

  const handleEditUser = (userId: string) => {
    setSelectedUserId(userId);
    setView(View.EDIT);
    const user = users.find((u) => u.id === userId);
    if (user) {
      setFormData({ ...user });
    }
  };

  const handleSaveUser = async () => {
    if (view === View.CREATE) {
      await axios.post('http://localhost:3001/users', { ...formData, id: String(users.length + 1) });
    } else if (view === View.EDIT && selectedUserId !== null) {
      await axios.put(`http://localhost:3001/users/${selectedUserId}`, formData);
    }
    setView(View.LIST);
    fetchUsers();
    setFormData({
      id: '',
      user_name: '',
      role: '',
      password: '',
      email: '',
      cpf: '',
      phonenumber: '',
    });
  };

  const handleDeleteUser = async (id: string) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    fetchUsers();
  };

  const handleShowDetails = (userId: string) => {
    setSelectedUserId(userId);
    setView(View.DETAILS);
    const user = users.find((u) => u.id === userId);
    if (user) {
      setFormData({ ...user });
    }
  };

  const handleCloseDetails = () => {
    setSelectedUserId(null);
    setView(View.LIST);
  };

  return (
    <div className="p-4 m-4 text-center">
      {view === View.LIST && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleCreateUser}>
            Novo Usuário
          </button>
          <ul className="mt-4">
            {users.map((user) => (
              <li key={user.id} className="flex items-center justify-between border-b py-2">
                <span>{user.user_name} - {user.role}</span>
                <div>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded mr-4' onClick={() => handleShowDetails(user.id)}>Detalhes</button>
                  <button className='bg-yellow-500 text-white px-4 py-2 rounded mr-4' onClick={() => handleEditUser(user.id)}>Editar</button>
                  <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => handleDeleteUser(user.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {view === View.DETAILS && selectedUserId !== null && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white p-4">
          <h1 className="text-2xl font-bold mb-4">Detalhes do Usuário</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={handleCloseDetails}>
            Voltar para a lista
          </button>
          <div>
            <h2 className="text-xl font-bold my-2">{formData.user_name}</h2>
            <p>Email: {formData.email}</p>
            <p>CPF: {formData.cpf}</p>
            <p>Telefone: {formData.phonenumber}</p>
            <p>Role: {formData.role}</p>
          </div>
        </div>
      )}

      {(view === View.CREATE || view === View.EDIT) && (
        <div>
          <h1 className="text-2xl font-bold mb-4">{view === View.CREATE ? 'Novo Usuário' : 'Editar Usuário'}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveUser();
            }}
            className="flex flex-col"
          >
            <label className="mb-2">
              Nome:
              <input
                type="text"
                value={formData.user_name}
                onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              Email:
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              CPF:
              <input
                type="text"
                value={formData.cpf}
                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              Telefone:
              <input
                type="text"
                value={formData.phonenumber}
                onChange={(e) => setFormData({ ...formData, phonenumber: e.target.value })}
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              Role:
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              Senha:
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="border px-2 py-1"
              />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              {view === View.CREATE ? 'Cadastrar' : 'Salvar'}
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mt-2" onClick={() => setView(View.LIST)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CrudDeUsuarios;
