import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CssVarsProvider,extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

const customTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          // body = הרקע הכללי של האתר
          body: '#1a1a2e', // דוגמה: כחול-לילה כהה (במקום שחור)
          
          // surface = הרקע של התפריט, כרטיסיות, ומודלים
          surface: '#16213e', // דוגמה: גוון קצת יותר בהיר מהרקע
          
          // level1 = רכיבים משניים (כמו inputs לפעמים)
          level1: '#0f3460',
        },
        // אפשר גם לשנות את צבע הטקסט אם רוצים
        // text: {
        //   primary: '#f3f3f3', //'#e94560', דוגמה: טקסט ורדרד (רק להדגמה)
        //   // עדיף להשאיר את הדיפולט: #f3f3f3
        // } 
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CssVarsProvider theme={customTheme}>
      <CssBaseline />
    <StrictMode>
      <App />
    </StrictMode>
    </CssVarsProvider>
  </BrowserRouter>
)
