import React, { useState } from 'react';
import Sidebar from './componentes/Sidebar';
import PaginaInicial from './componentes/PaginaInicial';
import CrudDeProdutos from './componentes/CrudDeProdutos';

const App: React.FC = () => {
    const [currentMenu, setCurrentMenu] = useState('');

    const handleMenuClick = (menu: string) => {
        setCurrentMenu(menu);
    };

    return (
        <div className="flex">
            <Sidebar handleMenuClick={handleMenuClick} currentMenu={currentMenu} />
            <div className="flex-1">
                {!currentMenu && <PaginaInicial />}
                {currentMenu === 'home' && <PaginaInicial />}
                {currentMenu === 'crud-de-produtos' && <CrudDeProdutos />}
                {/* Adicione mais condições para renderizar outros componentes de acordo com o menu */}
            </div>
        </div>
    );
};

export default App;
