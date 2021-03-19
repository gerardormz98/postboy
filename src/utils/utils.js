export const isJsonParsable = (value) => {
    if (typeof value === 'string' || value instanceof String) {
        try {
            JSON.parse(value);
        } catch {
            return false;
        }
    }
    
    return true;
}