import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';

//utility
import { createBoard } from '../utils';

//components
import Row from './Row';
import Cell from './Cell';
import Modal from './Modal';

const BoardContainer = styled.div`
    border: 15px solid white;
    border-radius: 10px;
    padding: 50px;
    display: inline-block;
`;

const Board = () => {
    const newBoard = useRef(null);
    const reveleadCellsCount = useRef(0)
    //state starts 
    const [grid, setGrid] = useState([]);
    const [gameState, setGameStatus] = useState(0);
    const [showModal, setShowModal] = useState(false);
    //state ends

    //lifecycle method starts

    useEffect(() => {
        if (gameState != 0) {
            setShowModal(true);
        }
    }, [gameState]);

    useEffect(() => {
        if (!showModal) {
            getNewBoard();
        }
    }, [showModal])

    //lifecycle method ends

    //utility function starts 

    function getNewBoard() {
        newBoard.current = createBoard(5, 5, 10);
        reveleadCellsCount.current = 0;
        setGrid(newBoard.current.board);
        setGameStatus(0);
    }

    function changeStatus(x, y) {
        if (grid[x][y].revealed) {
            return;
        }
        const updatedGrid = [...grid];
        if (grid[x][y].value === 'X') {
            setGameStatus(-1);
            for (var a = 0; a < newBoard.current.mineLocation.length; a++) {
                updatedGrid[newBoard.current.mineLocation[a][0]][newBoard.current.mineLocation[a][1]].revealed = true;
            }
        } else {
            reveleadCellsCount.current++;
        }
        if (reveleadCellsCount.current === (5 * 5) - 1) {
            setGameStatus(1);
        }
        updatedGrid[x][y].revealed = true;
        setGrid(updatedGrid);
    }

    //utility function ends

    return (
        <BoardContainer>
            {grid.map((singleRow, rowIndex) => <Row key={`row${rowIndex}`}>
                {singleRow.map((singleCell, columnIndex) => <Cell data={singleCell} key={`cell${columnIndex}`} gameState={gameState} changeStatus={() => changeStatus(rowIndex, columnIndex)} />)}
            </Row>)}
            {showModal && <Modal gameState={gameState} setShowModal={setShowModal} />}
        </BoardContainer>)
}

export default Board;