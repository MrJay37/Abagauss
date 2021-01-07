import cookie from '../../cookies'
import request from '../axios'

const signIn = async (data) => {
    try{
        if(cookie.getCookie()){
            return 'User already signed in'
        }
        let response = await request.getData({
            method: 'POST',
            url: '/auth/signin',
            header: {},
            params: {},
            data: data
        })
        cookie.setCookie(response.data.token)
        return response
    } catch(error) {
        throw error
    }
}

const signUp = async (data) => {
    try{
        if(cookie.getCookie()){
            return 'Sign out first'
        }
        let response = await request.getData({
            method: 'POST',
            url: '/auth/signup',
            header: {},
            params: {},
            data: data
        })
        return response
    }catch(error) {
        throw error
    }
}

export default { signIn, signUp }