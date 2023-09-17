import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LineChart from './front.jsx'
import Button from '@mui/material/Button';
import hoowik from './assets/hoowik.png';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <img style={{width: "150px", height: "auto", borderRadius: "50%"}} src={hoowik} alt="Description of the image" />
    <LineChart />
    <Button variant="contained" disabled className="Button PurpleButton">
      Hoowik Start
    </Button> */}
  </React.StrictMode>,
)


