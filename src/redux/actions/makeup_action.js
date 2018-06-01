// @flow
import CodeMan from '../../CodeMan';

export const MAKEUP_FINISHED = 'MAKEUP_FINISHED';

const makeUp = (originalCode) => dispatch => {

    const {convertedCode, resourceCode} = CodeMan.analyze(originalCode);

    dispatch({
        type: MAKEUP_FINISHED,
        payload: {
            convertedCode: convertedCode,
            resourceCode: resourceCode
        }
    })
};

export default makeUp;
