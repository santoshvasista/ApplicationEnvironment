import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';


const Select = (props) => {
    return(
    <div>
        <SelectField 
            floatingLabelText={props.floatingLabelText}
            value = {props.value}
            onChange = {props.onChange}>
                {props.options.map(opt => {
                    return (
                        <MenuItem key={opt.Id} value={opt.Id} primaryText={opt.Name} />    
                    )
                })}
        </SelectField>
    </div>
    )
    
}

Select.propTypes = {
    floatingLabelText : PropTypes.string.isRequired,
    value : PropTypes.number,
    onChange : PropTypes.func.isRequired,
    options : PropTypes.array
}

export default Select;