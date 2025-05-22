const TemplateExpressions = () => {
    const name = "André";
    const data = {
        age: 21,
        job: "Programmer"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}
export default TemplateExpressions;