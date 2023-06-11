import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight, Photo } from './styles'
import { Avatar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slice/Slice'



export const Header = () => {

  let {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    {user} &&
    <HeaderContainer>
        <HeaderLeft />
          <HeaderRight>
              <Photo>
                <img src={user.avatar_url} alt="foto perfil" width="40px" id="imageProfile" title={user.full_name}/>
                <div id="options">
                  <button onClick={() => dispatch(logout())}>LogOut</button>
                </div>
              </Photo>
          </HeaderRight>
    </HeaderContainer>
  )
}
