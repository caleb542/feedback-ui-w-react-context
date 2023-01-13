import React from 'react'
// import ReactDOM from 'react-dom'
// using up-to-date React 18 methods replacing older ReacDOM method  
import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById("app")
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
    <App tab="home" />
    </React.StrictMode>
)

