import React from 'react'
import '../Main/App.css'

export const Header = (props) => {
  return (
    <header className='App-header'>
        <img src={props.logoSrc} className='App-logo' alt='logo'></img>
        <h1 className='App-title'>{props.pageTitle}</h1>
    </header>
  )
}

export default Header;
