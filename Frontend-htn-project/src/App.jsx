import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LineChart from './front.jsx'
import Button from '@mui/material/Button'

function App() {

  return (
    <div>
       <LineChart />
       <Button variant="contained">Hoowik Start</Button>
    </div>
  )
}

export default App
