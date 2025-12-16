import { Routes , Route ,Link} from 'react-router-dom'
const Welcome =() =>{
    return(<div>


        <h1>Welcome page</h1>
            <div style={{position:'fixed',top:0,display:'flex',flexDirection:'row',gap:'10px'}}> 
                <Link to={'/profile'}replace >
                        <h2>Profile</h2>
                </Link>
                <Link to={'/course'}replace >
                        <h2>Course</h2>
                </Link>
            </div>
        <div>
            <h2>menu</h2>
        </div>
    </div>)
} 

export default Welcome