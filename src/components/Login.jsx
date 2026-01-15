import { useState,useEffect,useRef, useContext } from "react" 
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { logUserContext, serverContext } from "../App.jsx"

import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import LoginIcon from '@mui/icons-material/Login';

import IconButton from '@mui/joy/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login =() =>{

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);


    const [id,setId] = useState("")
    const [pass,setPass] = useState("")

    const {server} = useContext(serverContext)
    const {login , logUser} = useContext(logUserContext)
    //useEffect(()=>console.log(id,pass),[id,pass])
    useEffect(() => {
        if (logUser.status) {
            navigate('/welcom'); // או לכל דף ראשי אחר
        }
    }, [logUser.status]);

    const checkLogin=()=>{
        server.get(`/login`,{
            params:{
                id: id,
                pass: pass
            }          
        })
        .then((res)=>{
            console.log(res);
            
            //alert("seccessful Login"); 
            login(id)
            navigate('/welcom/')        
        })
        .catch((err)=>{
            console.log(err);
            alert(err.response.data)

            
        })
    }
    return(<div>
        {/* <div style={{display:'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
        {<LoginIcon sx={{ fontSize: 80 }}/>}    
        <h1 style={{ margin: 0 }}>Collage Login</h1>
        </div> */}
        <Box component="section" sx={{ p: 2, border: '1px solid grey',borderRadius:'10px', width:'450px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <LoginIcon sx={{ fontSize: 80 }} />  
            <Typography level="h2" component="h1" color='white' sx={{ mt: 0, fontWeight: 'xl' }}>
                Collage Login
            </Typography>
        </div>
        <div style={{display:'flex',flexDirection:'column',margin: 20}}>
            <Stack spacing={0.9}>
                <Input
                    type="text"
                    placeholder="id"
                    onChange={(e) => setId(e.target.value)}
                    />
                <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    onChange={(e) => setPass(e.target.value)}           
                    endDecorator={
                        <div style={{ display: 'flex',flexDirection:'row', alignItems: 'center', gap: '10px' }}>
                        <IconButton
                            onClick={() => setShowPassword(!showPassword)} // שינוי המצב בלחיצה
                            variant="plain"
                            color="neutral"
                            size="sm"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </div>
                    }/>
            </Stack>       

        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Stack direction="row" spacing={2}>
                <Button variant="solid"  onClick={checkLogin} >
                    Login
                </Button>
                <Button variant="outlined" onClick={()=>navigate('/register/')}>
                    register
                </Button>
            </Stack>
        </div>
        </Box>
    </div>)
} 
export default Login