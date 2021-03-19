export const addBody = () => ({
    type: 'ADD_BODY'
});

export const editBody = (id, key, valueType, value, file) => ({
    type: 'EDIT_BODY',
    id,
    key,
    valueType, 
    value,
    file
});

export const removeBody = (id) => ({
    type: 'REMOVE_BODY',
    id
});

export const clearBody = () => ({
    type: 'CLEAR_BODY'
});