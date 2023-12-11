import Axios from 'axios'

const axios = Axios.create({})

axios.defaults.baseURL = "http://[::1]:3001"
axios.defaults.timeout = 3000
axios.defaults.headers['Content-Type'] = 'application/json'

export default axios