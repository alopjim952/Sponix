import React from 'react'
import favoritePhoto from '../../assets/favorite.png'
import noFavoritePhoto from '../../assets/no-favorite.png'
import play from '../../assets/boton-de-play.png'
import {SearchContainer, PlayContainer, InfoContainer, ActionsContainer} from './styles'

export const SearchResults = ({tracks, changeSong}) => {

    return (
        <>
        {tracks.map((t) => (
            <SearchContainer key={t.id}>
                <PlayContainer>
                    <img src={play} alt="play" id={t.id} onClick={(e) => changeSong(e)}/>
                </PlayContainer>
                <InfoContainer>
                    {t.name}
                </InfoContainer>
                <ActionsContainer>
                </ActionsContainer>
            </SearchContainer>
        ))}
        </>
    );
}
