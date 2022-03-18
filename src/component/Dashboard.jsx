import React, {useState} from 'react'
import '../styles/Dashboard.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import dashboardImage from '../assets/dashboardimg.png'
import SearchComponent from './SearchComponent';

function Dashboard() {

    // show hide sidebar
    const [isActive, setIsActive] = useState(false)

    // collapse side bar
    const handleSideBar = (e) => {
    e.preventDefault()
    setIsActive(!isActive)
    }

  return (
    <div id='dashboard' className={!isActive ? 'dashboard' : 'dashboard inactive'}>
      <p className='text-center pt-2'>Made with <i className="bi bi-suit-heart" style={{color: 'red'}}></i> in Poland</p>
      <SearchComponent />
      <div className='dashboard-intro'>
        <img src={dashboardImage} width='50%' alt='Logo for Dashboard' />
        <div className='pulse-img circle-img'></div>
      </div>
      <div className='intro-text'>
        <h1>ByBike</h1>
        <p>Short rides to your work or appointments, or explore the city. It's easy with ByBike</p>
      </div> 
      <div onClick={(e) => handleSideBar(e)} className=' dashboard-arrow d-flex align-items-center justify-content-center'>
        {isActive ? <ArrowLeftIcon/> : <ArrowRightIcon/>}
      </div>
    </div>
  )
}

export default Dashboard