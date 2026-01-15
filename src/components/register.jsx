import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';

import IconButton from '@mui/joy/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import PersonAddIcon from '@mui/icons-material/PersonAdd';

const passwordRules = {
  lower: /[a-z]/,
  upper: /[A-Z]/,
  number: /[0-9]/,
  special: /[^A-Za-z0-9]/,
  length: /.{12,}/, // minLength
};

const getPasswordStrength = (password) => {
  let score = 0;

  if (passwordRules.lower.test(password)) score += 20;
  if (passwordRules.upper.test(password)) score += 20;
  if (passwordRules.number.test(password)) score += 20;
  if (passwordRules.special.test(password)) score += 20;
  if (passwordRules.length.test(password)) score += 20;

  return score;
};

const Register =() =>{
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        password:""
    }) 

    const [showPassword, setShowPassword] = useState(false);
    const password = student.password || "";
    const strength = getPasswordStrength(password);
    const hue = Math.min(strength * 1.2, 120);


    const addField=(field,value)=>{
        setStudent({
            ...student,
            [field]:value
        })
        
    }
    const addStudent=()=>{
        axios.post(`http://localhost:3000/register`,student)
        .then((res)=>{
            alert("seccessful Register");  
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);  
            alert("error")       
        })
    }
    // useEffect(()=>{
    //     console.log(student)
    // },[student])
    return(<div>
         <Box component="section" sx={{ p: 2, border: '1px solid grey',borderRadius:'10px', width:'450px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <PersonAddIcon sx={{ fontSize: 80 }} />  
            <Typography level="h2" component="h1" color='white' sx={{ mt: 0, fontWeight: 'xl' }}>
                Collage Register
            </Typography>
        </div>
        <div style={{display:'flex',flexDirection:'column', margin: '20px'}}>
            <Stack spacing={0.9} sx={{ '--hue': hue }}>
                <Input
                    type="text"
                    placeholder="id"
                    value={student.id}
                    onChange={(e) => addField("id",e.target.value)}
                    />
                <Input
                    type="text"
                    placeholder="name"
                    value={student.name}
                    onChange={(e) => addField("name",e.target.value)}
                    />
                <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    value={student.password}
                    onChange={(e) => addField("password",e.target.value)}          
                    endDecorator={
                        <div style={{ display: 'flex',flexDirection:'row', alignItems: 'center', gap: '10px' }}>   
                            <Typography
                            level="body-xs"
                            sx={{  color: `hsl(${hue} 80% 30%)`,whiteSpace: 'nowrap',fontSize: '12px' }}>
                                {strength < 40 && 'Very weak'}
                                {strength >= 40 && strength < 60 && 'Weak'}
                                {strength >= 60 && strength < 80 && 'Strong'}
                                {strength >= 80 && 'Very strong'}
                            </Typography>
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
                
                 <Input
                    type="text"
                    placeholder="email"
                    value={student.email}
                    onChange={(e) => addField("email",e.target.value)}
                    />
                 <Input
                    type="text"
                    placeholder="phone"
                    value={student.phone}
                    onChange={(e) => addField("phone",e.target.value)}
                    />
                 <Input
                    type="text"
                    placeholder="birthday"
                    value={student.birthday}
                    onChange={(e) => addField("birthday",e.target.value)}
                    />
                 <Input
                    type="text"
                    placeholder="study"
                    value={student.study}
                    onChange={(e) => addField("study",e.target.value)}
                    />
            </Stack>       
        </div>
        <div style={{ display: 'flex', justifyContent: 'center'  }}>
            <Stack direction="column" spacing={2}>
                <Button variant="outlined" onClick={addStudent }>
                    register
                </Button>
                <Button variant="solid"  onClick={()=> navigate('/') } >
                    Login
                </Button>
            </Stack>
        </div>
        </Box>
    </div>)
} 
export default Register







{/* <div style={{display:'flex',flexDirection:'column', margin: '20px'}}>
            <Stack spacing={0.9} sx={{ '--hue': hue }}></Stack>
                    <Input
                        type="password"
                        placeholder="password"
                        value={student.password}
                        onChange={(e) => addField("password",e.target.value)}
                        
                        />
                    <Typography
                        level="body-xs"
                        sx={{ alignSelf: 'flex-end', color: `hsl(${hue} 80% 30%)` }}
                        >
                        {strength < 40 && 'Very weak'}
                        {strength >= 40 && strength < 60 && 'Weak'}
                        {strength >= 60 && strength < 80 && 'Strong'}
                        {strength >= 80 && 'Very strong'}
                    </Typography>
                    </Stack>
        </div> */}