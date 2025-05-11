import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragmentt from './components/Fragmentt'
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id:1, brand:"Ferrari", color:"Amarela", newCar:true, km: 0},
    {id:2, brand:"KIA", color:"Branco", newCar:false, km: 34343},
    {id:3, brand:"Renault", color:"Azul", newCar:false, km: 234}, 
  ];

  function showMessage(){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  
  const pessoas = [
    {id: 1, nome: "André", idade: 21, profissao: "Professor"},
    {id: 2, nome: "João", idade: 21, profissao: "Desenvolvedor de software"},
    {id: 3, nome: "Maria", idade: 15, profissao: "Estudante"}
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitamento de componentes */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar} />
      ))}
      {/* fragment */}
      <Fragmentt propFragment="teste"/>
      {/*children*/}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Desafio 4*/}
      {pessoas.map((pessoa) => (
        <UserDetails
         key={pessoa.id} 
         nome={pessoa.nome}
         idade={pessoa.idade}
         profissao={pessoa.profissao}
        />
      ))}
      
    </div>
  );
}

export default App;
