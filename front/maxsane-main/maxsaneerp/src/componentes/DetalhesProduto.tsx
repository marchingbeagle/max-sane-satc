import React from 'react';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>Preço: R${product.price.toFixed(2)}</p>
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mb-4" />
      {/* Adicione aqui as informações adicionais do produto */}
    </div>
  );
};

export default ProductDetails;
