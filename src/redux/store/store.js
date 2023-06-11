import { configureStore } from '@reduxjs/toolkit'
import {ActualSongSlice, AuthSlice, FavoriteSlice, ListReproductionSlice, SearchSlice} from '../slice/Slice'

export default configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    actualSong: ActualSongSlice.reducer,
    favorite: FavoriteSlice.reducer,
    listReproduction: ListReproductionSlice.reducer,
    search: SearchSlice.reducer,
  },
})