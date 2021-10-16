import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://imessanger-39b6d.firebaseio.com/'
});

export default instance;