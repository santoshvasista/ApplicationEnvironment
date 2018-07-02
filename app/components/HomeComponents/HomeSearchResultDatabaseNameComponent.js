import React from 'react'
import PanelCards from '../ReusableComponents/PanelCards';

const HomeSearchResultDatabaseNameComponent = (props) => (
    <PanelCards backgroundColor="#00bcd4" color="white" header="Database Name:">
        { props.DatabaseUserInfoDetails != null ? ( 
            <div className="card-text"> 
                { props.DatabaseUserInfoDetails.DatabaseName.Name}
            </div> ) : (
            <div className="card-text"> No Database Names founds </div>
        )
        }
    </PanelCards>
);

export default HomeSearchResultDatabaseNameComponent;