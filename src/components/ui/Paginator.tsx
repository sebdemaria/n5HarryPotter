import React from "react";
import styled from "styled-components";

interface PaginationInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

interface PaginatorProps {
    info: PaginationInfo;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({
    info,
    currentPage,
    onPageChange
}) => {
    const totalPages = info.pages;

    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <PaginatorWrapper className='paginator'>
            <PaginatorButton
                className='paginator__button'
                disabled={currentPage === 1}
                onClick={handlePrev}
            >
                {"<"}
            </PaginatorButton>

            <PaginatorText className='paginator__number'>
                Página {currentPage} de {totalPages}
            </PaginatorText>

            <PaginatorButton
                className='paginator__button'
                disabled={currentPage === totalPages}
                onClick={handleNext}
            >
                {">"}
            </PaginatorButton>
        </PaginatorWrapper>
    );
};

const PaginatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
`;

const PaginatorButton = styled.button`
    background-color: #f1f1f1;
    color: #333;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &:hover:not(:disabled) {
        background-color: #e1e1e1;
    }
`;

const PaginatorText = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: #555;
`;
