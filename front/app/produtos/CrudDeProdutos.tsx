/* eslint-disable @next/next/no-img-element */
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';


const CrudDeProdutos: React.FC = () => {
  enum View {
    LIST,
    CREATE,
    EDIT,
    DETAILS,
  }

  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    quantity_ml: number;
    use_case: string;
    quantity_available: number;
  }

  const [view, setView] = React.useState<View>(View.LIST);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = React.useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = React.useState<number[]>([]);
  const [showDetails, setShowDetails] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<Product>({
    id: 0,
    name: '',
    price: 0,
    image: '',
    description: '',
    quantity_ml: 0,
    use_case: '',
    quantity_available: 0,
  });

  const handleCreateProduct = () => {
    setView(View.CREATE);
  };

  const handleEditProduct = (productId: number) => {
    setSelectedProducts([productId]);
    setView(View.EDIT);
    const product = products.find((p) => p.id === productId);
    if (product) {
      setFormData({ ...product });
    }
  };

  const handleSaveProduct = () => {
    if (view === View.CREATE) {
      setProducts([...products, { ...formData, id: products.length + 1 }]);
    } else if (view === View.EDIT && selectedProductId !== null) {
      const updatedProducts = products.map((p) => (p.id === selectedProductId ? formData : p));
      setProducts(updatedProducts);
    }
    setView(View.LIST);
    setSelectedProducts([]);
    setFormData({
      id: 0,
      name: '',
      price: 0,
      image: '',
      description: '',
      quantity_ml: 0,
      use_case: '',
      quantity_available: 0,
    });
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    setSelectedProducts(selectedProducts.filter((p) => p !== id));
  };

  const handleShowDetails = (productId: number) => {
    setSelectedProductId(productId);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setSelectedProductId(null);
    setShowDetails(false);
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
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="p-4 m-4 text-center">
        {view === View.LIST && (
          <div className=' items-center'>
      <div className="flex items-center mb-6">
      <Link className="inline-flex items-center text-gray-500 hover:text-gray-700 font-bold" href="./Menu">
        <ArrowLeftIcon className="h-5 w-5" />
        Back
      </Link>
      <div>
      <h1 className="text-3xl font-bold m-5 text-gray-700">Gerenciar Produto</h1>
      </div>
    </div>
            <div> 
              <button className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-900" onClick={handleCreateProduct}>
                Novo Produto
              </button>
            </div>

            <ul className="mt-4 p-5">
              {products.map((product) => (
                <li key={product.id} className="flex items-center justify-between gap-10 border-b py-2">
                  <img className="w-10" src={product.image} alt="Produto" />
                  <span>{product.name} - R${product.price.toFixed(2)}</span>
                  <div>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded mr-4' onClick={() => handleShowDetails(product.id)}>Detalhes</button>
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() =>
                        setSelectedProducts((prevSelected) =>
                          prevSelected.includes(product.id)
                            ? prevSelected.filter((id) => id !== product.id)
                            : [...prevSelected, product.id]
                        )
                      }
                    />
                  </div>
                </li>
              ))}
            </ul>
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
              <label className="mb-2">
                Imagem:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border px-2 py-1"
                />
              </label>
              <button type="submit" className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded">
                {view === View.CREATE ? 'Cadastrar' : 'Salvar'}
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mt-2" onClick={() => setView(View.LIST)}>
                Cancelar
              </button>
            </form>
          </div>
        )}

        <div className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 flex justify-center">
          {selectedProducts.length > 0 && (
            <>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4" onClick={() => setView(View.EDIT)}>
                Editar
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDeleteProduct(selectedProducts[0])}
              >
                Excluir
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default CrudDeProdutos;
