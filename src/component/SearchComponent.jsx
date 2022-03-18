import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useMap } from 'react-leaflet';
import { Form, Card, Button } from 'react-bootstrap'
import { intoLatLng } from './ValueFormatter';

function SearchComponent() {

  const map = useMap()

// search input results
   const [searchQuery, setSearchQuery] = useState('')
   const [showResults, setShowResults] = useState(false)

// networks for search
   const networks = useSelector((state) => state.allBikeNetworks) || []


// prevent page refreshing
  const handleSubmit = (e) => {
    e.preventDefault()
  }

// search input onChange event
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
    setShowResults(!showResults)
  }

// handle click on search result
  const handleClickOnResult = (network) => {
    let netLat = intoLatLng(network.lat)
    let netLng = intoLatLng(network.lng)
    let toPosition = [netLat, netLng]
    setShowResults(!showResults);
    setSearchQuery(network.city)
    map.flyTo(toPosition)
  }
  
  return (
    <>
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className='d-flex align-items-center position-relative flex-column' controlId="formBasicText">
              <Form.Control 
              onChange={(e) => handleInputChange(e)}
              value={searchQuery}
              className='search-input mx-auto mt-2 shadow-none' 
              type="text" 
              placeholder="Search for other cities..." />
              <i className="bi bi-search"></i>
            </Form.Group>
            <Button variant="primary" 
            // onClick={setViewToLocation}
            className='location-btn py-2'>Current location</Button>
        </Form>

        <Card className={showResults ? 'search-result-container mx-auto ' : 'search-result-container mx-auto d-none'}>
            {
              networks?.filter((network) => {
                if(!searchQuery) return false
                if(network.city.toLowerCase().includes(searchQuery.toLowerCase())) return true
              }).map((network) => (
                <Card key={network.id} className='search-result px-0 py-0 my-0' >
                  <Card.Body onClick={() => handleClickOnResult(network)}   className='px-2 py-2'>{network.city}</Card.Body>
                </Card>
              ))
            }
        </Card>
        </>
  )
}
//onClick={() => {handleClickOnResult(network)}}
export default SearchComponent