import React from 'react'
import { Hypnosis } from 'react-cssfx-loading/lib';
import logo from '../assets/logo.png'

const Loader = () => {
  return (
    <div className='d-flex align-items-center flex-column justify-content-center w-100' style={{height: '100vh'}}> 
        <Hypnosis color="#2b5877" width="100px" height="100px" duration="3s" />
        <img src={logo} className='fixed-bottom mx-auto pb-2' width={'10%'}/>
    </div>
  )
}

export default Loader