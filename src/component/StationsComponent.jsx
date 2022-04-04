import React from 'react'
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

    // saved 
    const savedStations = useSelector((state) => state.savedStations)
    console.log(savedStations)

    // Save station 
    const saveStation = (station) => {
      dispatch(saveStationAction(station))
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
                        <Button  onClick={() => saveStation(station)}  className='w-100 py-0' variant='outline-primary'>Save</Button>
                    </Popup> 
                 </Marker>
             ))
        }
    </>
  )
}

export default StationsComponent