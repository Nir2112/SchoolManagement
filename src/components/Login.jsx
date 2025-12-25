import { useState,useEffect,useRef, useContext } from "react" 
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { logUserContext, serverContext } from "../App.jsx"

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
        <h1>Login page</h1>
        <div>
            <input type="text" placeholder="id" onChange={(e) => setId(e.target.value)}/>
            <input type="text" placeholder="password" onChange={(e) => setPass(e.target.value)}/>
        </div>
        <div>
            <button onClick={checkLogin}>Login</button>
            <button onClick={()=>navigate('/register/')}>Register</button>
        </div>
    </div>)
} 

export default Login