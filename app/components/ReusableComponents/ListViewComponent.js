import React from 'react'
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Select from './FormControls/Select';
import PanelCards from '../ReusableComponents/PanelCards';

class ListViewComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listOfItems = null;
        if(this.props.items.length > 0) {
            listOfItems = this.props.items.map((item) => {
                return (
                    <li key={item.Id}>
                        {item.Name}
                    </li>
                )
            })
        }
        
        return (

            <PanelCards backgroundColor="#00bcd4" color="white" header={this.props.header}>
                { this.props.items.length > 0 ? (
                    <ul className="card-text">
                        {listOfItems}
                    </ul> ) : (<p className="card-text"> No {this.props.header} information found </p>) 
                }
            </PanelCards>
        )
    }
    
}

export default ListViewComponent;
