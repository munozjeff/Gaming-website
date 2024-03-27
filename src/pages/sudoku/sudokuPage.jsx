import React, { useEffect } from 'react';
import "./style.css"
import { GridSudoku } from '../../components/gridSudoku/gridSudoku';
import { useSudoku } from '../../customHooks/useGetSudoku';

function SudokuPage(){
    const board = useSudoku()
    useEffect(()=>{
        console.log(board);
    },[board])
    return(
        <div className='sudoku-page'>
            <div className='panel-sudoku'>
                <GridSudoku oneThird={[1,2,3,4,5,6,7,8,9]}></GridSudoku>
            </div>
        </div>
    )
}
export {SudokuPage}