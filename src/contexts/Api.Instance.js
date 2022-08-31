import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://10.10.10.50:3331/'
});


export default Api