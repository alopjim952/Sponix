import { createSlice } from '@reduxjs/toolkit'

const localUser = JSON.parse(localStorage.getItem('user'));

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localUser? localUser:null,
  },
  reducers: {
    login: (state, action) => {
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify({user:state.user}));
    },
    logout: (state) => {
        state.user = null;
        localStorage.removeItem('user');
    }
  }
});

export const ActualSongSlice = createSlice({
  name: 'actualSong',
  initialState: {
    actualSong: null,
  },
  reducers: {
    changeActualSong: (state, action) => {
      state.actualSong = action.payload;
      localStorage.setItem('actualSong', JSON.stringify({actualSong:state.actualSong}));
    }
  }
});

export const FavoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    changeFavorite: (state, action) => {
        state.listFavorite = action.payload;
    }
  }
});

export const ListReproductionSlice = createSlice({
  name: 'listReproduction',
  initialState: {
    listReproduction: [],
  },
  reducers: {
    changeListReproduction: (state, action) => {
        state.listReproduction = action.payload;
    }
  }
});

export const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    search: [],
  },
  reducers: {
    changeSearch: (state, action) => {
        state.search = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout } = AuthSlice.actions
export const { changeActualSong } = ActualSongSlice.actions
export const { changeFavorite } = FavoriteSlice.actions
export const { changeListReproduction } = ListReproductionSlice.actions
export const { changeSearch } = SearchSlice.actions