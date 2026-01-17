import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Sheet
      variant="outlined"
      sx={{
        borderRadius: 'md',
        p: 2,
        boxShadow: 'sm',
        maxWidth: '350px', // גודל מקסימלי ללוח שנה
        width: '100%',
        bgcolor: 'background.surface',
        
        // --- דריסת העיצוב של הספרייה כדי שתתאים ל-Joy UI ---
        '& .react-calendar': {
          width: '100%',
          border: 'none',
          backgroundColor: 'transparent', // שקוף כדי לקבל את צבע ה-Sheet
          fontFamily: 'inherit',
        },
        '& .react-calendar__navigation button': {
          color: 'text.primary',
          minWidth: '44px',
          background: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
        },
        '& .react-calendar__navigation button:enabled:hover, & .react-calendar__navigation button:enabled:focus': {
          backgroundColor: 'background.level1',
        },
        '& .react-calendar__month-view__weekdays': {
          color: 'text.tertiary', // ימים (א', ב'...) בצבע חלש יותר
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize: '0.75em',
        },
        '& .react-calendar__tile': {
          color: 'text.primary',
          padding: '10px 6px',
          background: 'none',
          borderRadius: '8px', // פינות עגולות לימים
          '&:hover': {
            backgroundColor: 'background.level1',
          },
        },
        // היום הנוכחי
        '& .react-calendar__tile--now': {
          background: 'var(--joy-palette-neutral-outlinedBorder)', 
          color: 'text.primary',
        },
        // היום שנבחר (Active)
        '& .react-calendar__tile--active': {
          backgroundColor: 'var(--joy-palette-primary-solidBg) !important',
          color: '#fff !important',
        },
      }}
    >
      <Typography level="title-lg" mb={2} >
         Calendar
      </Typography>
      
      <Calendar onChange={onChange} value={value} locale="en-US"/>
      
      <Typography level="body-sm" mt={2} sx={{ textAlign: 'center', color: 'text.secondary' }}>
        Selected: {value.toLocaleDateString('en-US')}
      </Typography>
    </Sheet>
  );
};

export default MyCalendar;