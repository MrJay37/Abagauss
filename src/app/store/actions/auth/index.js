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