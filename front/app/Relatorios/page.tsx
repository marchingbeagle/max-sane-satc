'use client'
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from "@/components/ui/button";

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


export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Relatórios</h1>
      </header>
      <div className="flex-1 p-6">
        <Tabs className="w-full" defaultValue="orders">
          <TabsList className="flex border-b border-gray-200 dark:border-gray-700">
            <TabsTrigger
              className="px-4 py-2 font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 dark:data-[state=active]:text-gray-50 dark:data-[state=active]:border-blue-500"
              value="orders"
            >
              Pedidos
            </TabsTrigger>
            <TabsTrigger
              className="px-4 py-2 font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 dark:data-[state=active]:text-gray-50 dark:data-[state=active]:border-blue-500"
              value="customers"
            >
              Clientes
            </TabsTrigger>
            <TabsTrigger
              className="px-4 py-2 font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 dark:data-[state=active]:text-gray-50 dark:data-[state=active]:border-blue-500"
              value="products"
            >
              Produtos
            </TabsTrigger>
          </TabsList>
          <div id="pdf-content">
          <TabsContent className="mt-6" value="orders">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pedido</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>001</TableCell>
                  <TableCell>João Silva</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>R$ 50,00</TableCell>
                  <TableCell>R$ 100,00</TableCell>
                  <TableCell>Entregue</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>002</TableCell>
                  <TableCell>Maria Oliveira</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>R$ 80,00</TableCell>
                  <TableCell>R$ 80,00</TableCell>
                  <TableCell>Pendente</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>003</TableCell>
                  <TableCell>José Almeida</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>R$ 30,00</TableCell>
                  <TableCell>R$ 90,00</TableCell>
                  <TableCell>Entregue</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent className="mt-6" value="customers">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Total Gasto</TableHead>
                  <TableHead>Último Pedido</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>João Silva</TableCell>
                  <TableCell>joao@email.com</TableCell>
                  <TableCell>(11) 98765-4321</TableCell>
                  <TableCell>R$ 500,00</TableCell>
                  <TableCell>01/05/2023</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Maria Oliveira</TableCell>
                  <TableCell>maria@email.com</TableCell>
                  <TableCell>(21) 87654-3210</TableCell>
                  <TableCell>R$ 300,00</TableCell>
                  <TableCell>15/04/2023</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>José Almeida</TableCell>
                  <TableCell>jose@email.com</TableCell>
                  <TableCell>(31) 76543-2109</TableCell>
                  <TableCell>R$ 400,00</TableCell>
                  <TableCell>20/03/2023</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent className="mt-6" value="products">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Estoque</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Camiseta Branca</TableCell>
                  <TableCell>Roupas</TableCell>
                  <TableCell>50</TableCell>
                  <TableCell>R$ 50,00</TableCell>
                  <TableCell>20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Calça Jeans</TableCell>
                  <TableCell>Roupas</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>R$ 80,00</TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tênis Esportivo</TableCell>
                  <TableCell>Calçados</TableCell>
                  <TableCell>40</TableCell>
                  <TableCell>R$ 120,00</TableCell>
                  <TableCell>15</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          </div> 
        </Tabs>
        <Button className="" onClick={generatePDF}> Gerar PDF</Button>

      </div>
    </div>
  )
}