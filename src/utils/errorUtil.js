
export const setError = (errObj, errCode=9999, errMessage="Unknown Error") => {
    return {
        code: errCode,
        message: errMessage,
        obj: errObj
    }
};