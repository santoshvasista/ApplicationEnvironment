
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';


const FloatingButton = (props) => {
    return(
    <div>
        <FloatingActionButton style={props.style} onClick={props.onClick} primary={true}>
            <ContentAdd />
        </FloatingActionButton>
        {/* <RaisedButton label={props.label} 
            primary={true} style={props.style}
            icon={props.icon}
            onClick={props.onClick}/> */}
    </div>
    )
    
}

FloatingButton.propTypes = {
    //style : PropTypes.string,
    onClick : PropTypes.func.isRequired,
}

export default FloatingButton;
