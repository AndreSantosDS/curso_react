// css
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// data
import {wordsList} from "./data/words"

// components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

const guessesQty = 3

function App() {
  const [gameStage, setGameSatage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  //O useCallback é um hook do React que serve para memorizar funções — ou seja, evitar que elas sejam recriadas em toda renderização, a não ser que alguma dependência tenha mudado. Ele é especialmente útil para otimizar performance, principalmente quando você passa funções como props para componentes filhos.
  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  },[words]);

  // starts the secret word game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates()
    // pick word and pick category
    const { word, category } = pickWordAndCategory()

    // creat an array of letters
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameSatage(stages[1].name)
  }, [pickWordAndCategory]);

  // process the letter input
  const verifyLetter = (letter) => {
       const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () =>{
    setGuessedLetters([])
    setWrongLetters([])
  };

  //O useEffect funciona como um "observador". Ele monitora os valores que você coloca na lista de dependências (aquele array no final, chamado [guesses] no seu exemplo).
  /*Toda vez que o valor de guesses mudar, o código dentro do useEffect será executado.

  Se guesses não mudar, o useEffect não roda de novo.

  Se você colocar uma lista vazia [], o useEffect roda apenas uma vez, quando o componente é montado (sem reagir a mudanças). */
  // check if guesses ended
  useEffect(() =>{
    if(guesses <= 0){
      // reset all states
      clearLetterStates()

      setGameSatage(stages[2].name)
    }
  }, [guesses])

  // check win condition
  useEffect(()=>{
    //O Set é uma estrutura de dados do JavaScript que armazena apenas valores únicos. 
    const uniqueLetters = [...new Set(letters)]

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100));

      // restart game with new word
      startGame();
    }
  },[guessedLetters, letters, startGame])
  

  // restarts the game
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)

    setGameSatage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
