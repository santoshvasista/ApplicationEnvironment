var React = require('react');
var ReactDom = require('react-dom');
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/App';
import {UpdateStore} from './actions';
import HomeUpdateStoreDispatch from './dispatch/HomeDispatch/HomeUpdateStoreDispatch';
import dataServices from './api/dataService';
import {GetData} from './actions'


/* Create empty object - to initialize store */
let ApplicationEnvironment = {
    ApplicationId : null, 
    EnvironmentId: null, 
    ListOfAppEnvInfoDetails : [],
    ListOfApplications : [], 
    ListOfDatabases: [],
    ListOfDbServerInfo: [],
    ListOfDbUserInfo: [],
    ListOfDbUserInfoDetail :[],
    ListOfEnvironments : [],
    ListOfServers : [],
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;

/* Create Store */
const store = createStore(reducer, 
        {
            ApplicationEnvironment: ApplicationEnvironment,
            SaveAppEnvDbServer : []
        }, 
        /* Applying basic middle-ware for APT calls */
        //applyMiddleware(dataServices),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        /* Will be used in debugging - Google Chrome Extenstion */
        composeEnhancers(applyMiddleware(dataServices))
        
    );

ReactDom.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(GetData());

