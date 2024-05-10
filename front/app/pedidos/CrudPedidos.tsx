import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import React from 'react';
import { Card, CardTitle } from "@/components/ui/card"
import { Label } from "@radix-ui/react-dropdown-menu"



function MoveHorizontalIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 8 22 12 18 16" />
        <polyline points="6 8 2 12 6 16" />
        <line x1="2" x2="22" y1="12" y2="12" />
      </svg>
    )
  }
  
  
  function Package2Icon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    )
  }
  
  
  function SearchIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }

  
const CrudDePedidos: React.FC = () => {
    enum View {
      LIST,
      CREATE,
      EDIT,
      DETAILS,
    }
  
    interface Order {
      id: number;
      empresa: string;
      status: string;
      transporte: string;
      quantidade: number,
    }
    
const [view, setView] = React.useState<View>(View.LIST);
const [Orders, setOrders] = React.useState<Order[]>([]);
const [selectedOrderId, setSelectedOrderId] = React.useState<number | null>(null);
const [selectedOrders, setSelectedOrder] = React.useState<number[]>([]);
const [OrderDetails, setShowDetails] = React.useState<boolean>(false);
const [formData, setFormData] = React.useState<Order>({
    id: 0,
    empresa: '',
    status: '',
    transporte: '',
    quantidade:0,
})

const handleCreateOrder = () => {
    setView(View.CREATE);
};

const handleEditOrder = (orderId: number) => {
    setSelectedOrder([orderId]);
    setView(View.EDIT);
    const Order = Orders.find((p) => p.id === orderId);
    if (Order) {
        setFormData({...Order})
    }
};

const handleSaveOrder = () => {
    if (view === View.CREATE) {
      setOrders([...Orders, { ...formData, id: Orders.length + 1 }]);
    } else if (view === View.EDIT && selectedOrderId !== null) {
      const updatedOrders = Orders.map((p) => (p.id === selectedOrderId ? formData : p));
      setOrders(updatedOrders);
    }
    setView(View.LIST);
    setSelectedOrder([]);
    setFormData({
        id: 0,
        empresa: '',
        status: '',
        transporte: '',
        quantidade: 0,
    });
}
const handleDeleteOrder = ( id: number ) => {
    const updatedOrders = Orders.filter((p) => p.id !== id);
    setOrders(updatedOrders);
    setSelectedOrder(selectedOrders.filter((p) => p !== id));
};

const handleShowDetails = (orderId: number) => {
    setSelectedOrderId(orderId);
    setShowDetails(true);
  };

const handleCloseDetails = () => {
    setSelectedOrderId(null);
    setShowDetails(false);
}

  return (
    <div className="flex flex-col">
            <div className="flex items-center">
            <Link className="inline-flex items-center gap-2 m-2 text-gray-500 hover:text-gray-700" 
            href="./Menu">
                <ArrowLeftIcon className="h-5 w-5" />
                Back
            </Link>
            
      
        <h1 className="text-3xl font-bold m-2 text-gray-700">
          Gerenciar Pedidos
        </h1>
      </div>

      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="lg:hidden" 
        href="/Home">
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">
            Home
          </span>
        </Link>
        <div className="w-full flex-1">
          
          <form>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8  dark:bg-gray-950"
                placeholder="Search orders..."
                type="search"
              />
            </div>
          </form>

        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">
            Pedidos
            </h1>
            </div>
            {view === View.LIST && (
            <div>
            <Button className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-900" onClick={handleCreateOrder}>
                Novo Pedido
            </Button>
        <Table>
        <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Pedido</TableHead>
                    <TableHead>Empresa</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Transporte</TableHead>
                    <TableHead className="hidden md:table-cell">Quantidade</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody className="w-full">
                <TableRow className="w-full	">
                    {Orders.map((Order) => (
                        <TableCell key={Order.id} className="flex items-center justify-between gap-10 border-b py-2">
                            <TableCell>{Order.empresa}</TableCell>
                                <Button className='' onClick={() => (Order.id)}>
                                {selectedOrders.length > 0 && (
                                <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoveHorizontalIcon className="w-4 h-4" />
                                            <span className="sr-only">Ações</span>
                                        </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                        <DropdownMenuItem 
                                        onClick={() => setView(View.EDIT)}>
                                            Editar
                                        </DropdownMenuItem>        
                                        <DropdownMenuItem           
                                        onClick={() => handleDeleteOrder(selectedOrders[0])}>
                                            Excluir
                                        </DropdownMenuItem>
                                        
                                        </DropdownMenuContent>
                                </DropdownMenu>
                                )} 
                                </Button>
                                <Input className=" "
                                type="checkbox"
                                checked={selectedOrders.includes(Order.id)}
                                onChange={() =>
                                    setSelectedOrder((prevSelected) =>
                                    prevSelected.includes(Order.id)
                                        ? prevSelected.filter((id) => id !== Order.id)
                                        : [...prevSelected, Order.id]
                                    )
                                }
                                />
                        </TableCell>
                        ))}
              </TableRow>
              </TableBody>
            </Table>
            </div>
        
            )}   
             {(view === View.CREATE || view === View.EDIT) && (
                
          <Card className="border shadow-sm rounded-lg p-2  w-1/4">
            <CardTitle className="text-2xl font-bold mb-4">
                {view === View.CREATE ? 'Novo Produto' : 'Editar Produto'}</CardTitle>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveOrder();
              }}
              className="grid gap-4">
                <div className="grid grid-cols-2">
                    <div className="space-y-2">
              <Label className="space-y-2"/>
                Nome:
                <Input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="border px-2 py-1"
                />
             <div className="space-y-2">
                Status:
                <Input
                  type="text"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="border px-2 py-1"
                />
              </div>
             <div className="space-y-2">
                Descrição:
                <Input
                type="text"
                  value={formData.transporte}
                  onChange={(e) => setFormData({ ...formData, transporte: e.target.value })}
                  className="border px-2 py-1"
                />
              </div>
             <div className="space-y-2">
                Quantidade (Ml):
                <Input
                  type="number"
                  value={formData.quantidade}
                  onChange={(e) => setFormData({ ...formData, quantidade: parseInt(e.target.value) })}
                  className="border px-2 py-1"
                />
              </div>
              </div>
            </div>
              <Button type="submit" className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded">
                {view === View.CREATE ? 'Cadastrar' : 'Salvar'}
              </Button>
              <Button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded mt-2" onClick={() => setView(View.LIST)}>
                Cancelar
              </Button>
            </form>
            
          </Card>

        )}

    </div>

    {/* <div className="border shadow-sm rounded-lg">
        <div>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Pedido</TableHead>
                    <TableHead>Empresa</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Transporte</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                <TableRow>
                    <TableCell className="font-medium">#3210</TableCell>
                    <TableCell>Olivia Martin</TableCell>
                    <TableCell className="hidden md:table-cell">Shipped</TableCell>
                    <TableCell className="hidden md:table-cell">Standard Delivery</TableCell>
                    <TableCell className="text-right">$42.25</TableCell>
                    <TableCell className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <MoveHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Ações</span>
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver Pedido</DropdownMenuItem>
                        <DropdownMenuItem>Editar Pedido</DropdownMenuItem>
                        <DropdownMenuItem>Cancelar pedido</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </TableCell>
                </TableRow>
                </TableBody>
                </Table>
                </div>
            </div> */}
        </div>
    )
    }
export default CrudDePedidos
