import { takeEvery, put } from 'redux-saga/effects'
import { Auth } from 'aws-amplify'
import {storeUser, storeSignOut} from '../../actions/auth'

export function* signIn(action) {
    try {
        yield Auth.signIn({
            username: action.username,
            password: action.password
          })
        const session = yield Auth.currentSession()
        yield put(storeUser(session))
    } catch (error) {
        console.log(error.message)
    }
}

export function* signUp(action) {
    try{
        const response = yield Auth.signUp({
            username: action.user,
            password: action.password,
            attributes: {
                email: action.email
            }
        })
        console.log(response)
        const session = yield Auth.currentSession()
        yield put(storeUser(session))

    } catch(error) {
        console.log(error)
    }
}

export function* signOut() {
    try{
        yield Auth.signOut()
        yield put(storeSignOut())
    } catch(error) {
        console.log(error)
    }
}

export function* watcherLoginUsage() {
    yield takeEvery('SIGN_IN_USER', signIn)
    yield takeEvery('SIGN_OUT_USER', signOut)
    yield takeEvery('SIGN_UP_USER', signUp)
}

export default {watcherLoginUsage}