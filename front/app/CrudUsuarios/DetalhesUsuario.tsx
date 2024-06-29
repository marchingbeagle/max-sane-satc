import React from 'react';

export interface User {
  id: string;
  user_name: string;
  role: string;
  password: string;
  email: string;
  cpf: string;
  phonenumber: string;
}

interface Props {
  user: User;
  onClose: () => void;
}

const DetalhesUsuario: React.FC<Props> = ({ user, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Usuário</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={onClose}>
        Voltar para a lista
      </button>
      <div>
        <h2 className="text-xl font-bold my-2">{user.user_name}</h2>
        <p>Email: {user.email}</p>
        <p>CPF: {user.cpf}</p>
        <p>Telefone: {user.phonenumber}</p>
        <p>Função: {user.role}</p>
      </div>
    </div>
  );
};

export default DetalhesUsuario;
