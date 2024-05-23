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
            <h2>Produtos</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id}>{product.name} - {product.price}</li>
              ))}
            </ul>
          </div>
        );
      case 'order':
        return (
          <div>
            <h2>Pedidos</h2>
            <ul>
              {orders.map((order) => {
                const product = products.find((p) => p.id === order.product_id);
                const user = users.find((u) => u.id === order.user_id);
                return (
                  <TableCell key={order.id}>
                    Pedido {order.id} - Produto: {product?.name} - Quantidade: {order.quantidade} - Cliente: {user?.user_name}
                  </TableCell>
                );
              })}
            </ul>
          </div>
        );
      case 'user':
        return (
          <div>
            <h2>Usuários</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.user_name} - {user.email}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div>
      <h1>Relatórios</h1>
      <div>
        <button onClick={() => setSelectedReport('product')}>Produtos</button>
        <button onClick={() => setSelectedReport('order')}>Pedidos</button>
        <button onClick={() => setSelectedReport('user')}>Usuários</button>
      </div>
      <button onClick={generatePDF}>Gerar PDF</button>
      <div id="pdf-content">
        {renderSelectedReport()}
      </div>
    </div>
  );
};

export default Relatorios;
