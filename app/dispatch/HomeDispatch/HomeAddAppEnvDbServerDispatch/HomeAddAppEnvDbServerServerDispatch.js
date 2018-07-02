import {UpdateServer as UpdateServerAction} from '../../../actions';

export default (async function HomeAddAppEnvDbServerServerDispatch(id, values, dispatch) {
    dispatch(UpdateServerAction(id, values));
});
