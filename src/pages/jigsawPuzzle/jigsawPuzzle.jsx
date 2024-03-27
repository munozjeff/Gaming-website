import React, { useEffect, useState, useRef } from 'react';
import "./style.css"
import { useImageSplitter } from '../../customHooks/useImageSppliter';
import figura from "../../assets/golden_cup.png"

function JigsawPuzzle(){
    const [quadricula,setQuadricula] = useState([])
    const [dimension,setDimension] = useState(5)
    const [cordSpaceWhite,setCordSpaceWhite] = useState([])
    const [initScroll,setInitScroll] = useState(false)
    const [initClientX,setInitClientX] = useState(null)
    const [initClientY,setInitClientY] = useState(null)
    const [refElement,setRefElement] = useState(null)
    const [toMove, setToMove] = useState("")
    const {imagePieces, imagenPiecesFunction} = useImageSplitter()
    

    const canvasRef = useRef(null);
    
    useEffect(()=>{
        if (canvasRef) {
            imagenPiecesFunction(canvasRef, figura, dimension, dimension)
        }
    },[])

    useEffect(()=>{
        if(dimension && quadricula && imagePieces.length >0 && quadricula.length === 0 && dimension > 0){
            let column = []
            let id = 0
            for (let i = 0; i < dimension; i++) {
                let row = []
                let idImage = i
                for (let j = 0; j < dimension; j++) {
                    row = [...row,<img id={id} src={imagePieces[id]} className='wooden-frame-grid-image'></img>]
                    id++
                    idImage = idImage + 5
                }    
                column = [...column,row]
            } 

            // const shuffledArray = column
            // for (let i = shuffledArray.length - 1; i > 0; i--) {
            //     const j = Math.floor(Math.random() * (i + 1));
            //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            // }

            setQuadricula(column)
        }
        else if(quadricula && quadricula.length>0 ){
            setCordSpaceWhite(searchCell(24))
            if(refElement){
                refElement.target.style.top = `0px`
                refElement.target.style.top = `0px`
                refElement.target.style.left = `0px`
                refElement.target.style.left = `0px`
                setInitScroll(false)
            }
            let countTemp = 0
            for (let i = 0; i < quadricula.length; i++) {
                let idItemTemp = i
                for (let j = 0; j < quadricula[i].length; j++) {
                    if(quadricula[i][j].props.id === idItemTemp){
                        countTemp++
                    }
                    else{
                        countTemp = 0
                        break
                    }
                    idItemTemp = idItemTemp + 5
                }
                if(countTemp === 0){
                    break
                }
            }
            console.log(countTemp);
        }
    },[dimension,quadricula,imagePieces])

    useEffect(()=>{
        if (toMove && toMove !== "") {
            setInitScroll(true)
        }
    },[toMove])

    const searchCell=(id)=>{
        let cord = []
        for (let i = 0; i < quadricula.length; i++) {
            for (let j = 0; j < quadricula[i].length; j++) {
                if(quadricula[i][j].props.id == id){
                    cord = [i,j]
                    break
                }
            }
            if (cord.length>0) {
                break
            }
        }
        return cord
    }
    const onMouseUpHandler=(e)=>{
        
        setToMove("")
        switch (toMove) {
            case "top":
                refElement.target.style.top = `${(refElement.target.offsetWidth * -1) - 2 }px`
                break;
            case "bottom":
                refElement.target.style.top = `${refElement.target.offsetWidth + 2 }px`
                break;
            case "left":
                refElement.target.style.left = `${(refElement.target.offsetWidth * -1) - 2 }px`
                break;
            case "right":
                refElement.target.style.left = `${refElement.target.offsetWidth + 2 }px`
                break;
        
            default:
                break;
        }
        if(initScroll === true){
            let cord = searchCell(refElement.target.id)
            const tempCell = quadricula[cord[0]][cord[1]]
            const tempSpace = quadricula[cordSpaceWhite[0]][cordSpaceWhite[1]]
            let newQuadricula = quadricula.map((e,i)=>e.map((e,j)=>
                    {
                        if(i == cord[0] && j == cord[1]){
                            return tempSpace
                        }
                        else if(i == cordSpaceWhite[0] && j == cordSpaceWhite[1]){
                            return tempCell
                        }
                        else{
                            return e
                        }
                    }))
            setQuadricula(newQuadricula)
        }
        setInitScroll(false)
    }
    const onMouseDownHandler=(e)=>{
        e.preventDefault()
        setInitClientX(e.clientX)
        setInitClientY(e.clientY)
        setRefElement(e)
        const cord = searchCell(parseInt(e.target.id));
        if(cord[0] === cordSpaceWhite[0]){
            if (cord[1] > cordSpaceWhite[1] && cord[1] - 1 === cordSpaceWhite[1]){
                setToMove("left")
            }
            else if (cord[1] < cordSpaceWhite[1] && cord[1] + 1 === cordSpaceWhite[1]){
                setToMove("right")
            }
        }
        else if(cord[0] + 1 === cordSpaceWhite[0] && cord[1] === cordSpaceWhite[1]){
            setToMove("bottom")
        }
        else if(cord[0] - 1 === cordSpaceWhite[0] && cord[1] === cordSpaceWhite[1]){
            setToMove("top")
        }
    }

    const onMouseMoveHandler = (e) =>{
        
        if (initScroll === true && refElement && toMove) {
            // scrollY(e,refElement)
            switch (toMove) {
                case "left":
                    moveToLeft(e,refElement)
                    break;
                case "right":
                    moveToRight(e,refElement)
                    break;
                case "top":
                    moveToTop(e,refElement)
                    break;
                case "bottom":
                    moveToBottom(e,refElement)
                    break;
            
                default:
                    break;
            }
        }
    }

    function moveToBottom(e,refElement){
        if(initClientY){
            let y = e.clientY - initClientY
            if(y < e.target.offsetWidth && y > 0){
                refElement.target.style.top = `${y}px`
            }
        }
    }

    function moveToTop(e,refElement){
        if(initClientY){
            let y = e.clientY - initClientY
            if(y > (e.target.offsetWidth * -1) && y < 0){
                refElement.target.style.top = `${y}px`
            }
        }
    }

    function moveToLeft(e,refElement){
        if(initClientX){
            let x = e.clientX - initClientX
            if(x > (e.target.offsetWidth * -1) && x < 0){
                refElement.target.style.left = `${x}px`
            }
        }
    }

    function moveToRight(e,refElement){
        if(initClientX){
            let x = e.clientX - initClientX
            if(x < e.target.offsetWidth && x > 0){
                refElement.target.style.left = `${x}px`
            }
        }
    }

    return(

        <div>
            <figure id='figure-model'>
                <img src={figura} alt="golden_cup" />
            </figure>
            <div className='wooden-frame'>
                <div className='wooden-frame-panel'>
                    {(quadricula && quadricula.length > 0) &&
                        quadricula.map((row,i)=>
                        row.map((cell,j)=>
                        <div key={cell.props.id} 
                            className='wooden-frame-grid'
                            onMouseDown={onMouseDownHandler}
                            onMouseMove={onMouseMoveHandler}
                            onMouseUp={onMouseUpHandler}
                            onTouchStart={onMouseDownHandler}
                            onTouchMove={onMouseMoveHandler}
                            onTouchEnd={onMouseUpHandler}
                            >
                                {(cell.props.id !== ((dimension * dimension)-1) ) && cell}
                        </div>))}
                </div>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
            
        
    )
}
export {JigsawPuzzle}