import React from 'react'
import { useSelector } from 'react-redux'
import { stationIcon } from './Icons'
import { intoLatLng } from './ValueFormatter'
import { Marker, Tooltip, } from 'react-leaflet';

function StationsComponent() {

    // stations
    const stations = useSelector((state) => state.stations)
    const checkStations = useSelector((state) => state.checkStations)
    
  return (
    <>
        {
            !checkStations ? null : 
             stations.map((station) => (
                 <Marker
                 key={station.id}
                 icon={stationIcon}
                 position={[intoLatLng(station.lat), intoLatLng(station.lng)]}
                 >
                    <Tooltip>
                        <div style={{lineHeight: '3px'}}>
                          <p className='font-weight-bold'>{station.name}</p>
                          <p>{station.free} Bikes</p>
                        </div>
                    </Tooltip> 
                 </Marker>
             ))
        }
    </>
  )
}

export default StationsComponent