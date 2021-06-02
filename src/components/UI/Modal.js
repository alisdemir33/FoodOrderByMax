import React from 'react';
import ReactDOM from 'react-dom'
import classes from './Modal.module.css';

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = (props) => {

  return (
    <div className={classes.modal}>      
     <div className={classes.content}>{props.children}</div>     
       {/*  <button className={classes.button} type="button" onClick={props.onClose}>
          Okay
    </button> */}
      </div>);
  
}

const Modal = React.memo(props => {  
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />,
        document.getElementById("backdrop-root"))},
      {
        ReactDOM.createPortal(<ModalOverlay title={props.title} onClose={props.onClose}>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root"))
      }

    </React.Fragment>
  );
});

export default Modal;
