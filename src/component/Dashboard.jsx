import React, {useState} from 'react'
import '../styles/Dashboard.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

function Dashboard() {

    const [isActive, setIsActive] = useState(false)

    // collapse side bar
    const handleSideBar = (e) => {
    e.preventDefault()
    setIsActive(!isActive)
    }
  return (
    <div id='dashboard' className={isActive ? 'dashboard' : 'dashboard inactive'}>
         <div onClick={(e) => handleSideBar(e)} className=' dashboard-arrow d-flex align-items-center justify-content-center'>
            {isActive ? <ArrowRightIcon /> : <ArrowLeftIcon/>}
          </div>
    </div>
  )
}

export default Dashboard