import React from 'react'
import ListViewComponent from '../ReusableComponents/ListViewComponent';
import HomeSearchResultDatabaseComponent from './HomeSearchResultDatabaseComponent';
import HomeSearchResultDatabaseServerComponent from './HomeSearchResultDatabaseServerComponent';
import PanelCards from '../ReusableComponents/PanelCards';

const HomeSearchResultComponent = (props) => {
    return(
        <div>
            
            {/* <div style={{ width: '40%', float: 'left', marginTop: "20%", marginRight: "3%"}}>
                <ListViewComponent items={props.store.ServerInfoList} header="Servers"/>
                <HomeSearchResultDatabaseServerComponent DatabaseServerInfo={props.store.DatabaseServerInfo}/>
            </div> */}

            {/* <PanelCards backgroundColor="#00bcd4" color="white" header="Database Information:"> */}
            <div style={{ width: '40%', float: 'left', marginTop: "8%", marginRight: "3%"}}>
                <ListViewComponent items={props.store.ServerInfoList} header="Servers"/>
                <div style={{marginTop: "8%"}}>
                    <HomeSearchResultDatabaseServerComponent DatabaseServerInfo={props.store.DatabaseServerInfo}/>
                </div>
            </div>
            {/* </PanelCards> */}

            <PanelCards backgroundColor="#00bcd4" color="white" header="Database Information:">
                <HomeSearchResultDatabaseComponent DatabaseUserInfoDetails={props.store.DatabaseUserInfoDetails}
                            DatabaseServerInfo = {props.store.DatabaseServerInfo}/>
            </PanelCards>
        </div>
    )
}

// class HomeSearchResultComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {

//         return(
//             <div>

//                 <div style={{ width: '40%', float: 'left', marginTop: "20%", marginRight: "3%"}}>
//                     <ListViewComponent items={this.props.store.ServerInfoList} header="Servers"/>
//                 </div>

//                 <PanelCards backgroundColor="#00bcd4" color="white" header="Database Information:">
//                     <HomeSearchResultDatabaseComponent DatabaseUserInfoDetails={this.props.store.DatabaseUserInfoDetails}
//                                 DatabaseServerInfo = {this.props.store.DatabaseServerInfo}/>
//                 </PanelCards>
//             </div>
//         )
//     }
    
// }

export default HomeSearchResultComponent;
