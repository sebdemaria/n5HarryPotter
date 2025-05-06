import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner: React.FC = () => {
    return (
        <SpinnerWrapper className='spinner'>
            <SpinnerLoader className='spinner__loader' />
        </SpinnerWrapper>
    );
};

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

const SpinnerLoader = styled.div`
    width: 48px;
    height: 48px;
    border: 4px solid #ccc;
    border-top-color: #333;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;

export default Spinner;
