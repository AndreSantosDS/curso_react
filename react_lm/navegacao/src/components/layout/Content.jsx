import React from "react";
import "./Content.css";
import { Routes, Route } from "react-router-dom";

import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";

const Content = (props) => (
  <main className="Content">
    {/*<Routes> é a sua "cidade" ou "território" principal, onde você define todas as possíveis rotas.
    <Route> é como uma "rua" específica dentro dessa cidade. 
    
    Agora, vamos aos detalhes de cada rua que você definiu:
    °<Route path="/about" element={<About />} />
        °path="/about": Isso significa que quando alguém digitar www.seusite.com/about (ou qualquer endereço que você configurou), essa "rua" será ativada.
        °element={<About />}: E quando essa rua for ativada, o que aparece na tela é o componente About (provavelmente uma página ou seção sobre "Quem Somos" ou "Sobre").
    °<Route path="/" exact element={<Home />} />
        °path="/": Este é o endereço principal do seu site, a "rua principal" ou "praça central". É o que as pessoas veem quando digitam apenas www.seusite.com.
        °exact: Essa palavra é muito importante aqui! Ela diz que a rota / só deve ser ativada se o endereço for exatamente /. Se você não colocasse exact, o / "pegaria" todos os outros endereços (como /about, /contato, etc.), porque todos eles "contêm" o / no início. Com exact, ele só funciona para a página inicial.
        °element={<Home />}: E quando essa rua principal é ativada, o que aparece na tela é o componente Home (sua página inicial).*/}
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" element={<Param />} /> 
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
