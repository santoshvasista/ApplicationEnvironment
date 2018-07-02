import {AddUpdateAppEnvDbServer as AddUpdateAppEnvDbServerAction} from '../../../actions';

export default (async function HomeAddAppEnvDbServerDispatch(values, dispatch) {
    dispatch(AddUpdateAppEnvDbServerAction(values));
});
