import { takeEvery, put } from 'redux-saga/effects'
import { Auth } from 'aws-amplify'
import {storeUser, storeSignOut, storeCurrentUserInfo, codeSent} from '../../actions/auth'
import {pageLoading, pageLoaded, redirect,  } from '../../actions/utility'

export function* signIn(action) {
    try {
        yield put(pageLoading())
        yield Auth.signIn({
            username: action.username,
            password: action.password
          })
        const session = yield Auth.currentSession()
        yield put(storeUser(session))
        yield put(pageLoaded())
    } catch (error) {
        console.log(error.message)
        yield put(pageLoaded())
    }
}

export function* signUp(action) {
    try{
        yield put(pageLoading())
        yield Auth.signUp({
            username: action.user,
            password: action.password,
            attributes: {
                email: action.email
            }
        })
        yield put(redirect('/login'))
        yield put(pageLoaded())
        
    } catch(error) {
        console.log(error)
        yield put(pageLoaded())
    }
}

export function* getUserInfo(){
    try{
        yield put(pageLoading())
        const userInfo = yield Auth.currentUserInfo()
        yield put(storeCurrentUserInfo(userInfo))
        yield put(pageLoaded())
    } catch(error){
        //console.log(error)
        yield put(pageLoaded())
    }
}

export function* changePassword(action){
    try{
        yield put(pageLoading())
        const user = yield Auth.currentAuthenticatedUser()
        yield Auth.changePassword(user, action.oldPassword, action.password)
        yield put(pageLoaded())
    } catch(error){
        console.log(error)
        yield put(pageLoaded())
    }
}

export function* forgotPasswordRequest(action){
    try{
        yield put(pageLoading())
        const response = yield Auth.forgotPassword(action.username)
        console.log(response)
        yield put(codeSent())
        yield put(pageLoaded())
    } catch(error){
        console.log(error)
        yield put(pageLoaded())
    }
}

export function* signOut() {
    try{
        yield put(pageLoading())
        yield Auth.signOut()
        yield put(storeSignOut())
        yield put(pageLoaded())
    } catch(error) {
        console.log(error)
        yield put(pageLoaded())
    }
}

export function* watcherLoginUsage() {
    yield takeEvery('SIGN_IN_USER', signIn)
    yield takeEvery('SIGN_OUT_USER', signOut)
    yield takeEvery('SIGN_UP_USER', signUp)
    yield takeEvery('GET_CURRENT_USER_INFO', getUserInfo)
    yield takeEvery('CHANGE_USER_PASSWORD', changePassword)
    yield takeEvery('FORGOT_PASSWORD_REQUEST', forgotPasswordRequest)
}

export default {watcherLoginUsage}