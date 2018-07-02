import {UpdateEnvironment as UpdateEnvironmentAction} from '../../../actions';

export default (async function HomeAddAppEnvDbServerEnvironmentDispatch(id, values, dispatch) {
    dispatch(UpdateEnvironmentAction(id, values));
});
