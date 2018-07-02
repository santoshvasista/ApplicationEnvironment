
import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const TextBox = (props) => {
    return(
    <div>
        <TextField
            floatingLabelText={props.floatingLabelText}
            onChange = {props.onChange}
            style={{width: "90%"}}
        />
    </div>
    )
    
}


TextBox.propTypes = {
    floatingLabelText : PropTypes.string.isRequired,
}

export default TextBox;
