import React from 'react'
import '../style/MapComponent.css'
import Loader from './Loader';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, Tooltip, useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setUserLatLng } from '../redux/action';

function MapComponent() {   

    const dispatch = useDispatch()
    

    // checking for locations
    const isLoading = useSelector((state) => state.isLoading)
    console.log(isLoading)
    // user location
    const userLat = useSelector((state) => state.userPosition?.lat)
    const userLong = useSelector((state) => state.userPosition?.long)
    const userMarker = [userLat, userLong]

    // get user location, bikeNetworks
    useEffect(() => {
        dispatch(setUserLatLng())
    }, [])
  return ( isLoading ? <Loader /> : 
    <MapContainer center={[51.505, -0.09]} zoom={11} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={userMarker}>
          <Tooltip>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Tooltip>
        </Marker>
    </MapContainer>
  )
}

export default MapComponent