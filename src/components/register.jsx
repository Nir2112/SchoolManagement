import { useState } from "react"
import axios from "axios"

const Register =() =>{
    const [student, setStudent] = useState([])
    
    const addField=(field,value)=>{
        setStudent({
            ...student,
            [field]:value
        })
    }

    const addStudent=()=>{
        axios.post(`http://10.100.11.15:3000/register`,student)
        .then((res)=>{
            alert("seccessful Register");  
        })
        .catch((err)=>{
            console.log(err);  
            alert("error")       
        })
    }

    return(<div>
        <h1>Register page</h1>
        <div style={{display:'flex',flexDirection:'column'}}>
            <input type="text" placeholder="id" onChange={(e) => addField("id",e.target.value)}/>
            <input type="text" placeholder="name" onChange={(e) => addField("name",e.target.value)}/>
            <input type="text" placeholder="password" onChange={(e) => addField("password",e.target.value)}/>
            <input type="text" placeholder="email" onChange={(e) => addField("email",e.target.value)}/>
            <input type="text" placeholder="phone" onChange={(e) => addField("phone",e.target.value)}/>
            <input type="text" placeholder="birthday" onChange={(e) => addField("birthday",e.target.value)}/>
            <input type="text" placeholder="study" onChange={(e) => addField("study",e.target.value)}/>
        </div>
         <div>
            <button>Login</button>
            <button onClick={addStudent}>Register</button>
        </div>
    </div>)
} 

export default Register