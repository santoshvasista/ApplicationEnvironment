import {SelectEnvironment as SelectEnvironmentAction} from '../../../actions';

export default (async function HomeSearchUpdateEnvironmentDispatch(values, dispatch) {
    dispatch(SelectEnvironmentAction(values));
});
