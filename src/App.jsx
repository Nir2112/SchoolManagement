import Profile from './components/profile.jsx'
import Welcome from './components/welcome.jsx'
import Register from './components/register.jsx'
import Login from './components/Login.jsx'
import Studing from './components/Studing.jsx'

import ModeToggle from './components/darkLight.jsx'

import './App.css'
import { Routes , Route ,Link, useNavigate} from 'react-router-dom'
import { createContext, useState } from 'react'
import axios from 'axios'

import Sheet from '@mui/joy/Sheet';

export const serverContext = createContext()
export const logUserContext = createContext()

//10.100.11.15
const domain = "localhost"

function App() {
  const server =axios.create({baseURL:`http://${domain}:3000`}) 
  const navigate = useNavigate()
  const [logUser, setlogUser] = useState({
    user:{},  
    status:false
  })
  const login = (id) =>{
    return server.get('/user/'+id)
    .then((res)=>setlogUser({
      status:true,
      user:res.data
    }))
    .catch((err)=>{
      console.log(err)
    })
  }
  const logout = ()=>{
    setlogUser({
      user:{},
      status:false
    })
    navigate('/',{replace:true})
  }

  return (
    <>
  
    <serverContext.Provider value={{server}}>
      <logUserContext.Provider  value={{logUser,login,logout}}>
        

          <Sheet
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            p: 0,
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            alignItems: 'center',
            boxShadow: 'sm',
            zIndex: 100,
            bgcolor: 'background.surface' // מוודא שיש צבע רקע
          }}
          >
          {logUser.status &&
          <>
          {/* <Link to={'/'} ><h2>Login</h2></Link>
          <Link to={'/register'} ><h2>Register</h2></Link> */}
          <Link to={'/welcom'} ><h2>Welcome</h2></Link>
          <Link to={'/profile'} ><h2>Profile</h2></Link>
          <Link to={'/studing'} ><h2>Studing</h2></Link>
          </>
          }

          <div style={{ marginLeft: 'auto' }}>
            <ModeToggle />
          </div>
        </Sheet>
        
        <Routes>
          <Route path='/' element={<Login/>}/> 
          <Route path='/register' element={<Register/>}/>
          <Route path='/welcom' element={<Welcome/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/studing' element={<Studing/>}/>
        </Routes>
      </logUserContext.Provider>
    </serverContext.Provider>
    </>
  )
}

export default App
