import React from 'react'
import { useSelector } from 'react-redux'

function StationsComponent() {

    // stations
    const stations = useSelector((state) => state.stations)
    console.log(stations)
  return (
    <div>StationsComponent</div>
  )
}

export default StationsComponent