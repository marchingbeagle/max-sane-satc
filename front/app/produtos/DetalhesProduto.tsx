import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity_ml: number;
  use_case: string;
  quantity_available: number;
}

interface Props {
  product: Product;
  onClose: () => void;
}

const DetalhesProduto: React.FC<Props> = ({ product, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Produto</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={onClose}>
        Voltar para a lista
      </button>
      <div>
        <img src={product.image} alt="Product" className="max-w-md" />
        <h2 className="text-xl font-bold my-2">{product.name}</h2>
        <p>{product.description}</p>
        <p>Preço: R${product.price.toFixed(2)}</p>
        <p>Quantidade disponível: {product.quantity_available}</p>
        <p>Quantidade (ml): {product.quantity_ml}</p>
        <p>Caso de uso: {product.use_case}</p>
      </div>
    </div>
  );
};

export default DetalhesProduto;
