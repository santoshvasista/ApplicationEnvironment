import {UpdateApplication as UpdateApplicationAction} from '../../../actions';

export default (async function HomeAddAppEnvDbServerApplicationDispatch(id, values, dispatch) {
    dispatch(UpdateApplicationAction(id, values));
});
