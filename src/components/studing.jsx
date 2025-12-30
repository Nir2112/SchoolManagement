
import { useContext, useEffect,useState } from "react"
import { logUserContext, serverContext } from "../App"

const Studing =() =>{
    const {logUser, logout}= useContext(logUserContext)
    const {server} = useContext(serverContext)
    const [course,setCourse] = useState([])
    const [sum,setSum] = useState(0)


    useEffect(()=>{
        server.get(`/student/${logUser.user.id}/courses`)
        .then((res)=>{
            setCourse(res.data.courses)

        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    useEffect(()=>{
        setSum(course.reduce((acc,c)=>c.grade+acc,0))
    },[course])


    return(<div>
        <h1>studing page</h1>
        <h2>what studing:{logUser.user.study} </h2>
        <h3>Avg Grade:{sum/course.length}</h3>
        <div>
            {course.map((c)=>{
                return(<div>
                    <h2>course name: {c.course_name}</h2>
                    <h2>grade: {c.grade}</h2>
                    <h2>description: {c.description}</h2>
                </div>)
            })} 
                  
        </div>
    </div>)
} 

export default Studing