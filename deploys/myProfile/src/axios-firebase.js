import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://imessanger-39b6d.firebaseio.com/'
});

export const config = {
    apiKey: '******',
    authDomain: 'imessanger-39b6d.firebaseapp.com',
    databaseURL: 'https://imessanger-39b6d.firebaseio.com/'
};
