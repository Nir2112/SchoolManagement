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
          body: '#212121',
          surface: '#3d3d3d', 

        },
        text: {   
          secondary: '#ffffff',  
          icon: '#9394a5',  
        },
      },
    },
    light:{
      palette: {
        background: {
          body: '	#ffffff',
          surface: '#f1f1f2', 
        },
        text: {   
          secondary: '#484b6a',  
          icon: '#9394a5',  
        },
      },
   },
  }
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
