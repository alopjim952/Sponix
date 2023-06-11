import React from 'react'
import {SearchInputContainer} from './styles'

export const SearchInput = ({search, setSearch}) => {
  return (
    <SearchInputContainer>
        <input type="text" value={search} onChange={setSearch} placeholder="Busca Canciones"/>
    </SearchInputContainer>
    
  )
}
