import React from 'react'
import './App.css'
import logo from '../../logo.svg'
import Headers from '../Headers/Header'
import AppContent from '../AppContent/AppContent'

export const App = () => {
  return (
    <div className='hug'>
        <Headers pageTitle="Frontend page with jwt token" logoSrc={logo}></Headers>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <AppContent/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;
