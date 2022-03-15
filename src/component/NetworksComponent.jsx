import React from 'react'
import { Marker, Tooltip } from 'react-leaflet';
import { bikeNetwork } from './Icons';

function NetworksComponent ({networks}) {
    console.log(networks)
  return (
      <>
    {
        networks?.map((bike) => (
          <Marker
          key={bike.id}
          icon={ bikeNetwork }
          position={[bike.location.latitude, bike.location.longitude]}
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