import React, { useState } from 'react'
import '../styles/SavesComponent.css'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap'

function SavesComponent() {

  const [show, setShow] = useState(false);

  // saved 
  const savedStations = useSelector((state) => state.savedStations)
  

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

            </Modal.Body>
            <Modal.Footer>
             
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default SavesComponent