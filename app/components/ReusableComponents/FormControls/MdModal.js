import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import DialogTitle from 'material-ui/DialogTitle';
import PropTypes from 'prop-types';
import Modal from 'mdbootstrap';


const MdModal= (props) => {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={props.handleCloseDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={props.handleSubmitDialog}
      />,
    ];

    return(
    <div>
        <Modal isOpen={props.open} toggle={props.open} side position="top-left">
            <ModalHeader toggle={props.open}>Modal title</ModalHeader>
            <ModalBody>
                Hello
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={props.handleCloseDialog}>Close</Button>{' '}
                <Button color="primary" onClick={props.handleSubmitDialog}>Save changes</Button>
            </ModalFooter>
        </Modal>
    </div>
    )
    
}

MdModal.propTypes = {
    handleCloseDialog : PropTypes.func.isRequired,
    title : PropTypes.string,
    open : PropTypes.bool.isRequired,
    contentStyle : PropTypes.object
}

export default MdModal;

