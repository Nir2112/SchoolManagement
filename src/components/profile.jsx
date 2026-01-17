import { useContext } from "react"
import { logUserContext } from "../App"
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/joy/IconButton';

const Profile =() =>{
    const {logUser, logout}= useContext(logUserContext) 
    const {name,id,email,phone,birthday,study} = logUser.user   
    return(<div>
        <div>
            <h3>Name: {name}</h3>
            <h3>ID: {id}</h3>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Birth day: {birthday}</h3>
            <h3>Studies: {study}</h3>
        </div>
        <IconButton
            variant="plain"
            color="neutral"
            size="lg"
            onClick={logout}>
                <LogoutIcon /> Logout
        </IconButton>
    </div>)
} 

export default Profile