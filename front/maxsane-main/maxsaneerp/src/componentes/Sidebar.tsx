import React, { useState } from 'react';

interface SidebarProps {
    handleMenuClick: (menu: string) => void;
    currentMenu: string;
}

const Sidebar: React.FC<SidebarProps> = ({ handleMenuClick, currentMenu }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen">
            <div className={`flex shadow-2xl flex-col w-64 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-16 w-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                    Sidebar
                </div>
                <ul className="flex-1 overflow-y-auto">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleMenuClick('home')}>Home</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleMenuClick('crud-de-produtos')}>CRUD de Produtos</li>
                    {/* Adicione mais itens de menu conforme necessário */}
                </ul>
                <div className="p-4 mt-auto text-center">
             
                </div>
            </div>
            <div className={`flex-1 p-4 ${currentMenu === 'products' ? 'w-full' : ''}`}>
                <button onClick={toggleSidebar} className="bg-blue-500 text-white font-bold py-2 px-4 rounded absolute top-4 right-4">
                    {isOpen ? 'Fechar' : 'Abrir'}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

