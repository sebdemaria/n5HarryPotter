import { getHarryPotterData } from "@/httpServices/api/getHarryPotterData";
import { HarryPotterCharacter } from "@/types/harryPotterAPITypes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Paginator } from "../ui/Paginator";
import Spinner from "../ui/Spinner";
import { CharacterCard } from "./CharacterCard";

const CHARACTERS_PER_PAGE = 10;

export default function CharactersList() {
    const { t } = useTranslation();

    const [page, setPage] = useState(1);
    const [data, setData] = useState<HarryPotterCharacter[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            setIsLoading(true);
            setHasError(false);

            try {
                const response = await getHarryPotterData(
                    String(import.meta.env.VITE_BASE_API_URL),
                    `/characters`
                );
                setData(response);
            } catch (error) {
                console.error("Error fetching characters:", error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCharacters();
    }, [page]);

    const totalPages = Math.ceil(data.length / CHARACTERS_PER_PAGE);
    const paginatedCharacters = data.slice(
        (page - 1) * CHARACTERS_PER_PAGE,
        page * CHARACTERS_PER_PAGE
    );

    const paginationInfo = {
        count: data.length,
        pages: totalPages,
        next: page < totalPages ? `${page + 1}` : null,
        prev: page > 1 ? `${page - 1}` : null
    };

    if (isLoading) return <Spinner />;
    if (hasError || data.length === 0) return <p>{t("characterList.error")}</p>;

    return (
        <Characters className='characters'>
            <CharactersTitle className='characters__title'>
                {t("title")}
            </CharactersTitle>
            <CharactersGrid className='characters__grid'>
                {paginatedCharacters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </CharactersGrid>
            <CharactersPagination className='characters__paginator'>
                <Paginator
                    info={paginationInfo}
                    currentPage={page}
                    onPageChange={setPage}
                />
            </CharactersPagination>
        </Characters>
    );
}

const Characters = styled.section`
    padding: 2rem;
    font-family: ${({ theme }) => theme.fonts.main};
`;

const CharactersTitle = styled.h1`
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    text-align: center;
`;

const CharactersGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    justify-items: center;
    align-items: stretch;
`;

const CharactersPagination = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`;
