import React, { useState } from 'react'
import '../styles/SavesComponent.css'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap'
import { removeFromSaved } from '../redux/action';

function SavesComponent() {

  const dispatch = useDispatch()

  // hide and show modal
  const [show, setShow] = useState(false);

  // saved 
  const savedStations = useSelector((state) => state.savedStations)
  
  // functionality of hiding and showing modal
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
                { savedStations?.length == 0 ? (<p>No saved stations</p>) : 
                    savedStations.reverse().map((station) => (
                        <div key={station.id} className='d-flex align-items-center justify-content-between saved-station px-4 py-1'>
                            <div>
                                <p className='d-inline' style={{fontSize: '.9rem'}}><i className="bi bi-geo-alt" /> {station.name}</p>
                                <i className="bi bi-dot"/>
                            </div>
                            <div>
                                <p className='d-inline font-weight-bold'>{station.free} <i className="bi bi-bicycle" style={{fontSize: '1.3rem', marginRight: '1.8rem'}} /></p>
                                <i onClick={() => dispatch(removeFromSaved(station.id))} className="bi bi-trash" style={{color: '	#df4759', fontSize: '1.1rem'}}/>
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