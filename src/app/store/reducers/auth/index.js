const DEFAULT_STATE = [{
    sessionData: {},
    userInfo: {}
}]

const AuthReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case 'STORE_SIGN_IN_RESPONSE': 
            return [{
                ...state[0],
                sessionData: action.session
            }]

        case 'STORE_CURRENT_USER_INFO':
            return [{
                ...state[0],
                userInfo: action.info
            }]
        
        case 'STORE_SIGN_OUT':
            return DEFAULT_STATE
            
        default:
            return state
    }
}

export default AuthReducer