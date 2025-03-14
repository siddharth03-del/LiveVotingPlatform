const { default: axios } = require("axios");

export const renderUrl = "https://livevotingplatform.onrender.com/api";
export const localUrl =  'http://192.168.100.111:5000/api';
const axios_instance = axios.create({
    baseURL : localUrl,
})
export default axios_instance;