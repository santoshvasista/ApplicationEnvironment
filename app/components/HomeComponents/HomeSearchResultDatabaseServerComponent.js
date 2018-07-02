import React from 'react'
import PanelCards from '../ReusableComponents/PanelCards';

const HomeSearchResultDatabaseServerComponent = (props) => (
    <PanelCards backgroundColor="#00bcd4" color="white" header="Database Server:">
        { props.DatabaseServerInfo != null ? (
            <div className="card-text">
                {props.DatabaseServerInfo.Name}
            </div> ) : (
                <div className="card-text"> No Database Servers found </div>
            )
        }
    </PanelCards>
);

export default HomeSearchResultDatabaseServerComponent;