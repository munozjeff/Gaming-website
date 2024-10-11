import './App.css'
import { JigsawPuzzle } from './pages/jigsawPuzzle/jigsawPuzzle'
import { Triqui } from './pages/triqui/TriquiPage'
import { Ahorcado } from './pages/ahorcado/Ahorcado'
import { GameCard } from './components/gameCard/GameCard'
import { Main } from './pages/Main'
import { useEffect, useState } from 'react'

function App() {
  const[idGameSelected,setIdGameSelected] = useState(0)
  // useEffect(()=>{
  //   console.log(idGameSelected);
  // },[idGameSelected])
  return (
    <>
      {/* <Triqui/> */}
      {/* <JigsawPuzzle/> */}
      {idGameSelected === 0 && <Main clickHandler={(id)=>setIdGameSelected(id)}/>}
      {idGameSelected === 1 && <JigsawPuzzle/>}
      {idGameSelected === 2 && <Triqui/>}
      {idGameSelected === 3 && <Ahorcado/>}
    </>
  )
}

export default App
