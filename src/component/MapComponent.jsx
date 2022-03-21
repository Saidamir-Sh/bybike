import React, {useState} from 'react'
import '../styles/MapComponent.css'
import Loader from './Loader';
import { MapContainer, TileLayer, Marker,  ZoomControl, useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setUserLatLng, fetchCountryCode, fetchAllBikeNetworks } from '../redux/action';
import NetworksComponent from './NetworksComponent';
import StationsComponent from './StationsComponent';
import RoutingMachine from './RoutingMachine';
import { intoLatLng } from './ValueFormatter';
import Dashboard from './Dashboard';

function MapComponent() {   

    const dispatch = useDispatch()

    // checking for locations
    const isLoading = useSelector((state) => state.isLoading)
    
    // user location
    const userLat = useSelector((state) => state.userPosition?.lat)
    const userLong = useSelector((state) => state.userPosition?.long)
    const userMarker = [userLat, userLong]

    // map center for different views
    const mapLat = useSelector((state) => state.mapCenter?.lat)
    const mapLong = useSelector((state) => state.mapCenter?.long)
    const mapCenter = [mapLat, mapLong]

    // all bike networks
    const bikeNetworks = useSelector((state) => state.allBikeNetworks) || []

    // states for routing component
    const [bikeLat, setBikeLat] = useState(null)                      
    const [bikeLong, setBikeLong] = useState(null)                  
    const [checkBikeAdress, setCheckBikeAdress] = useState(false) 

    // setting route to station
    const setBikeAdress = (station) => {
        setBikeLat(intoLatLng(station.lat))
        setBikeLong(intoLatLng(station.lng))

        setCheckBikeAdress(false)
        setCheckBikeAdress(true)
      }

    // append routing control to dashboard
    useEffect(() => {
      let el = document.getElementsByClassName('leaflet-routing-container')[0]
      let intro = document.getElementsByClassName('intro-text')[0]
      if (el) {
        let dashboard = document.getElementById('dashboard')
        intro.classList.add('d-none')
        dashboard.appendChild(el)
      }
    }, [checkBikeAdress])    
    
    // get user location, bikeNetworks
    useEffect(() => {
        dispatch(setUserLatLng())
        dispatch(fetchCountryCode())
        dispatch(fetchAllBikeNetworks())
    }, [])

  return ( 
    isLoading ? <Loader /> : 
        <MapContainer center={mapCenter} zoom={11}  scrollWheelZoom={true} zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={userMarker}></Marker>
            <Dashboard />
            <NetworksComponent networks={bikeNetworks}/>
            <StationsComponent setRoute={setBikeAdress}/>
            { checkBikeAdress ? 
            <RoutingMachine checkBikeAdress={checkBikeAdress} userLat={userLat} userLong={userLong} bikeLat={bikeLat} bikeLong={bikeLong}/> : 
            null 
            }
             <ZoomControl position="topright" />
        </MapContainer>
  )
}

export default MapComponent