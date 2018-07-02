import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import ApplicationEnvironment from './ApplicationEnvironment';
import SaveAppEnvDbServer from './SaveAppEnvDbServer';

export default combineReducers({
  ApplicationEnvironment,
  SaveAppEnvDbServer
})