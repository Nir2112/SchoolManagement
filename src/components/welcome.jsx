import  { useContext } from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import { logUserContext } from '../App';
import MyCalendar from './myCalendar.jsx'


const Welcome =() =>{
    const { logUser } = useContext(logUserContext);
    return(<div>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row' ,
            gap: 4, 
            p: 4, 
            alignItems: 'flex-start',
            justifyContent: 'center' 
        }}>
            
            <Box sx={{ flex: 1 }}>
                <Typography level="h1" sx={{ mb: 2 }}>
                    Welcome , {logUser.user.name || 'Student'}!
                </Typography>
                <Typography level="h3" color="neutral" sx={{ p: 2, border: '1px solid grey'}}>
                    Here is your daily overview: You have no upcoming exams this week.
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Typography level="body-lg" color="neutral" sx={{ p: 4,margin:5, border: '1px solid grey'}}>
                    Here is your monthly overview. You have no upcoming exams this month.
                </Typography>
                <Typography level="body-lg" color="neutral" sx={{ p: 4,margin:5, border: '1px solid grey'}} >
                    Here is your monthly overview. You have no upcoming exams this month.
                </Typography>
                </div>
                {/* אפשר להוסיף כאן עוד דברים כמו הודעות אחרונות */}
            </Box>
            <Box>
                <MyCalendar />
            </Box>
            
        </Box>
    </div>)
} 

export default Welcome