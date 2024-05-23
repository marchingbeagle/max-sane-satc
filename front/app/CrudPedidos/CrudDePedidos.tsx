import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../CrudProdutos/CrudDeProdutos'; 
import { User } from '../CrudUsuarios/CrudUsuarios'; 

export interface Order {
  customer: ReactNode;
  quantity: ReactNode;
  price: ReactNode;
  total: ReactNode;
  status: ReactNode;
  id: string;
  product_id: string;
  user_id: string;
  quantidade: number;
  data_pedido: string;
}

const CrudDePedidos: React.FC = () => {
  enum View {
    LIST,
    CREATE,
    EDIT,
    DETAILS,
  }

  const [view, setView] = useState<View>(View.LIST);
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Order>({
    id: '',
    product_id: '',
    user_id: '',
    quantidade: 1,
    data_pedido: '',
  });

  useEffect(() => {
    fetchOrders();
    fetchProducts();
    fetchUsers();
  }, []);

  const fetchOrders = async () => {
    const response = await axios.get('http://localhost:3001/orders');
    setOrders(response.data);
  };

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:3001/products');
    setProducts(response.data);
  };

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3001/users');
    setUsers(response.data);
  };

  const handleCreateOrder = () => {
    setView(View.CREATE);
  };

  const handleEditOrder = (orderId: string) => {
    setSelectedOrderId(orderId);
    setView(View.EDIT);
    const order = orders.find((o) => o.id === orderId);
    if (order) {
      setFormData({ ...order });
    }
  };

  const handleSaveOrder = async () => {
    if (!formData.product_id || !formData.user_id || formData.quantidade < 1) {
      alert('Por favor, preencha todos os campos e certifique-se de que a quantidade é maior ou igual a 1.');
      return;
    }

    if (view === View.CREATE) {
      await axios.post('http://localhost:3001/orders', { ...formData, id: String(orders.length + 1) });
    } else if (view === View.EDIT && selectedOrderId !== null) {
      await axios.put(`http://localhost:3001/orders/${selectedOrderId}`, formData);
    }
    setView(View.LIST);
    fetchOrders();
    setFormData({
      id: '',
      product_id: '',
      user_id: '',
      quantidade: 1,
      data_pedido: '',
    });
  };

  const handleDeleteOrder = async (id: string) => {
    await axios.delete(`http://localhost:3001/orders/${id}`);
    fetchOrders();
  };

  return (
    <div className="p-4 m-4 text-center">
      {view === View.LIST && (
        <div className=''>
          <h1 className="text-2xl font-bold mb-4">Lista de Pedidos</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleCreateOrder}>
            Novo Pedido
          </button>
          <ul className="mt-4">
            {orders.map((order) => (
              <li key={order.id} className="flex items-center justify-between border-b py-2">
                <span className='m-2 flex justify-between'>
                  Produto: {products.find((p) => p.id === order.product_id)?.name} - Quantidade: {order.quantidade} - Usuário: {users.find((u) => u.id === order.user_id)?.user_name}
                </span>
                <div>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded mr-4' onClick={() => handleEditOrder(order.id)}>Editar</button>
                  <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => handleDeleteOrder(order.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {(view === View.CREATE || view === View.EDIT) && (
        <div>
          <h1 className="text-2xl font-bold mb-4">{view === View.CREATE ? 'Novo Pedido' : 'Editar Pedido'}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveOrder();
            }}
            className="flex flex-col"
          >
            <label className="mb-2">
              Produto:
              <select
                value={formData.product_id}
                onChange={(e) => setFormData({ ...formData, product_id: e.target.value })}
                className="border px-2 py-1"
              >
                <option value="">Selecione um produto</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>{product.name}</option>
                ))}
              </select>
            </label>
            <label className="mb-2">
              Usuário:
              <select
                value={formData.user_id}
                onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
                className="border px-2 py-1"
              >
                <option value="">Selecione um usuário</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>{user.user_name}</option>
                ))}
              </select>
            </label>
            <label className="mb-2">
              Quantidade:
              <input
                type="number"
                value={formData.quantidade}
                onChange={(e) => setFormData({ ...formData, quantidade: parseInt(e.target.value) })}
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

export default CrudDePedidos;
