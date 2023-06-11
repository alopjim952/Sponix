import React, {useState, useEffect} from 'react'
import { SponixBody } from './styles'
import {Sidebar} from '../Sidebar/Sidebar'
import {Body} from '../Body/Body'
import {Footer} from '../Footer/Footer'
import { SongContext } from '../../context/SponixContext'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import { selectFavorite, selectListsReproduction, selectSearchs, selectUser } from '../../database/Supabase'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { changeFavorite, changeListReproduction, changeSearch, login } from '../../redux/slice/Slice'

export const Player = () => {

  let {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    selectUser(user.email).then((u) => {
      dispatch(login(u[0]));
    });
  }, []);

  return (
    <>
      <SponixBody>
        <Sidebar />
        <Body/>
      </SponixBody>
      <Footer />
    </>
  )
}
