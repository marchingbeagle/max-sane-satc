import React from 'react';

export interface Order {
  id: string;
  product_id: string;
  quantidade: number;
  data_pedido: string;
  user_id: string;
}

interface Props {
  order: Order;
  onClose: () => void;
}

const DetalhesPedido: React.FC<Props> = ({ order, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Pedido</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={onClose}>
        Voltar para a lista
      </button>
      <div>
        <p>Product ID: {order.product_id}</p>
        <p>Quantidade: {order.quantidade}</p>
        <p>Data do Pedido: {order.data_pedido}</p>
        <p>User ID: {order.user_id}</p>
      </div>
    </div>
  );
};

export default DetalhesPedido;
