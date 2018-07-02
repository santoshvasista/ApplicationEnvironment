
import {GetData, GetDataReceived, GetDataError, GET_DATA, SAVE_DATA} from '../actions';
import JSON_DATA from '../staticdata/get';

let validateResponse = response => {
    debugger;
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

let readResponseAsJSON = response => {
    return response.json();
}

const dataService = store => next => action => {
    //console.log(JSON_DATA);
    next(action)
    switch(action.type) {
        case GET_DATA:

            /* Since We don't have back-end code in this Application I am commenting GET_DATA from server
               Instead we will get data from static JSON file */
            //fetch('http://abc:9097/def/get')
                //.then((validateResponse))   /* since we are not using fetch no need to validate response */
                //.then(readResponseAsJSON)   /* since we are not using fetch no need to convert response to JSON */
            new Promise((resolve, reject) => resolve(JSON_DATA))
                .then((response) => {
                    let ApplicationEnvironment = {
                        ApplicationId : null, 
                        EnvironmentId: null, 
                        ListOfAppEnvInfoDetails : response.appEnvInfoDetails ? response.appEnvInfoDetails : [],
                        ListOfApplications : response.applicationInfo ? response.applicationInfo : [], 
                        ListOfDatabases: response.databaseInfo ? response.databaseInfo : [],
                        ListOfDbServerInfo : response.databaseServerInfo ? response.databaseServerInfo : [],
                        ListOfDbUserInfo : response.databaseUserInfo ? response.databaseUserInfo : [],
                        ListOfDbUserInfoDetail : response.databaseUserInfoDetail ? response.databaseUserInfoDetail : [],
                        ListOfEnvironments : response.environmentInfo ? response.environmentInfo : [],
                        ListOfServers : response.serverInfo ? response.serverInfo : [],
                    }
                    next(GetDataReceived(ApplicationEnvironment))
                })
                .catch((err) => {
                    console.log(err);
                    return next(GetDataError(err));
                });
            break;
        case SAVE_DATA:
                debugger;
                console.log(action);
                console.log(store);
                next({
                    type: "UPDATE_DATA",
                    data: action.data
                });
                /* Since We don't have back-end code in this Application I am commenting SAVE_DATA part */

                // fetch('http://abc:9097/def/MyController', 
                // {   
                //     method:'POST',
                //     body: JSON.stringify(action.data),
                //     cache: 'no-cache', 
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                // }).then(response => {
                //         store.dispatch(GetData());
                //     }
                // )
                // .catch(function(error) {
                //     console.log('Request failed', error);
                // });
            break;
        default:
            break;
    }
}

export default dataService;