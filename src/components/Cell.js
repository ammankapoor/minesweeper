import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${props => props.isRevealed ? props.isMine ? "#ff8080" : "#00bfff;" : "#8000ff;"};
    border: 1px solid white;
    color: white;
    pointer-events: ${props => props.gameState !== 0 ? "none;" : "auto"};
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const Cell = ({ data, changeStatus, gameState }) => {
    return <StyledCell onClick={changeStatus} isMine={data.value === 'X'} gameState={gameState} isRevealed={data.revealed}>
        {data.revealed && data.value}
    </StyledCell>
}

export default Cell;