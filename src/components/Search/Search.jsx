import React, {useState, useEffect} from 'react'
import {SearchInput} from './SearchInput';
import {SearchResults} from './SearchResults';
import {SearchsContainer} from './styles';
import { useDispatch, useSelector } from 'react-redux'
import { changeActualSong } from '../../redux/slice/Slice'

export const Search = () => {

  const [searchInput, setSearchInput ] = useState('');
  const [tracks, setTracks] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if(searchInput.length >= 5){
      const provider_token = JSON.parse(localStorage.getItem('sb-jakxjgqdqdbkdwgiprkr-auth-token')).provider_token;
  
      const options = {
        headers: {
          Authorization: `Bearer ${provider_token}`
        }
      };
  
      fetch(`https://api.spotify.com/v1/search?q=remaster%2520track%3A${searchInput}&type=track&market=ES&limit=10`, options)
        .then(response => response.json())
        .then(response => setTracks(response.tracks.items))
        .catch(err => console.error(err));
    } else {
      setTracks([]);
    }
  }, [searchInput])

  const setSearchValue = (event) => {
    setSearchInput(event.target.value);
  }

  const changeActSong = (event) => {
    const provider_token = JSON.parse(localStorage.getItem('sb-jakxjgqdqdbkdwgiprkr-auth-token')).provider_token;
  
    const options = {
      headers: {
        Authorization: `Bearer ${provider_token}`
      }
    };

    console.log(event.target.id);

    fetch(`https://api.spotify.com/v1/tracks/${event.target.id}`, options)
      .then(response => response.json())
      .then(response => dispatch(changeActualSong(response)))
      .catch(err => console.error(err));
  }

  return (
    <>
        <SearchInput search={searchInput} setSearch={setSearchValue} />
        <SearchsContainer>
          {tracks && <SearchResults tracks={tracks} changeSong={changeActSong}/>}
        </SearchsContainer>
    </>
  )
}
