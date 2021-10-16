import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2c7eb.firebaseio.com/'
});

export default instance;