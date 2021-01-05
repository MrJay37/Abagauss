export const signIn = (username, password) => ({
    type: 'SIGN_IN_USER',
    username, password
})

export const signup = (user, password, email) => ({
    type: 'SIGN_UP_USER',
    user, password, email
})
export const signOut = () => ({
    type: 'SIGN_OUT_USER'
})

export const storeUser = (session) => ({
    type: 'STORE_SIGN_IN_RESPONSE',
    session
})

export const storeSignOut = () => ({
    type: 'STORE_SIGN_OUT'
})

export const getCurrentSessionInfo = () => ({
    type: 'GET_CURRENT_SESSION_INFO'
})

export const getCurrentUserInfo = () => ({
    type: 'GET_CURRENT_USER_INFO'
})

export const changePassword = (username, oldPassword, password) => ({
    type: "CHANGE_USER_PASSWORD",
    username, oldPassword, password
})

export const storeCurrentUserInfo = (info) => ({
    type: 'STORE_CURRENT_USER_INFO',
    info
})

export const initiateForgotPassword = () => ({
    type: 'INITIATE_FORGOT_PASSWORD',
    
})

export const forgotPassword = (username) => ({
    type: 'FORGOT_PASSWORD_REQUEST',
    username
})

export const codeSent = () => ({
    type: 'CODE_SENT_TO_USER'
})

export const cancelForgotPassword = () => ({
    type: 'CANCEL_FORGOT_PASSWORD'
})