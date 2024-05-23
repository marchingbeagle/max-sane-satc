import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface Product {
  category: ReactNode;
  quantity: ReactNode;
  stock: ReactNode;
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity_ml: number;
  use_case: string;
  quantity_available: number;
}

const CrudDeProdutos: React.FC = () => {
  enum View {
    LIST,
    CREATE,
    EDIT,
    DETAILS,
  }

  const [view, setView] = useState<View>(View.LIST);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Product>({
    id: '',
    name: '',
    price: 0,
    image: '',
    description: '',
    quantity_ml: 0,
    use_case: '',
    quantity_available: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:3001/products');
    setProducts(response.data);
  };

  const handleCreateProduct = () => {
    setView(View.CREATE);
  };

  const handleEditProduct = (productId: string) => {
    setSelectedProductId(productId);
    setView(View.EDIT);
    const product = products.find((p) => p.id === productId);
    if (product) {
      setFormData({ ...product });
    }
  };

  const handleSaveProduct = async () => {
    if (view === View.CREATE) {
      await axios.post('http://localhost:3001/products', { ...formData, id: String(products.length + 1) });
    } else if (view === View.EDIT && selectedProductId !== null) {
      await axios.put(`http://localhost:3001/products/${selectedProductId}`, formData);
    }
    setView(View.LIST);
    fetchProducts();
    setFormData({
      id: '',
      name: '',
      price: 0,
      image: '',
      description: '',
      quantity_ml: 0,
      use_case: '',
      quantity_available: 0,
    });
  };

  const handleDeleteProduct = async (id: string) => {
    await axios.delete(`http://localhost:3001/products/${id}`);
    fetchProducts();
  };

  const handleShowDetails = (productId: string) => {
    setSelectedProductId(productId);
    setView(View.DETAILS);
    const product = products.find((p) => p.id === productId);
    if (product) {
      setFormData({ ...product });
    }
  };

  const handleCloseDetails = () => {
    setSelectedProductId(null);
    setView(View.LIST);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setFormData({ ...formData, image: e.target.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="p-4 m-4 text-center">
      {view === View.LIST && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Lista de Produtos</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleCreateProduct}>
            Novo Produto
          </button>
          <ul className="mt-4">
            {products.map((product) => (
              <li key={product.id} className="flex items-center justify-between border-b py-2">
                <span>{product.name} - R${product.price.toFixed(2)}</span>
                <div>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded mr-4' onClick={() => handleShowDetails(product.id)}>Detalhes</button>
                  <button className='bg-yellow-500 text-white px-4 py-2 rounded mr-4' onClick={() => handleEditProduct(product.id)}>Editar</button>
                  <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => handleDeleteProduct(product.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {view === View.DETAILS && selectedProductId !== null && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white p-4">
          <h1 className="text-2xl font-bold mb-4">Detalhes do Produto</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={handleCloseDetails}>
            Voltar para a lista
          </button>
          <div>
            <img src={formData.image} alt="Product" className="max-w-md" />
            <h2 className="text-xl font-bold my-2">{formData.name}</h2>
            <p>{formData.description}</p>
            <p>Preço: R${formData.price.toFixed(2)}</p>
            <p>Quantidade disponível: {formData.quantity_available}</p>
            <p>Quantidade (ml): {formData.quantity_ml}</p>
            <p>Caso de uso: {formData.use_case}</p>
          </div>
        </div>
      )}

      {(view === View.CREATE || view === View.EDIT) && (
        <div>
          <h1 className="text-2xl font-bold mb-4">{view === View.CREATE ? 'Novo Produto' : 'Editar Produto'}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveProduct();
            }}
            className="flex flex-col"
          >
            <label className="mb-2">
              Nome:
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              Preço:
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                step="0.01"
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              Imagem:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              Descrição:
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              Quantidade (ml):
              <input
                type="number"
                value={formData.quantity_ml}
                onChange={(e) => setFormData({ ...formData, quantity_ml: parseInt(e.target.value) })}
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              Caso de uso:
              <input
                type="text"
                value={formData.use_case}
                onChange={(e) => setFormData({ ...formData, use_case: e.target.value })}
                className="border px-2 py-1"
              />
            </label>
            <label className="mb-2">
              Quantidade disponível:
              <input
                type="number"
                value={formData.quantity_available}
                onChange={(e) => setFormData({ ...formData, quantity_available: parseInt(e.target.value) })}
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

export default CrudDeProdutos;
