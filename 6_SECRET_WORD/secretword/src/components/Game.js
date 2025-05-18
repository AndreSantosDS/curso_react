import { useState, useRef } from "react";

//styles
import './Game.css'


const Game = ({verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,}) => {
     const [letter, setLetter] = useState("");
    //  Você pode usar useRef para acessar diretamente elementos HTML (como um input, div, etc.) — semelhante ao document.getElementById no JavaScript tradicional.
     const letterInputRef = useRef(null);

     const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };
  return (
    <div className='game'>
      <p className="points">
        <span>pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas(s)</p>
      <div className="wordContainer">
        {letters.map((letter,i)=>
          guessedLetters.includes(letter) ? (
          <span key={i} className="letter">{letter}</span>
          ) : (
        <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className='letterContainer'>
        <p>Tente advinhar uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className='wrongLettersContainer'>
        <p>Letras já utilizadas:</p>
          {wrongLetters.map((letter,i) =>(
            <span key={i}>{letter}</span>
          ))}
      </div>
    </div>
  )
}

export default Game