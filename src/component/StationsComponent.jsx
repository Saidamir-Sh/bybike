import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { stationIcon } from './Icons'
import { intoLatLng } from './ValueFormatter'
import { Marker, Popup } from 'react-leaflet';
import { Button } from 'react-bootstrap';
import {saveStationAction} from '../redux/action'

function StationsComponent({setRoute}) {

    const dispatch = useDispatch()

    // stations
    const stations = useSelector((state) => state.stations)
    const checkStations = useSelector((state) => state.checkStations)

    // button disable
    const saved = useSelector((state) => state.saved)
    console.log(saved)

    // saved 
    const savedStations = useSelector((state) => state.savedStations)

    // save station 
    const saveStation = (station) => {
      dispatch(saveStationAction(station))
      // const saveBtn = document.querySelector('.save-btn')
      // console.log(saveBtn)
      // saveBtn.disabled = true 
    }


  return (
    <>
        {
            !checkStations ? null : 
             stations.map((station) => (
                 <Marker
                 key={station.id}
                 icon={stationIcon}
                 position={[intoLatLng(station.lat), intoLatLng(station.lng)]}
                 eventHandlers={{click: () => setRoute(station)}}
                 >
                    <Popup>
                        <div style={{lineHeight: '3px'}}>
                          <p className='font-weight-bold'>{station.name}</p>
                          <p style={{fontSize: '.8rem'}}>{station.free} Bikes</p>
                        </div>
                        <Button disabled={saved}  onClick={() => saveStation(station)}  className='w-100 py-0 save-btn' variant='primary'>{!saved ? `Save`: `Saved` }</Button>
                    </Popup> 
                 </Marker>
             ))
        }
    </>
  )
}

export default StationsComponent