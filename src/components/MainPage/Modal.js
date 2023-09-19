import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import "./LoginModal.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered

      className='LoginModal'
    >
      {/* <Modal.Header closeButton style={{backgroundColor:'#0D0C22'}}>
        <Modal.Title id="contained-modal-title-vcenter">
        
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body className='ModalBody'>
        <h4>OAuth 로그인 - 구글 아이콘</h4>
        <div style={{textAlign:'center'}}>
        <img style={{height:'150px', width:'150px'}} src='https://images.unsplash.com/photo-1695010800005-50cb50823351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' />
        </div>
      </Modal.Body>
      <Modal.Footer className='ModalFooter'>
      <button className="Button" style={{ color: "#ffffff"}} onClick={props.onHide}>Close</button>
      </Modal.Footer>
      
    </Modal>
  );
}

function LoginModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
     

      <button className="LogInButton" style={{ color: "#0D0C22" }} onClick={() => setModalShow(true)}>Log in</button>
      <button className="Button" style={{ color: "#ffffff" }} onClick={() => setModalShow(true)}>Sign up</button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default LoginModal