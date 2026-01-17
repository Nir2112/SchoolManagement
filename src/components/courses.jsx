
import { useContext, useEffect,useState } from "react"
import { logUserContext, serverContext } from "../App"
import Table from '@mui/joy/Table';

const Courses =() =>{
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
        <Table borderAxis="both" >
            <thead >
                <tr>
                    <th colSpan={5} style={{ textAlign: 'center' }} >
                        <h2 style={{ margin: 0 }}>{logUser.user.study} - Avg grade: {sum/course.length}</h2>
                    </th>
                </tr> 
                    <tr >
                    <th>Course</th>
                    <th style={{ textAlign: 'center' }}>ID</th> 
                    <th style={{ textAlign: 'center' }}>Description</th>
                    <th style={{ textAlign: 'center' }}>Semester</th>
                    <th style={{ textAlign: 'center' }}>Grade</th>
                </tr>
            </thead>
            <tbody>
                {course.map((c)=>{
                    return(
                        <tr>
                            <th scope="row">{c.course_name} </th>
                            <td>{c.course_id}</td>
                            <td>{c.description}</td>
                            <td>{c.semester}</td>
                            <td>{c.grade}</td>
                        </tr>
                    )
                })}   
            </tbody>
        </Table>             
    </div>)
} 

export default Courses