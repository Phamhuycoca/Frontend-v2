const saveToken = (token: string) => {
    localStorage.setItem('token', token);
};
const removeToken = () => {
    localStorage.removeItem('token');
};
const getToken=()=>{
    return localStorage.getItem('token');
}

export { saveToken, removeToken,getToken };
