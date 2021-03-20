// Tab

export const addTab = () => ({
    type: 'ADD_TAB'
});

export const setTabTitle = (tabId, title) => ({
    type: 'SET_TAB_TITLE',
    tabId,
    title
});

export const setTabIsLoading = (tabId, isLoading) => ({
    type: 'SET_TAB_IS_LOADING',
    tabId,
    isLoading
});

export const removeTab = (tabId) => ({
    type: 'REMOVE_TAB',
    tabId
});

export const resetTabs = (tabId) => ({
    type: 'RESET_TABS'
});

// Request

export const setTabRequest = (tabId, method, url) => ({
    type: 'SET_TAB_REQUEST',
    tabId,
    method,
    url
});

// Header

export const addTabHeader = (tabId) => ({
    type: 'ADD_TAB_HEADER',
    tabId
});

export const editTabHeader = (tabId, headerId, key, value) => ({
    type: 'EDIT_TAB_HEADER',
    tabId,
    headerId,
    key,
    value
});

export const removeTabHeader = (tabId, headerId) => ({
    type: 'REMOVE_TAB_HEADER',
    tabId,
    headerId
});

export const clearTabHeader = (tabId) => ({
    type: 'CLEAR_TAB_HEADER',
    tabId
});

// Body

export const addTabBody = (tabId) => ({
    type: 'ADD_TAB_BODY',
    tabId
});

export const editTabBody = (tabId, bodyId, key, valueType, value, file) => ({
    type: 'EDIT_TAB_BODY',
    tabId,
    bodyId,
    key,
    valueType, 
    value,
    file
});

export const removeTabBody = (tabId, bodyId) => ({
    type: 'REMOVE_TAB_BODY',
    tabId,
    bodyId
});

export const clearTabBody = (tabId) => ({
    type: 'CLEAR_TAB_BODY',
    tabId
});

// Response

export const setTabResponse = (tabId, statusCode, responseData, errorMessage) => ({
    type: 'SET_TAB_RESPONSE',
    tabId,
    statusCode,
    responseData,
    errorMessage
});

export const cleanTabResponse = (tabId) => ({
    type: 'CLEAN_TAB_RESPONSE',
    tabId
});