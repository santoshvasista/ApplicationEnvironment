import {ClearUpdateAppEnvDbServer as ClearUpdateAppEnvDbServerAction} from '../../../actions';

export default (async function HomeClearAppEnvDbServerDispatch(values, dispatch) {
    dispatch(ClearUpdateAppEnvDbServerAction(values));
});
