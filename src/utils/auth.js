export const BASE_URL = 'https://auth.nomoreparties.co';

const handleOriginalResponse = (response) => {
    if (response.ok){
        return (response.json());
    } else {
        console.log('Ошибка');
        return Promise.reject(new Error(`${response.status}`));
    }
}

export const register = (password, email) => {
    console.log(JSON.stringify({"password":password, "email":email}))
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"password":password, "email":email})
    })
        .then(handleOriginalResponse)
};

export const logIn = (password, email) => {
    console.log(JSON.stringify({"password":password, "email":email}))
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"password":password, "email":email})
    })
        .then(handleOriginalResponse)};

export const getToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(handleOriginalResponse)};