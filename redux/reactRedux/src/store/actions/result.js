import * as actionType from './actionTypes';

export const saveResult = (res) => {
    return {
        type: actionType.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionType.DELETE_RESULT,
        resultElId: resElId
    };
};