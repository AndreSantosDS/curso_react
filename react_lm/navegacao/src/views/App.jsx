import React from "react";
import './App.css'
import {BrowserRouter} from 'react-router-dom'

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = props =>(
    <div className="App">
        {/*O <BrowserRouter> é como a estrutura principal do prédio. Ele é quem permite que você tenha "andares" ou "salas" diferentes e que consiga se mover entre eles sem sair do prédio. No mundo da programação, ele é o responsável por gerenciar as diferentes rotas (ou "endereços") do seu site, fazendo com que ele funcione como um aplicativo de página única (SPA), onde a página não precisa recarregar completamente a cada clique.*/}
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>
    </div>
)

export default App