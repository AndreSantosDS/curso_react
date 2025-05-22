import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
    const produtosTable = produtos.map((produto) => {
        return (
            <tr key={produto.id}>
               <td style={{padding: "12px",  border: "1px solid #000"}}>{produto.id}</td>
               <td style={{padding: "12px",  border: "1px solid #000"}}>{produto.nome}</td>
               <td style={{padding: "12px",  border: "1px solid #000"}}>R$ {produto.preco.toFixed(2)}</td>
            </tr>
        )
    })

  return (
    <div>
      <table style={{width: "80%",  borderCollapse: "collapse", margin: "0 auto"}}>
        <thead>
          <tr>
            <th style={{border: '1px solid #000', padding: '12px', textAlign: 'center', backgroundColor:"gray"}}>Id</th>
            <th style={{border: '1px solid #000', padding: '12px', textAlign: 'center', backgroundColor:"gray"}}>Nome</th>
            <th style={{border: '1px solid #000', padding: '12px', textAlign: 'center', backgroundColor:"gray"}}>Preço</th>
          </tr>
        </thead>
        <tbody>
            {produtosTable}
        </tbody>
      </table>
    </div>
  );
};
