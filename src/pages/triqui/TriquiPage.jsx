import React, { useEffect, useState } from 'react';
import { Grid } from '../../components/grid/grid';
import "./style.css"
import {winnerCustomHooks } from '../../components/winner/winner';

const grids = [
                <Grid/>,
                <Grid/>,
                <Grid/>,
                <Grid/>,
                <Grid/>,
                <Grid/>,
                <Grid/>,
                <Grid/>,
                <Grid/>,
            ]

const matris = [[0,1,2],[3,4,5],[6,7,8]]


function Triqui(){
    const [player,setPlayer] = useState("PLAYER 1")
    const [count,setCount] = useState(0)
    const [grid,setGrid] = useState(grids)
    const [gridUnavailable,setGridUnavailable] = useState([])
    const [win,setWin] = useState([]) 
    const {winUi,reset,setReset} = winnerCustomHooks()

    useEffect(()=>{
        if(reset && reset === true) {
            setPlayer("PLAYER 1")
            setCount(0)
            setGridUnavailable([])
            setWin([])
            setGrid(grids)
            setReset(false)
        };
    },[reset])

    function triqui(){
        if(gridUnavailable.length>4){
            const gridValue = gridUnavailable[gridUnavailable.length-1]
            let row = -1;
            let column = -1;
            for (let i = 0; i < matris.length; i++) {
                for (let j = 0; j < matris[i].length; j++) {
                    if (gridValue === matris[i][j]){
                        row = i
                        column = j
                        break
                    }
                }
                if (row != -1) {
                    break
                }
            }
            const temp = gridUnavailable.findIndex((e)=> e === gridValue )
            const player = temp % 2
            const rowWin = serachRow(player,row)
            if(rowWin.length !== 3){
                const columnWin = serarchColumn(player,column)
                if(columnWin.length !== 3){
                    const diagonalWin = serachDiagonal(player)
                    if(diagonalWin.length === 3){
                        setWin(diagonalWin)
                    }
                }
                else{
                    setWin(columnWin)
                }
            }
            else{
                setWin(rowWin)
            }
            
        }
        

    }

    useEffect(()=>{
        if (win.length === 3){
            setGrid(grid.map((element,index)=>{
                // console.log(index);
                let grid
                for (let i = 0; i < win.length; i++) {
                    if(index === win[i]){
                        grid = <Grid image={element.props.image} active = {true}/>
                        break;
                    }
                }
                return grid || element
            }))
        }
        
    },[win])

    function serachRow(player,row){
        let rowWin = []
        matris[row].forEach((e)=>{
            for (let i= player; i < gridUnavailable.length; i += 2) {
                if (gridUnavailable[i] === e) {
                    // console.log("COINCIDENCIA");
                    // triquiCount +=1
                    // console.log(triquiCount);
                    rowWin = [...rowWin,e]
                }
            }
        })
        return rowWin
    }
    function serarchColumn(player,column) {
        let columnWin = []
        matris.forEach((e)=>{      
            for (let i = player; i < gridUnavailable.length; i += 2) {
                if (gridUnavailable[i] === e[column]) {
                    // triquiCount +=1
                    // console.log(triquiCount);
                    columnWin = [...columnWin,e[column]]
                }
            }
        })
        return columnWin
    }
    function serachDiagonal(player) {
        let diagonalOne = []
        let diagonalTwo = []
        let diagonalWin = []
        for (let j = player; j < gridUnavailable.length; j += 2) {
            
            if((gridUnavailable[j] === 0) || (gridUnavailable[j] === 8)){
                diagonalOne = [...diagonalOne,gridUnavailable[j]]
            }
            else if((gridUnavailable[j] === 2) || (gridUnavailable[j] === 6)){
                diagonalTwo = [...diagonalTwo,gridUnavailable[j]]
            }
            else if ((gridUnavailable[j] === 4)) {
                diagonalOne = [...diagonalOne,gridUnavailable[j]]
                diagonalTwo = [...diagonalTwo,gridUnavailable[j]]
            }
        }
        if(diagonalOne.length === 3){
            diagonalWin = diagonalOne
        }
        else if(diagonalTwo.length === 3){
            diagonalWin = diagonalTwo
        }
        // console.log(diagonalWin);
        return diagonalWin
    }
    const onClickHandler = (e)=>{
        const searchGrid = gridUnavailable.filter(grid => e === grid)
        if (searchGrid.length === 0) {
            const image = ((count % 2) === 0)?"/src/assets/x-letter.svg":"/src/assets/o-letter.svg"
            setGrid(grid.map((element,i)=>(e === i)?<Grid image={image}/>:element))
            setCount(count+1)
            setGridUnavailable([...gridUnavailable,e])
        }
        
    }
    useEffect(()=>{
        setPlayer(((count % 2) === 0) ? "PLAYER 1":"PLAYER 2")
    },[count])

    useEffect(()=>{
        triqui()
    },[gridUnavailable])

    return(
        <div className='triki-page'>
            <h2>{player}</h2>
            <div className='panel'>
                {grid.map((grid,i)=><div className='grid' key={i} onClick={()=>onClickHandler(i)}>{grid}</div>)}
            </div>
            {/* <div class="tenor-gif-embed" data-postid="17542751" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/party-popper-joypixels-celebration-have-a-blast-congratulations-gif-17542751">Party Popper Joypixels Sticker</a>from <a href="https://tenor.com/search/party+popper-stickers">Party Popper Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
            {win && win.length === 3 &&  winUi(((gridUnavailable.length - 1) % 2)+1)} 
        </div>

        
    )
}
export{Triqui}