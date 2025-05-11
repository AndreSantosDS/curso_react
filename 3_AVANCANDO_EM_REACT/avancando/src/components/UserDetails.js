

const UserDetails = ({nome,idade,profissao}) => {
  return (
    <div>
        <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        <p>{idade >= 18 ? (<p>Maior de idade</p>):(<p>Menor de idade</p>)}</p>
    </div>
  )
}

export default UserDetails