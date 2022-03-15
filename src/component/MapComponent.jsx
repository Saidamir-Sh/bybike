import React from 'react'
import '../style/MapComponent.css'
import Loader from './Loader';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, Tooltip, useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setUserLatLng, fetchCountryCode, fetchAllBikeNetworks } from '../redux/action';

function MapComponent() {   

    const dispatch = useDispatch()

    // checking for locations
    const isLoading = useSelector((state) => state.isLoading)
    
    // user location
    const userLat = useSelector((state) => state.userPosition?.lat)
    const userLong = useSelector((state) => state.userPosition?.long)
    const countryCode = useSelector((state) => state.countryCode)
    const userMarker = [userLat, userLong]

    // map center for different views
    const mapLat = useSelector((state) => state.mapCenter?.lat)
    const mapLong = useSelector((state) => state.mapCenter?.long)
    const mapCenter = [mapLat, mapLong]

    // all bike networks
    const bikeNetworks = useSelector((state) => state.allBikeNetworks?.networks) || []
    const networks = bikeNetworks.filter((network) => network.location?.country === countryCode)

    // get user location, bikeNetworks
    useEffect(() => {
        dispatch(setUserLatLng())
        dispatch(fetchCountryCode())
        dispatch(fetchAllBikeNetworks())
    }, [])


  return ( 
    isLoading ? <Loader /> : 
        <MapContainer center={mapCenter} zoom={11} scrollWheelZoom={true}>
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