import React from 'react'
import { Marker, Tooltip } from 'react-leaflet';
import { bikeNetwork } from './Icons';

function NetworksComponent ({networks}) {
    
  return (
      <>
    {/* {
        networks?.map((bike) => (
          <Marker
          key={bike.id}
          icon={ bikeNetwork }
          position={[bike.lat, bike.lng]}
        //   eventHandlers={{click: () => dispatch(fetchBikeStations(bike.href))}}
          >
            <Tooltip>
              {bike.name}
            </Tooltip>
          </Marker>
    ))
      } */}
      </>
  )
}

export default NetworksComponent