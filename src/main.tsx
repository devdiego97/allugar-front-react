import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <CustomProvider>
     <React.StrictMode>
      <App />
    </React.StrictMode>
  </CustomProvider>
 </BrowserRouter>
)
