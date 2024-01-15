import Axios from "axios";

const axios = Axios.create({});

axios.defaults.baseURL = "http://192.168.254.202:3010";
axios.defaults.timeout = 30000;
axios.defaults.headers["Content-Type"] = "application/json";

export default axios;
