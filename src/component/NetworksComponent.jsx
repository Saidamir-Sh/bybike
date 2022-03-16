import React from 'react'
import { Marker, Tooltip, Popup } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { fetchStations } from '../redux/action';
import { bikeNetwork } from './Icons';

function NetworksComponent ({networks}) {

    const dispatch = useDispatch()
     
    // turning number into lat,lng format
     const intoLatLng = (value) => {
        let arr = value?.toString().split("")
        let formattedArr = arr.splice(2, 0, '.')
        let LatLng = parseFloat(arr.join(''))
        return LatLng
    }
    console.log(networks)
   
  return (
      <>
    {
        networks?.map((bike) => (
          <Marker
          key={bike.id}
          icon={ bikeNetwork }
          position={[intoLatLng(bike.lat), intoLatLng(bike.lng)]}
          eventHandlers={{click: () => dispatch(fetchStations(bike.name))}}
          >
            <Popup>
              {bike.name}
            </Popup>
          </Marker>
    ))
      }
      </>
  )
}

export default NetworksComponent