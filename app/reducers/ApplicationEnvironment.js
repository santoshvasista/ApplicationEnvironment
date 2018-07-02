import {UPDATE_STORE, SELECT_APPLICATION, SELECT_ENVIRONMENT, GET_DATA_RECEIVED} from '../actions'
//import { Server } from 'net';
//import ApplicationEnvironmentClass from '../staticclasses/ApplicationEnvironment';

let ApplicationEnvironment = (state={}, action) => {
    if(action.data == null)
        return state;
    
    switch(action.type) {
        case "UPDATE_DATA":
            debugger;
            let ListOfApplications = [...state.ListOfApplications];
            let ListOfServers = [...state.ListOfServers];
            let ListOfDbServerInfo = [...state.ListOfDbServerInfo];
            let ListOfEnvironments = [...state.ListOfEnvironments];
            let ListOfAppEnvInfoDetails = [...state.ListOfAppEnvInfoDetails];
            let ApplicationId = 0;
            let ServerId = 0;
            let DatabaseId = 0;
            let EnvironmnetId = 0;
            let isApplicationAdded = false;
            let isServerAdded = false;
            let isDatabaseAdded = false;
            let isEnvironmentAdded = false;
            Array.prototype.isInArray = function(value, type) {
                for(var t of this) {
                    if(t[type] == value)
                        return {isInArray: true, Id : t.Id};
                }
                return {isInArray: false, Id : 0};
            }
            action.data.forEach(element => {
                // if(state.ListOfApplications.includes(element.AppName.toUpperCase())) {
                let check = state.ListOfApplications.isInArray(element.AppName.toUpperCase(), "Name")
                if(check.isInArray) {
                    ApplicationId = check.Id;
                } else {
                    isApplicationAdded = true;
                    ApplicationId = state.ListOfApplications[state.ListOfApplications.length - 1].Id + 100;
                    ListOfApplications.push({Id : ApplicationId, Name: element.AppName.toUpperCase()});
                }

                 // if(state.ListOfDatabases.includes(element.EnvName.toUpperCase())) {
                check = state.ListOfEnvironments.isInArray(element.EnvName.toUpperCase(), "Name")
                if(check.isInArray) {
                    EnvironmnetId = check.Id;
                } else {
                    isEnvironmentAdded = true;
                    EnvironmnetId = state.ListOfEnvironments[state.ListOfEnvironments.length - 1].Id + 100;
                    ListOfEnvironments.push({Id: EnvironmnetId, Name: element.EnvName.toUpperCase()})
                }

                // if(state.ListOfDbServerInfo.includes(element.DatabaseServerName.toUpperCase())) {
                check = state.ListOfDbServerInfo.isInArray(element.DatabaseServerName.toUpperCase(), "Name");
                if(check.isInArray) {
                    DatabaseId = check.Id;
                } else {
                    isDatabaseAdded = true;
                    DatabaseId = state.ListOfDbServerInfo[state.ListOfDbServerInfo.length - 1].Id + 100;
                    ListOfDbServerInfo.push({Id: DatabaseId, Name: element.DatabaseServerName.toUpperCase()})
                }

                // if(state.ListOfServers.includes(element.ServerName.toUpperCase())) {
                check = state.ListOfServers.isInArray(element.ServerName.toUpperCase(), "Name")
                if(check.isInArray) {
                    ServerId = check.Id;
                } else {
                    isServerAdded = true;
                    ServerId = state.ListOfServers[state.ListOfServers.length - 1].Id + 100;
                    ListOfServers.push({Id: ServerId, Name: element.ServerName.toUpperCase()});
                }
    
                if(isEnvironmentAdded || isDatabaseAdded || isApplicationAdded) {
                    console.log("Environmnet, Application and Database may be new");
                    if(isEnvironmentAdded || isApplicationAdded)
                        ListOfAppEnvInfoDetails.push({
                            "AppId":ApplicationId,
                            "EnvId":EnvironmnetId,
                            "DatabaseServerId":DatabaseId,
                            "ServerIds":[ServerId],
                            "DatabaseIds":[]
                        });
                    else {
                        var listOfAppEnvInfoDetails = ListOfAppEnvInfoDetails.map(el => {
                            if(el.AppId == ApplicationId && el.EnvId == EnvironmnetId) {
                                if(isServerAdded)
                                    return Object.assign({}, el, {DatabaseServerId : DatabaseId, 
                                    ServerIds:[ServerId, ...el.ServerIds]});
                                else
                                    return Object.assign({}, el, {DatabaseServerId : DatabaseId});
                            }
                            return el;
                        });
                        ListOfAppEnvInfoDetails = [...listOfAppEnvInfoDetails];
                    }

                } else {
                    console.log("Environmnet, Application and Database are old")
                    if(isServerAdded) {
                        console.log("Server is new");
                        for(var t of state.ListOfAppEnvInfoDetails) {
                            if(t.AppId == ApplicationId && t.EnvId == EnvironmnetId && t.DatabaseServerId == DatabaseId) {
                                t.ServerIds.push(ServerId)
                                break;
                            }
                        }
                    } else {
                        console.log("Server is old");
                        return state;
                    }
                }
                
            });
            console.log(ListOfAppEnvInfoDetails);
            return {
                ApplicationId : state.ApplicationId, 
                EnvironmentId: state.EnvironmentId, 
                ListOfAppEnvInfoDetails : ListOfAppEnvInfoDetails,
                ListOfApplications :ListOfApplications, 
                ListOfDatabases: state.ListOfDatabases,
                ListOfDbServerInfo: ListOfDbServerInfo,
                ListOfDbUserInfo: state.ListOfDbUserInfo,
                ListOfDbUserInfoDetail: state.ListOfDbUserInfoDetail,
                ListOfEnvironments : ListOfEnvironments,
                ListOfServers : ListOfServers,
            }            
        case GET_DATA_RECEIVED:
            return {
                ApplicationId : state.ApplicationId, 
                EnvironmentId: state.EnvironmentId, 
                ListOfAppEnvInfoDetails : action.data.ListOfAppEnvInfoDetails,
                ListOfApplications :action.data.ListOfApplications, 
                ListOfDatabases: action.data.ListOfDatabases,
                ListOfDbServerInfo:action.data.ListOfDbServerInfo,
                ListOfDbUserInfo:action.data.ListOfDbUserInfo,
                ListOfDbUserInfoDetail:action.data.ListOfDbUserInfoDetail,
                ListOfEnvironments : action.data.ListOfEnvironments,
                ListOfServers : action.data.ListOfServers,
            }
        case SELECT_APPLICATION :   
            return { 
                ApplicationId : action.data, 
                EnvironmentId: state.EnvironmentId, 
                ListOfAppEnvInfoDetails : state.ListOfAppEnvInfoDetails,
                ListOfApplications : state.ListOfApplications, 
                ListOfDatabases: state.ListOfDatabases,
                ListOfDbServerInfo:state.ListOfDbServerInfo,
                ListOfDbUserInfo:state.ListOfDbUserInfo,
                ListOfDbUserInfoDetail:state.ListOfDbUserInfoDetail,
                ListOfEnvironments : state.ListOfEnvironments,
                ListOfServers : state.ListOfServers,
             }
        case SELECT_ENVIRONMENT :
            return { 
                ApplicationId : state.ApplicationId, 
                EnvironmentId: action.data, 
                ListOfAppEnvInfoDetails : state.ListOfAppEnvInfoDetails,
                ListOfApplications : state.ListOfApplications, 
                ListOfDatabases: state.ListOfDatabases,
                ListOfDbServerInfo:state.ListOfDbServerInfo,
                ListOfDbUserInfo:state.ListOfDbUserInfo,
                ListOfDbUserInfoDetail:state.ListOfDbUserInfoDetail,
                ListOfEnvironments : state.ListOfEnvironments,
                ListOfServers : state.ListOfServers,
             }
        default : 
            return state;
    }
}

export default ApplicationEnvironment;