import React from 'react'
import { Hypnosis } from 'react-cssfx-loading/lib';
import logo from '../assets/dashboardimg.png'

const Loader = () => {
  return (
    <div className='d-flex align-items-center flex-column justify-content-center w-100' style={{height: '100vh'}}> 
        <Hypnosis color="#2b5877" width="200px" height="200px" duration="3s" />
        <img src={logo} className='position-absolute' width={'7%'}/>
    </div>
  )
}

export default Loader