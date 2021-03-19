export const addHeader = () => ({
    type: 'ADD_HEADER'
});

export const editHeader = (id, key, value) => ({
    type: 'EDIT_HEADER',
    id,
    key,
    value
});

export const removeHeader = (id) => ({
    type: 'REMOVE_HEADER',
    id
});

export const clearHeader = () => ({
    type: 'CLEAR_HEADER'
});