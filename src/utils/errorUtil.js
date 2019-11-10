
export const sendError = (errObj, errCode=9999, errMessage="Unknown Error") => {
    return {
        obj: errObj,
        code: errCode,
        message: errMessage,
    }
};