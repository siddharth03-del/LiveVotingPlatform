const { default: axios } = require("axios");

const axios_instance = axios.create({
    baseURL : 'http://192.168.22.111:5000/api'
})
export default axios_instance;