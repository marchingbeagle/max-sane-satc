'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Order } from '../CrudPedidos/CrudDePedidos';
import { Product } from '../CrudProdutos/CrudDeProdutos'; 
import { User } from '../CrudUsuarios/CrudUsuarios'; 
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { TableCell } from '@/components/ui/table';

const Relatorios: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedReport, setSelectedReport] = useState<string>('product');

  useEffect(() => {
    fetchProducts();
    fetchOrders();
    fetchUsers();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:3001/products');
    setProducts(response.data);
  };

  const fetchOrders = async () => {
    const response = await axios.get('http://localhost:3001/orders');
    setOrders(response.data);
  };

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3001/users');
    setUsers(response.data);
  };

  const generatePDF = () => {
    const input = document.getElementById('pdf-content') as HTMLElement;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('download.pdf');
    });
  };

  const renderSelectedReport = () => {
    switch (selectedReport) {
      case 'product':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Produtos</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id} className="mb-2">{product.name} - {product.price}</li>
              ))}
            </ul>
          </div>
        );
      case 'order':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Pedidos</h2>
            <ul>
              {orders.map((order) => {
                const product = products.find((p) => p.id === order.product_id);
                const user = users.find((u) => u.id === order.user_id);
                return (
                  <TableCell key={order.id} className="mb-2">
                    Pedido {order.id} - Produto: {product?.name} - Quantidade: {order.quantity} - Cliente: {user?.user_name}
                  </TableCell>
                );
              })}
            </ul>
          </div>
        );
      case 'user':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Usuários</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id} className="mb-2">{user.user_name} - {user.email}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Relatórios</h1>
      <div className="mb-6">
        <button
          className={`mr-2 px-4 py-2 rounded ${
            selectedReport === 'product' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setSelectedReport('product')}
        >
          Produtos
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded ${
            selectedReport === 'order' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setSelectedReport('order')}
        >
          Pedidos
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded ${
            selectedReport === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setSelectedReport('user')}
        >
          Usuários
        </button>
      </div>
     <div>
     <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={generatePDF}
      >
        Gerar PDF
      </button>
      <div id="pdf-content" className="mt-6">
        {renderSelectedReport()}
      </div>
      </div> 
    </div>
  
  );
};

export default Relatorios;
