import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import DialogTitle from 'material-ui/DialogTitle';
import PropTypes from 'prop-types';


const ModalDialog = (props) => {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={props.handleCloseDialog}
      />,
      <FlatButton
        label="Save Changes"
        primary={true}
        //disabled={true}
        onClick={props.handleSubmitDialog}
      />,
    ];

    return(
    <div>
        <Dialog
          title={props.title}
          actions={actions}
          modal={true}
          open={props.open}
          contentStyle={props.contentStyle}
          autoScrollBodyContent={true}
        >
          {/* <DialogTitle> test </DialogTitle> */}
            {props.children}
        </Dialog>
    </div>
    )
    
}

ModalDialog.propTypes = {
    handleCloseDialog : PropTypes.func.isRequired,
    title : PropTypes.string,
    open : PropTypes.bool.isRequired,
    contentStyle : PropTypes.object
}

export default ModalDialog;

