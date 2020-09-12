export const authChecker = () => {
    return localStorage.getItem('authToken') || null
}

export const doLogout = () => {
    return localStorage.removeItem('authToken');
}