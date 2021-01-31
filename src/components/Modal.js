import React from 'react';
import styled from 'styled-components';

const StyledModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`;

const StyledInnerContainer = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
`;

const StyledClose = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Modal = ({ setShowModal, gameState }) => {
    return (
        <StyledModalContainer>
            <StyledInnerContainer>
                <StyledClose onClick={() => setShowModal(false)}>&times;</StyledClose>
                <h1>{gameState === 1 ? 'Congratulations' : 'Sorry'}</h1>
                <p>You {gameState === 1 ? 'won' : 'lost'} the game, on closing the pop up new game will start!</p>
            </StyledInnerContainer>
        </StyledModalContainer>)
}

export default Modal;