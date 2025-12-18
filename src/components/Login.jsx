import { useState,useEffect,useRef, use } from "react" 
import axios from "axios"

const Login =() =>{
    const [id,setId] = useState("")
    const [pass,setPass] = useState("")

    const checkLogin=()=>{
        axios.get(`http://10.100.11.15:3000/login`,{
            params:{
                id: id,
                pass: pass
            }
        })
        .then((res)=>{
            alert("seccessful Login");         
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
            <button>Register</button>
        </div>
    </div>)
} 

export default Login