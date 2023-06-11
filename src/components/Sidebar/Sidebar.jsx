import React from 'react'
import { SidebarContainer } from './styles'
import { SidebarChoice } from './SidebarChoice'
import SponixImg from '../../assets/Sponix.png'

export const Sidebar = () => {
  return (
    <SidebarContainer>
        <img src={SponixImg} alt='Sponix'></img>
        
        <hr />
    </SidebarContainer>
  )
}
