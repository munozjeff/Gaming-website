import React, { useEffect, useState } from 'react'
import "./ahorcadoStyle.css"
import sequence1 from "../../assets/ahorcado_imagenes.png"
import sequence2 from "../../assets/ahorcado_imagenes2.png"
import sequence3 from "../../assets/ahorcado_imagenes3.png"
import sequence4 from "../../assets/ahorcado_imagenes4.png"
import sequence5 from "../../assets/ahorcado_imagenes5.png"
import sequence6 from "../../assets/ahorcado_imagenes6.png"
import sequence7 from "../../assets/ahorcado_imagenes7.png"
import sequence8 from "../../assets/ahorcado_imagenes8.png"
import Keyboard from '../../components/keyboard/KeyBoard'
import useHangmanWord from '../../customHooks/useHangmanWord'
import WordDisplay from '../../components/wordDisplay/WordDisplay'
import IncorrectLetters from '../../components/incorrectLetters/IncorrectLetters'
import { winnerCustomHooks } from '../../components/winner/winner'
import GameOver from '../../components/gameOver/GameOver'
import FloatingMessage from '../../components/FloatingMessage/FloatingMessage'

export const Ahorcado = () => {
    const {winUi,reset,setReset} = winnerCustomHooks()
    const [figureSequence, setFigureSequence] = useState(sequence1)
    const {thematic,thematicSelected,word,hint,generateRandomWord} = useHangmanWord()
    const [letters, setLetters] = useState("")
    const [wordShow,setWordShow] = useState([])
    const [incorrectLetters, setIncorrectLetters] = useState([])
    const [winner, setWinner] = useState(0)
    const [showMessage, setShowMessage] = useState(false);

  

    useEffect(()=>{
        generateRandomWord("")
    },[])

    const onRestart = () =>{
        generateRandomWord(thematicSelected)
        setWordShow([])
        setLetters("")
        setIncorrectLetters([])
        setWinner(0)
    }

    const handleShowHelp = () => {
        setShowMessage(true);
    };
    
    const handleCloseMessage = () => {
        setShowMessage(false);
    };
    
    const onKeyPress = (value) =>{
        setLetters(letters+value)
    }

    useEffect(()=>{
        setReset(false)
        onRestart()
    },[reset])

    useEffect(() => {
        const wordNormalize = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();//eliminar acentos
        const wordShow = wordNormalize.split("").map(letter =>letters.includes(letter) ? letter : "-")
        const incorrectLetters = letters.split("").filter(letter=> !wordNormalize.includes(letter) && letter)
        setWordShow(wordShow)
        setIncorrectLetters(incorrectLetters)
        wordShow.join("") === wordNormalize && wordNormalize.length>0 && setWinner(1)
    }, [letters,word])

    useEffect(() => {
    let   figureStatus = null
      switch (incorrectLetters.length) {
        case 0:
            figureStatus = sequence1
            break;
        case 1:
            figureStatus = sequence2
            break;
        case 2:
            figureStatus = sequence3
            break;
        case 3:
            figureStatus = sequence4
            break;
        case 4:
            figureStatus = sequence5
            break;
        case 5:
            figureStatus = sequence6
            break;
        case 6:
            figureStatus = sequence7
            break;
        default:
            figureStatus = sequence8
            break;
      }
      incorrectLetters.length>6 && setWinner(2)
      setFigureSequence(figureStatus)
    }, [incorrectLetters])
    

  return (
    <div id='ahorcado-page'>
        <div>
            <figure>
                <img src={figureSequence} alt="" />
            </figure>
        </div>
        <div>
            <div className="menu-container">
                <button className="menu-button" onClick={handleShowHelp}>
                    Ayuda
                </button>
                <select className="menu-button" onChange={(e)=>generateRandomWord(e.target.value)}>
                    <option value="">TODO</option>
                    {Object.values(thematic).map((category,key)=><option key={key} value={category}>{category}</option>)}
                </select>
                <button className="menu-button" onClick={onRestart}>
                    Resetear
                </button>
            </div>
            {/* <button onClick={generateRandomWord}>GENERAR PALABRA</button> */}
            <WordDisplay word={wordShow}/>
            <IncorrectLetters incorrectLetters={incorrectLetters}/>
            <Keyboard onKeyPress={onKeyPress}/>
            {winner == 1 ? winUi(1): winner == 2 && <GameOver message={`Has perdido la palabra era ${word}`} onRestart={onRestart}/>}
            {showMessage && (
            <FloatingMessage
                message={hint}
                onClose={handleCloseMessage}
            />
        )}
        </div>
    </div>
  )
}
