import { useState,useEffect,useRef, useContext } from "react" 
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { logUserContext, serverContext } from "../App.jsx"

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Input from '@mui/joy/Input';
import LoginIcon from '@mui/icons-material/Login';

const Login =() =>{

    const navigate = useNavigate();


    const [id,setId] = useState("")
    const [pass,setPass] = useState("")

    const {server} = useContext(serverContext)
    const {login} = useContext(logUserContext)
    useEffect(()=>console.log(id,pass),[id,pass])

    const checkLogin=()=>{
        server.get(`/login`,{
            params:{
                id: id,
                pass: pass
            }          
        })
        .then((res)=>{
            console.log(res);
            
            alert("seccessful Login"); 
            login(id)
            navigate('/welcom/')        
        })
        .catch((err)=>{
            console.log(err);
            alert("error")

            
        })
    }
    return(<div>
        <h1 > {<LoginIcon/>}Login page </h1>
        <div style={{display:'flex',flexDirection:'column'}}>
            <Stack spacing={0.9}>
                <Input
                    type="text"
                    placeholder="id"
                    onChange={(e) => setId(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPass(e.target.value)}                 
                />
            </Stack>       

        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10%' }}>
            <Stack direction="row" spacing={2}>
                <Button variant="contained"  onClick={checkLogin} >
                    Login
                </Button>
                <Button variant="outlined" onClick={()=>navigate('/register/')}>
                    register
                </Button>
            </Stack>
        </div>
    </div>)
} 
export default Login