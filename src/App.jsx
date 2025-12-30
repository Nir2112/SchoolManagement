import Profile from './components/profile.jsx'
import Welcome from './components/welcome.jsx'
import Register from './components/register.jsx'
import Login from './components/Login.jsx'
import Studing from './components/Studing.jsx'
import './App.css'
import { Routes , Route ,Link, useNavigate} from 'react-router-dom'
import { createContext, useState } from 'react'
import axios from 'axios'

export const serverContext = createContext()
export const logUserContext = createContext()

function App() {
  const server =axios.create({baseURL:"http://10.100.11.15:3000"}) 
  const navigate = useNavigate()
  const [logUser, setlogUser,setCourses] = useState({
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
    <div style={{position:'fixed',top:200,display:'flex',flexDirection:'row',gap:'10px'}}> 
      <Link to={'/'} replace>
        <h2>Login</h2>
      </Link>
        <Link to={'/register'}replace >
            <h2>Register</h2>
      </Link>
      <Link to={'/welcom'}replace >
            <h2>Welcom</h2>
      </Link>
      <Link to={'/profile'}replace >
            <h2>Profile</h2>
      </Link>
      <Link to={'/studing'}replace >
            <h2>Studing</h2>
      </Link>
    </div>

    <serverContext.Provider value={{server}}>
      <logUserContext.Provider  value={{logUser,login,logout}}>
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
