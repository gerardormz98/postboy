export const setResponse = (statusCode, responseData, errorMessage) => ({
    type: 'SET_RESPONSE',
    statusCode,
    responseData,
    errorMessage
});