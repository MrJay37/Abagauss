import axios from 'axios'
import cookie from '../../cookies'

const getData = async (options) => {
    try{
        const reqUrl = process.env.REACT_APP_URL_DEV + options.url
        const reqParams = {
            ...options.params
        }
        const reqHeader = {
            ...options.header,
            "Content-Type": "application/json"
        }
        const authToken = cookie.getCookie()
        if(authToken) {
            reqHeader["auth-token"] = authToken
        }
        const axiosResponse = await axios({
            method: options.method,
            url: reqUrl,
            headers: reqHeader,
            params: reqParams,
            data: options.data || {}
        })
        return axiosResponse
    }catch(error){
        throw error
    }
}

export default { getData }