import { HarryPotterCharacter } from "@/types/harryPotterAPITypes";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface CharacterCardProps {
    character: HarryPotterCharacter;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const { t } = useTranslation();
    const { name, image, species, gender, house, actor, patronus, wand } =
        character;

    return (
        <Card className='character-card'>
            <ImageWrapper className='character-card__image-wrapper'>
                <Image src={image} alt={name} />
            </ImageWrapper>

            <Content className='character-card__content'>
                <Name className='character-card__name'>{name}</Name>

                <TextLabel>
                    {t("character.species", "Species fallback")}
                </TextLabel>
                <Text className='character-card__text'>{species}</Text>

                <TextLabel>{t("character.gender")}</TextLabel>
                <Text className='character-card__text'>{gender}</Text>

                <TextLabel>{t("character.house")}</TextLabel>
                <Text className='character-card__text'>{house || "—"}</Text>

                <TextLabel>{t("character.actor")}</TextLabel>
                <Text className='character-card__text'>{actor}</Text>

                <TextLabel>{t("character.patronus")}</TextLabel>
                <Text className='character-card__text'>
                    {patronus || "None"}
                </Text>

                <TextLabel>{t("character.wand")}</TextLabel>
                <Text className='character-card__text'>
                    {wand?.wood || "—"} / {wand?.core || "—"} /{" "}
                    {wand?.length || "—"}"
                </Text>
            </Content>
        </Card>
    );
};

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 12px;
    overflow: hidden;
    max-width: 300px;
    min-width: 300px;
    min-height: 480px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ImageWrapper = styled.div`
    background: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    max-height: 390px;
    overflow: hidden;
`;

const Image = styled.img`
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
`;

const Content = styled.div`
    padding: 16px;
`;

const Name = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 8px;
`;

const Text = styled.p`
    font-size: 0.95rem;
    margin: 2px 0;
    color: #444;
`;

const TextLabel = styled.strong`
    display: block;
    font-size: 0.85rem;
    color: #666;
    margin-top: 6px;
`;
