import Profile from './components/profile.jsx'
import Welcome from './components/welcome.jsx'
import Register from './components/register.jsx'
import Login from './components/Login.jsx'
import Courses from './components/courses.jsx'
import ModeToggle from './components/darkLight.jsx'
import './App.css'
import { Routes , Route ,Link, useNavigate} from 'react-router-dom'
import { createContext, useState } from 'react'
import axios from 'axios'

import Sheet from '@mui/joy/Sheet';
import { Typography } from '@mui/joy'
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import IconButton from '@mui/joy/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const serverContext = createContext()
export const logUserContext = createContext()

//10.100.11.15
const domain = "localhost"

function App() {
  const server =axios.create({baseURL:`http://${domain}:3000`}) 
  const [openProfile, setOpenProfile] = useState(false);
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
            bgcolor: 'background.surface'
          }}>
          {logUser.status &&(
            <div style={{ display: 'flex', gap: '15px' }}>
              <Link to={'/welcom'} style={{ textDecoration: 'none' }}>
                  <Typography level="title-md" color="neutral">Welcome</Typography>
              </Link>
              <Link to={'/courses'} style={{ textDecoration: 'none' }}>
                  <Typography level="title-md" color="neutral">Courses</Typography>
              </Link>
          </div>
          )}
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
            {logUser.status && (
                <IconButton 
                    onClick={() => setOpenProfile(true)}
                    variant="plain" 
                    color="neutral" >
                    <AccountCircleIcon />
                </IconButton>
              )}
            <ModeToggle />
          </div>
        </Sheet>
        <div>
        <Routes>
          <Route path='/' element={<Login/>}/> 
          <Route path='/register' element={<Register/>}/>
          <Route path='/welcom' element={<Welcome/>}/>
          <Route path='/courses' element={<Courses/>}/>
        </Routes>
        </div>
        <Drawer 
            open={openProfile} 
            onClose={() => setOpenProfile(false)}
            anchor="right"
            size="md" >
          <ModalClose />
          <DialogTitle>My Profile</DialogTitle>
          <Box sx={{ p: 2, mt: 2 }}>
             <Profile /> 
          </Box>
        </Drawer>
      </logUserContext.Provider>
    </serverContext.Provider>
    </>
  )
}
export default App
