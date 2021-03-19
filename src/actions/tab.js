export const addTab = () => ({
    type: 'ADD_TAB'
});

export const editTab = (id, method, title) => ({
    type: 'EDIT_TAB',
    id,
    method,
    title
});

export const setIsLoadingTab = (id, isLoading) => ({
    type: 'SET_IS_LOADING_TAB',
    id,
    isLoading
});

export const removeTab = (id) => ({
    type: 'REMOVE_TAB',
    id
});