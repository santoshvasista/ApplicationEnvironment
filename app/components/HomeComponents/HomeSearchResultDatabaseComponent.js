import React from 'react'
import ListViewComponent from '../ReusableComponents/ListViewComponent';
import HomeSearchResultDatabaseServerComponent from './HomeSearchResultDatabaseServerComponent';
import HomeSearchResultDatabaseNameComponent from "./HomeSearchResultDatabaseNameComponent";


const HomeSearchResultDatabaseComponent = (props) => {
    let DatabaseUserInfoDetails = props.DatabaseUserInfoDetails.length > 0 ? props.DatabaseUserInfoDetails[0] : null;

    let userInfo = [];

    if(DatabaseUserInfoDetails != null) {
        if(DatabaseUserInfoDetails.UserInfo.length > 0) {
            DatabaseUserInfoDetails.UserInfo.forEach( (d) => {
                userInfo.push({
                    Id : d.Id,
                    Name : d.UserId + " - " + "****" + d.Password.slice(d.Password.length - 4)
                });
            });
            DatabaseUserInfoDetails.UserInfo = userInfo
        }
    }

    return(
        <div>
            {/* <HomeSearchResultDatabaseServerComponent DatabaseServerInfo={props.DatabaseServerInfo}/> */}
            <div>
                <HomeSearchResultDatabaseNameComponent DatabaseUserInfoDetails={DatabaseUserInfoDetails}/>
            </div>
            <div className="card" style={{marginTop: "5%"}}>
            <ListViewComponent items={DatabaseUserInfoDetails ? DatabaseUserInfoDetails.UserInfo : [] } header="User Information"/>
            </div>
        </div>
    )
}

// class HomeSearchResultDatabaseComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         debugger;
//         let DatabaseUserInfoDetails = this.props.DatabaseUserInfoDetails.length > 0 ? this.props.DatabaseUserInfoDetails[0] : null;

//         let userInfo = [];

//         if(DatabaseUserInfoDetails != null) {
//             if(DatabaseUserInfoDetails.UserInfo.length > 0) {
//                 DatabaseUserInfoDetails.UserInfo.forEach( (d) => {
//                     userInfo.push({
//                         Id : d.Id,
//                         Name : d.UserId + " - " + "****" + d.Password.slice(d.Password.length - 4)
//                     });
//                 });
//                 DatabaseUserInfoDetails.UserInfo = userInfo
//             }
//         }

//         return(
//             <div>
//                 <HomeSearchResultDatabaseServerComponent DatabaseServerInfo={this.props.DatabaseServerInfo}/>
//                 <div style={{marginTop: "5%"}}>
//                     <HomeSearchResultDatabaseNameComponent DatabaseUserInfoDetails={DatabaseUserInfoDetails}/>
//                 </div>
//                 <div className="card" style={{marginTop: "5%"}}>
//                 <ListViewComponent items={DatabaseUserInfoDetails ? DatabaseUserInfoDetails.UserInfo : [] } header="User Information"/>
//                 </div>
//             </div>
//         )
//     }
    
// }

// <ListViewComponent items={this.props.store.DatabaseInfoList} header="Databases"/>
// <ListViewComponent items={this.props.store.DatabaseInfo} header="Database"/>

                

export default HomeSearchResultDatabaseComponent;
