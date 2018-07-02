import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import PropTypes from 'prop-types';

const TextAutoComplete = (props) => {
    return(
    <div>
        <AutoComplete
            hintText={props.hintText}
            dataSource={props.dataSource}
            onUpdateInput={props.handleUpdateInput}
            floatingLabelText={props.floatingLabelText}
            filter={AutoComplete.fuzzyFilter}
            maxSearchResults={5}
            style={{width: "90%"}}
        />
    </div>
    )
    
}

TextAutoComplete.propTypes = {
    hintText : PropTypes.string.isRequired,
    dataSource : PropTypes.array,
    handleUpdateInput : PropTypes.func.isRequired,
    floatingLabelText : PropTypes.string.isRequired
}

export default TextAutoComplete;

