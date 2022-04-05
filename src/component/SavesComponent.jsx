import React, { useState } from 'react'
import '../styles/SavesComponent.css'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap'

function SavesComponent() {

  const [show, setShow] = useState(false);

  // saved 
  const savedStations = useSelector((state) => state.savedStations)
  console.log(savedStations)
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className='saves-container d-flex align-items-center justify-content-center' onClick={handleShow}>
            <BookmarkAddOutlinedIcon  />
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                  <h6>Saved stations</h6>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    savedStations.map((station) => (
                        <div className='d-flex align-items-center justify-content-between'>
                            <div>
                                <p className='d-inline'><i className="bi bi-geo-alt" /> {station.name}</p>
                                <p className='d-inline'><i className="bi bi-dot" /></p>
                                <p className='d-inline  mr-1 ml-2 font-weight-bold'>{station.free}</p>
                                <i className="bi bi-bicycle" style={{fontSize: '1.5rem', marginTop: '-1.4rem'}} />
                            </div>
                            <div>
                            <i className="bi bi-trash" style={{color: '	#df4759', fontSize: '1.1rem'}}/>
                            </div>
                        </div>
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
             
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default SavesComponent