
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';


const Button = (props) => {
    return(
    <div>
        <RaisedButton label={props.label} 
            primary={true} style={props.style}
            icon={props.icon}
            onClick={props.onClick}/>
    </div>
    )
    
}

Button.propTypes = {
    label : PropTypes.string.isRequired,
    //style : PropTypes.string,
    onClick : PropTypes.func.isRequired,
}

export default Button;

