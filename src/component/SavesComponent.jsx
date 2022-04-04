import React, { useState } from 'react'
import '../styles/SavesComponent.css'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { Modal } from 'react-bootstrap'

function SavesComponent() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className='saves-container d-flex align-items-center justify-content-center' onClick={handleShow}>
            <BookmarkAddOutlinedIcon  />
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
             
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default SavesComponent