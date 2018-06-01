// @flow
export const MAKEUP_FINISHED = 'MAKEUP_FINISHED';

const makeUp = (originalCode) => dispatch => {
    dispatch({
        type: MAKEUP_FINISHED,
        payload: {
            convertedCode: originalCode,
            resourceCode: originalCode
        }
    })
};

export default makeUp;
