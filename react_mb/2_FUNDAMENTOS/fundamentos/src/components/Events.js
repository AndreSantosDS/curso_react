const Events = () => {
    const handleMyEvent = (event) => {
        console.log(event)
        console.log("Ativou o evento!")
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Rederizando isso!</h1>
        }else{
            return <h1>Também psso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
                <button onClick={() => {
                    if(true){
                        console.log("Isso não deveria existir =)")
                    }
                }}>Clica aqui, por favor.</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}
export default Events;