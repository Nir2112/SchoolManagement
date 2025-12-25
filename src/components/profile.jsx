import { useContext } from "react"
import { logUserContext } from "../App"

const Profile =() =>{
    const {logUser, logout}= useContext(logUserContext) 
    const {name,id,email,phone,birthday,study} = logUser.user   
    return(<div>
        <h1>Profile page</h1>
        <div>
            <h2>Name: {name}</h2>
            <h2>ID: {id}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
            <h2>Birth day {birthday}:</h2>
            <h2>Studing: {study}</h2>
        </div>
        <button onClick={logout}>logout</button>
        
        {/*?? לבדוק לגבי זה גם בregister + server
         <div>
            <img src="" alt="" />
        </div> */}
    </div>)
} 

export default Profile