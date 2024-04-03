import React from 'react'
import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';

import AuthContect from '../Auth/AuthContent'

export const AppContent = () => {
  return (
    <div>
        <WelcomeComponent/>
        <AuthContect/>
    </div>
  )
}

export default AppContent;
