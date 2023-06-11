import React from 'react'
import {useDispatch} from 'react-redux'
import { BodyContainer } from './styles'
import { Header } from './Header'
import { logout } from '../../redux/slice/Slice'
import {Search} from '../Search/Search';


export const Body = () => {
  return (
    <BodyContainer>
        <Header />
        <Search />
    </BodyContainer>
  )
}
