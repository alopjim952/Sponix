import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { supabase } from './supabase/supabase.config'
import Login from './pages/login'
import RoutesApp from './routes/routesApp'
import { AuthContext } from './context/SponixContext'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import { selectSearchs } from './database/Supabase'

function App() {
  const [usuarios, setUsuarios] = useState()

  let user = localStorage.getItem('user')? localStorage.getItem('user'):null;

  async function selectAllUsers(){
    let { data: usuario, error } = await supabase
    .from('user')
    .select('*')
    if(error) console.log(error)
    return usuario
  }

  return (
    <>
      <Provider store={store}>
        <RoutesApp />
      </Provider>
    </>
  )
}

export default App
