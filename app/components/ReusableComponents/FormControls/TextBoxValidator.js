
import React from 'react';
import TextValidator from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';

const TextBoxValidator = (props) => {
    return(
    <div>
        <TextValidator
            floatingLabelText={props.floatingLabelText}
            onChange = {props.onChange}
            validators={['required']}
            errorMessages={['Field is required']}
        />
    </div>
    )
    
}


TextBoxValidator.propTypes = {
    floatingLabelText : PropTypes.string.isRequired,
}

export default TextBoxValidator;
