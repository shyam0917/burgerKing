import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-king-3127a.firebaseio.com/'
});

export default instance;