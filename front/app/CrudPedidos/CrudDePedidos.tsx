import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import moment from 'moment';
import { Product } from '../CrudProdutos/CrudDeProdutos';
import { User } from '../CrudUsuarios/CrudUsuarios';

export interface Order {
  id: string;
  product_quantities: { [productId: string]: number };
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
    product_quantities: {},
    user_id: '',
    quantidade: 1,
    data_pedido: '',
  });
  const [quantityErrors, setQuantityErrors] = useState<{ [productId: string]: string }>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [totalValue, setTotalValue] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersRes, productsRes, usersRes] = await Promise.all([
          axios.get('http://localhost:3001/pedidos'),
          axios.get('http://localhost:3001/produtos'),
          axios.get('http://localhost:3001/clientes'),
        ]);

        setOrders(ordersRes.data.map((order: Order) => ({
          ...order,
          data_pedido: moment(order.data_pedido).format('DD/MM/YYYY'),
        })));
        setProducts(productsRes.data);
        setUsers(usersRes.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleCreateOrder = () => setView(View.CREATE);
  const handleEditOrder = (orderId: string) => {
    setSelectedOrderId(orderId);
    setView(View.EDIT);
    const order = orders.find((o) => o.id === orderId);
    if (order) {
      setFormData({ ...order, data_pedido: moment(order.data_pedido, 'DD/MM/YYYY').format('YYYY-MM-DD') });
    }
  };

  const handleViewDetails = (orderId: string) => {
    setSelectedOrderId(orderId);
    setView(View.DETAILS);
  };

  const handleSaveOrder = async () => {
    if (!Object.keys(formData.product_quantities).length || !formData.user_id || formData.quantidade < 1 || !formData.data_pedido) {
      alert('Por favor, preencha todos os campos e certifique-se de que a quantidade é maior ou igual a 1.');
      return;
    }

    const errors: { [productId: string]: string } = {};
    let hasErrors = false;

    for (const [productId, quantity] of Object.entries(formData.product_quantities)) {
      const product = products.find(p => p.id === productId);
      if (product && quantity > product.quantity_available) {
        errors[productId] = `Quantidade disponível insuficiente. Disponível: ${product.quantity_available}`;
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setQuantityErrors(errors);
      return;
    }

    const formattedDataPedido = moment(formData.data_pedido, 'DD/MM/YYYY').format('YYYY-MM-DD');

    try {
      if (view === View.CREATE) {
        await axios.post('http://localhost:3001/pedidos', { ...formData, data_pedido: formattedDataPedido, id: String(orders.length + 1) });
      } else if (view === View.EDIT && selectedOrderId !== null) {
        await axios.patch(`http://localhost:3001/pedidos/${selectedOrderId}`, { ...formData, data_pedido: formattedDataPedido });
      }
      setView(View.LIST);
      fetchOrders();
      setTotalValue(calculateTotal());
      resetForm();
    } catch (error) {
      console.error('Erro ao salvar o pedido:', error.message);
    }
  };

  const handleDeleteOrder = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/pedidos/${id}`);
      fetchOrders();
    } catch (error) {
      console.error('Erro ao excluir o pedido:', error.message);
    }
  };

  const handleProductChange = (productId: string, quantity: number) => {
    setFormData(prevState => ({
      ...prevState,
      product_quantities: {
        ...prevState.product_quantities,
        [productId]: quantity,
      }
    }));
  };

  const handleAddProduct = (product: Product) => {
    setFormData(prevState => ({
      ...prevState,
      product_quantities: {
        ...prevState.product_quantities,
        [product.id]: 1,
      }
    }));
  };

  const calculateTotal = () => {
    return Object.entries(formData.product_quantities).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId);
      return total + (product ? parseFloat(product.price.toString()) * quantity : 0);
    }, 0);
  };

  const calculateOrderTotal = (order: Order) => {
    return Object.entries(order.product_quantities).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId);
      return total + (product ? parseFloat(product.price.toString()) * quantity : 0);
    }, 0);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      id: '',
      product_quantities: {},
      user_id: '',
      quantidade: 1,
      data_pedido: '',
    });
    setQuantityErrors({});
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:3001/pedidos');
      setOrders(response.data.map((order: Order) => ({
        ...order,
        data_pedido: moment(order.data_pedido).format('DD/MM/YYYY'),
      })));
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error.message);
    }
  };

  return (
    <div className="p-6 m-6 bg-gray-100 rounded-lg shadow-lg">
      {totalValue !== null && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
          Pedido concluído com sucesso! Valor total: R$ {totalValue.toFixed(2)}
        </div>
      )}

      {view === View.LIST && (
        <div>
          <h1 className="text-3xl font-semibold mb-6">Lista de Pedidos</h1>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-900 mb-4" onClick={handleCreateOrder}>
            Novo Pedido
          </button>
          <div className="overflow-x-auto">
            <ul className="w-full table-fixed divide-y divide-gray-200">
              {orders.map((order) => (
                <li key={order.id} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium">Pedido: {order.id}</p>
                    <p className="text-gray-600">Usuário: {users.find((u) => u.id === order.user_id)?.user_name}</p>
                    <p className="text-gray-600">Data: {order.data_pedido}</p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700" onClick={() => handleViewDetails(order.id)}>Detalhes</button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700" onClick={() => handleEditOrder(order.id)}>Editar</button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700" onClick={() => handleDeleteOrder(order.id)}>Excluir</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {(view === View.CREATE || view === View.EDIT) && (
        <div>
          <h1 className="text-3xl font-semibold mb-6">{view === View.CREATE ? 'Novo Pedido' : 'Editar Pedido'}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveOrder();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Produtos:</label>
              <input
                type="text"
                placeholder="Buscar produto"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border rounded px-3 py-2 mb-4"
              />
              {searchQuery && (
                <div className="bg-white border rounded-lg shadow-md max-h-40 overflow-y-auto">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleAddProduct(product)}
                    >
                      {product.name} - R${parseFloat(product.price.toString()).toFixed(2)} - Disponível: {product.quantity_available}
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Produtos Selecionados:</h2>
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr>
                      <th className="w-1/2 border py-2">Produto</th>
                      <th className="w-1/4 border py-2">Quantidade</th>
                      <th className="w-1/4 border py-2">Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(formData.product_quantities).map(([productId, quantity]) => {
                      const product = products.find(p => p.id === productId);
                      return (
                        <tr key={productId}>
                          <td className="border px-4 py-2">{product?.name}</td>
                          <td className="border px-4 py-2">
                            <input
                              type="number"
                              value={quantity}
                              onChange={(e) => handleProductChange(productId, parseInt(e.target.value))}
                              className="w-full border rounded px-2 py-1"
                            />
                            {quantityErrors[productId] && <p className="text-red-500 text-sm">{quantityErrors[productId]}</p>}
                          </td>
                          <td className="border px-4 py-2">R${(product ? parseFloat(product.price.toString()) * quantity : 0).toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Usuário:</label>
              <select
                value={formData.user_id}
                onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Selecione um usuário</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>{user.user_name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Quantidade:</label>
              <input
                type="number"
                value={formData.quantidade}
                onChange={(e) => setFormData({ ...formData, quantidade: parseInt(e.target.value) })}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Data do Pedido:</label>
              <InputMask
                mask="99/99/9999"
                value={formData.data_pedido}
                onChange={(e) => setFormData({ ...formData, data_pedido: e.target.value })}
              >
                {(inputProps) => <input {...inputProps} type="text" className="w-full border rounded px-3 py-2" />}
              </InputMask>
            </div>
            <div className="font-medium text-lg">
              <span>Valor Total: R$ {calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex space-x-4">
              <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-900">
                {view === View.CREATE ? 'Cadastrar' : 'Salvar'}
              </button>
              <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-400" onClick={() => setView(View.LIST)}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {view === View.DETAILS && selectedOrderId && (
        <div>
          <h1 className="text-3xl font-semibold mb-6">Detalhes do Pedido</h1>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 mb-4" onClick={() => setView(View.LIST)}>
            Voltar
          </button>
          <div className="p-4 border rounded-lg shadow-lg bg-white">
            {orders
              .filter((order) => order.id === selectedOrderId)
              .map((order) => (
                <div key={order.id}>
                  <p><strong>ID:</strong> {order.id}</p>
                  <p><strong>Usuário:</strong> {users.find((u) => u.id === order.user_id)?.user_name}</p>
                  <p><strong>Data do Pedido:</strong> {order.data_pedido}</p>
                  <p><strong>Produtos:</strong></p>
                  <ul className="list-disc ml-5">
                    {order.product_quantities && Object.entries(order.product_quantities).map(([productId, quantity]) => {
                      const product = products.find(p => p.id === productId);
                      return (
                        <li key={productId}>
                          {product?.name} - {quantity} unidades - R$ {(product ? parseFloat(product.price.toString()) * quantity : 0).toFixed(2)}
                        </li>
                      );
                    })}
                  </ul>
                  <p><strong>Quantidade:</strong> {order.quantidade}</p>
                  <p><strong>Valor Total:</strong> R$ {calculateOrderTotal(order).toFixed(2)}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CrudDePedidos;
