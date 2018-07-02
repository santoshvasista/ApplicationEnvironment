import {SaveData} from '../../../actions';

export default (async function HomeClearAppEnvDbServerDispatch(values, dispatch) {
    dispatch(SaveData(values));
});
