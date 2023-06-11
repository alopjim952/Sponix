import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { FooterContainer, FooterLeft, FooterCenter, FooterRight, AudioContainer } from './styles'
import { Grid } from '@material-ui/core'
import { SongContext } from '../../context/SponixContext';

export const Footer = () => {

  let {actualSong} = useSelector((state) => state.actualSong);

  if(document.querySelector('#audioActual')) {
    document.querySelector('#audioActual').play();
  }

  return (
    <FooterContainer>
      {actualSong &&
        <>
          <FooterLeft>
            {actualSong.name}
          </FooterLeft>
          <FooterCenter>
            <AudioContainer>
                <audio id="audioActual" controls>
                  <source id="sourceActual" src={actualSong?.preview_url} type="audio/mpeg" />
                  Tu navegador no soporta la reproducción de audio.
                </audio>
            </AudioContainer>
          </FooterCenter>

          <FooterRight>

          </FooterRight>
        </>
      }
    </FooterContainer>
  )
}
