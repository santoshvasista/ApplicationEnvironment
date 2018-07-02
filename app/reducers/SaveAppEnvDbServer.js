import {ADD_SAVETO, CLEAR_SAVETO, UPDATE_APPLICATION, UPDATE_ENVIRONMENT, UPDATE_DATABASE, UPDATE_SERVER} from '../actions';

const SaveAppEnvDbServer = (state={}, action) => {
    switch(action.type) {
        case ADD_SAVETO :
            return [
                ...state,
                {
                    id : action.id,
                    AppName : null,
                    EnvName : null,
                    ServerName : null,
                    DatabaseServerName : null,
                    UrlName: null
                }
            ]
        case CLEAR_SAVETO :
            return [];
        case UPDATE_APPLICATION:
            return state.map(st => {
                if(st.id === action.id) {
                    return {   
                        id: st.id,
                        AppName : action.data,
                        EnvName : st.EnvName,
                        DatabaseServerName : st.DatabaseServerName,
                        ServerName : st.ServerName,
                        UrlName: null
                    }
                }
                else
                    return st;
            });
        case UPDATE_ENVIRONMENT:
            return state.map(st => {
                if(st.id === action.id) {
                    return {   
                        id: st.id,
                        AppName : st.AppName,
                        EnvName : action.data,
                        DatabaseServerName : st.DatabaseServerName,
                        ServerName : st.ServerName,
                        UrlName: null
                    }
                }
                else
                    return st;
            });
        case UPDATE_DATABASE:
            return state.map(st => {
                if(st.id === action.id) {
                    return {   
                        id: st.id,
                        AppName : st.AppName,
                        EnvName : st.EnvName,
                        DatabaseServerName : action.data,
                        ServerName : st.ServerName,
                        UrlName: null
                    }
                }
                else
                    return st;
            });
        case UPDATE_SERVER:
            return state.map(st => {
                if(st.id === action.id) {
                    return {   
                        id: st.id,
                        AppName : st.AppName,
                        EnvName : st.EnvName,
                        DatabaseServerName : st.DatabaseServerName,
                        ServerName : action.data,
                        UrlName: null
                    }
                }
                else
                    return st;
            });
        default : 
            return state;
    }
}

export default SaveAppEnvDbServer;