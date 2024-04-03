import React from 'react'

export const WelcomeComponent = () => {
  return (
    <div className='row justify-content-md-center'>
        <div className='jumbotron jumbotron-fluid'>
            <div className='container'>
                <h1 className='display-4'>Welcome</h1>
                <p className='lead'>Login to see protected contect</p>
            </div>
        </div>
    </div>
  )
}

export default WelcomeComponent;