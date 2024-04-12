import React from 'react';

const PaginaInicial: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Notificações</h1>
            <div className="bg-white p-4 rounded shadow-md mb-4">
                <h2 className="text-lg font-bold mb-2">Pedidos</h2>
                <p>Notificações de novos pedidos e atualizações de status.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md mb-4">
                <h2 className="text-lg font-bold mb-2">Produção</h2>
                <p>Notificações relacionadas à produção de produtos.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md mb-4">
                <h2 className="text-lg font-bold mb-2">Produtos Enviados</h2>
                <p>Notificações de produtos enviados aos clientes.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md mb-4">
                <h2 className="text-lg font-bold mb-2">Produtos Entregues</h2>
                <p>Notificações de produtos entregues aos clientes.</p>
            </div>
        </div>
    );
};

export default PaginaInicial;
