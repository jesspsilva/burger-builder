import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-fd130-default-rtdb.firebaseio.com/'
});

export default instance;