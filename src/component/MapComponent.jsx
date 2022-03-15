import React from 'react'
import '../style/MapComponent.css'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, Tooltip } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setUserLatLng } from '../redux/action';

function MapComponent() {   

    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    console.log(state)
    useEffect(() => {
        dispatch(setUserLatLng())
    }, [])
  return (
    <MapContainer center={[51.505, -0.09]} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Tooltip>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Tooltip>
        </Marker>
    </MapContainer>
  )
}

export default MapComponent