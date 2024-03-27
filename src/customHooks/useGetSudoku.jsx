// import React, { useEffect, useState } from 'react';

// const  generateRandomNumbers=()=>{
//     const max = 10,min = 1;
//     let roundedRandom = 0
//     do {
//         const random = Math.random() * (max - min) + min;
//         roundedRandom = Math.floor(random);
//     } while (roundedRandom < 1 || roundedRandom > 9);
//     return roundedRandom
// }


// const generateDiagonal = ()=>{
//     let panel = [] 
//     let diagonal = [];
//     while (diagonal.length < 9) {
//         const number = generateRandomNumbers()
//         const filter = diagonal.filter((e)=> e === number)
//         if (filter.length === 0) {
//             diagonal.push(number)
//         }
//     }
//     let countTemp = 0
//     for (let i = 0; i < 3; i++) {
//         let ninth = []
//         let rowNinth = new Array(3)
//         for (let j = 0; j < 3; j++) {
//             const rowNinth = new Array(3)
//             rowNinth[j] = diagonal[countTemp]
//             ninth.push(rowNinth)
//             countTemp++
//         }
//         rowNinth[i] = ninth
//         panel.push(rowNinth)
//     }
//     return panel
// }

// function useSudoku(){
//     const [panel,setPanel]  = useState(0)
//     useEffect(()=>{
//         setPanel(generateDiagonal())
//     },[])

//     return (panel)
// }
// export {useSudoku}

import React, { useState, useEffect } from 'react';
import sudoku from 'sudoku';

function useSudoku() {
    const [board, setBoard] = useState([]);

    useEffect(()=>{
        const puzzle = sudoku.makepuzzle();
        const solution = sudoku.solvepuzzle(puzzle);
        setBoard(solution)
    },[])

    return (
        board
    );
}

export {useSudoku};

