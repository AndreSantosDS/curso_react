const Challenge = () => {
    const a = 10
    const b = 15

    const soma = () => {
        console.log(`10 + 15 = ${a+b}`)
    }
    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={soma}>Resultado da soma no console</button>
        </div>
    )
}
export default Challenge;