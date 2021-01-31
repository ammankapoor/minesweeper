import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex
`;

const Row = ({ children }) => {
    return (
        <StyledRow>
            {children}
        </StyledRow>
    )
}

export default Row;