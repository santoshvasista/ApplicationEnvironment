import {UpdateDatabase as UpdateDatabaseAction} from '../../../actions';

export default (async function HomeAddAppEnvDbServerDatabaseDispatch(id, values, dispatch) {
    dispatch(UpdateDatabaseAction(id, values));
});
