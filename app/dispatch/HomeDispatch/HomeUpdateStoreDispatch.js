import {UpdateStore as UpdateStoreAction} from '../../actions';

export default (async function HomeUpdateStoreDispatch(values, dispatch) {
    dispatch(UpdateStoreAction(values));
});
