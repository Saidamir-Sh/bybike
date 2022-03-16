import React from 'react'
import { Marker, Tooltip } from 'react-leaflet';
import { bikeNetwork } from './Icons';

function NetworksComponent ({networks}) {
     
    // turning number into lat,lng format
     const intoLatLng = (value) => {
        let arr = value?.toString().split("")
        let formattedArr = arr.splice(2, 0, '.')
        let LatLng = parseFloat(arr.join(''))
        return LatLng
    }
   
  return (
      <>
    {
        networks?.map((bike) => (
          <Marker
          key={bike.id}
          icon={ bikeNetwork }
          position={[intoLatLng(bike.lat), intoLatLng(bike.lng)]}
        //   eventHandlers={{click: () => dispatch(fetchBikeStations(bike.href))}}
          >
            <Tooltip>
              {bike.name}
            </Tooltip>
          </Marker>
    ))
      }
      </>
  )
}

export default NetworksComponent