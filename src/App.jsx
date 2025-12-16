import Profile from './components/profile.jsx'
import Welcome from './components/welcome.jsx'
import Register from './components/register.jsx'
import Login from './components/Login.jsx'
import Course from './components/course.jsx'
import './App.css'
import { Routes , Route ,Link} from 'react-router-dom'
function App() {

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
      <Link to={'/course'}replace >
            <h2>Course</h2>
      </Link>
    </div>

    <Routes>
      <Route path='/' element={<Login/>}/> 
      <Route path='/register' element={<Register/>}/>
      <Route path='/welcom' element={<Welcome/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/course' element={<Course/>}/>
    </Routes>
    </>
  )
}

export default App
