import React from 'react'
import { Marker, Popup } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { fetchStations } from '../redux/action';
import { intoLatLng } from './ValueFormatter';
import { bikeNetwork } from './Icons';

function NetworksComponent ({networks}) {

    const dispatch = useDispatch()
   
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