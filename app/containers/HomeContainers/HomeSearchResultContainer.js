import React, { Component } from 'react'
import {connect} from 'react-redux';
import HomeSearchResultComponent from '../../components/HomeComponents/HomeSearchResultComponent';

Array.prototype.FirstOrNull = function() {
	return this.length > 0 ? this[0] : null
}

let getDetails= (state) => {

    let DetailList = null
    if(state.ApplicationId != null && state.EnvironmentId != null)
    {
        DetailList = state.ListOfAppEnvInfoDetails.map((e) => {
            
            let DatabaseUserInfoDetail = state.ListOfDbUserInfoDetail.filter(
                (d) => e.DatabaseIds.includes(d.databaseId));
        
            let DatabaseUserInfoDetails = DatabaseUserInfoDetail.map(
                d => {
                    return {
                        DatabaseName : state.ListOfDatabases.filter(
                            f => f.Id == d.databaseId
                        ).FirstOrNull(),
                        UserInfo : state.ListOfDbUserInfo.filter(
                            f => d.UserIds.includes(f.Id)
                        )
                    }
                }
            )

            return {
                ApplicationInfoId: e.AppId,
                EnvironmentInfoId : e.EnvId,
                DatabaseServerInfo : state.ListOfDbServerInfo.filter(
                    (d) => e.DatabaseServerId == d.Id
                    ).FirstOrNull(),
                DatabaseUserInfoDetails : DatabaseUserInfoDetails,
                ServerInfoList : state.ListOfServers.filter(
                    (s) => e.ServerIds.includes(s.Id)
                ),
            }
        }).filter((e => (
                (state.ApplicationId == e.ApplicationInfoId && state.EnvironmentId == e.EnvironmentInfoId)
        //   || (state.EnvironmentId == null && state.ApplicationId == e.ApplicationInfoId) 
        //  || (state.ApplicationId == null && state.EnvironmentId == e.EnvironmentInfoId)
        ))).FirstOrNull();
    }
    if(DetailList == null)
        return {
            Id: null,
            ApplicationInfoId: null,
            EnvironmentInfoId : null,
            DatabaseUserInfoDetails : [],
            DatabaseServerInfo : null,
            ServerInfoList : [],
        }
    
    //console.log(DetailList);
    return DetailList;
}

const mapStateToProps = (state) => {
  return {
    store : getDetails(state.ApplicationEnvironment)
  }
}

const HomeSearchResultContainer = connect(mapStateToProps, null)(HomeSearchResultComponent);
export default HomeSearchResultContainer;