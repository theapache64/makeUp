// @flow
export const MAKEUP_FINISHED = 'MAKEUP_FINISHED';

const makeUp = (originalCode) => dispatch => {
    dispatch({
        type: MAKEUP_FINISHED,
        payload: {
            convertedCode: 'this is converted code',
            resourceCode: 'this  is resource code'
        }
    })
};

export default makeUp;
