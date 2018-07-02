import React from 'react';
import HomeAddAppEnvDbServerRowContainer from '../../containers/HomeContainers/HomeAddAppEnvDbServerRowContainer';
import FloatingButton from '../ReusableComponents/FormControls/FloatingButton';
import PropTypes from 'prop-types';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Button from '../ReusableComponents/FormControls/Button';

class HomeAddAppEnvDbServerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleAddClick() {
        this.props.AddRows();
    }
    
    render() {
        const style = {
            margin: 12,
          };
          
        var listItems = this.props.store.map((elm, index) => <HomeAddAppEnvDbServerRowContainer key={elm.id} index={index}/>);
        return(
            <div>
                <Button  label="New" onClick={this.handleAddClick} icon={<AddCircle />} style={style}/>
                {/* <FloatingButton onClick={this.handleAddClick} disabled="true" style={style}/> */}
                {/* <Button label="Add" onClick={this.handleAddClick} icon={<AddCircle />}/> */}
                {listItems}
            </div>
        )
    }
    
}

HomeAddAppEnvDbServerComponent.propTypes = {
    store : PropTypes.array.isRequired,
    AddRows : PropTypes.func.isRequired
}

export default HomeAddAppEnvDbServerComponent;
