import {SelectApplication as SelectApplicationAction} from '../../../actions';

export default (async function HomeSearchUpdateApplicationDispatch(values, dispatch) {
    dispatch(SelectApplicationAction(values));
});
