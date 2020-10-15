const DEFAULT_STATE = {
    sessionData: null,
    userInfo: null,
    forgotPassword: {
        requested: false,
        codeSent: false
    }
}

const AuthReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case 'STORE_SIGN_IN_RESPONSE': 
            return {
                ...state,
                sessionData: action.session
            }

        case 'STORE_CURRENT_USER_INFO':
            return {
                ...state,
                userInfo: action.info
            }
        
        case 'INITIATE_FORGOT_PASSWORD': 
            return {
                ...state,
                forgotPassword: {
                    ...state.forgotPassword,
                    requested: true
                }
            }
        
        case 'CODE_SENT_TO_USER':
            return{
                ...state,
                forgotPassword: {
                    ...state.forgotPassword,
                    codeSent: true
                }
            }

        case 'CANCEL_FORGOT_PASSWORD':
            return {
                ...state,
                forgotPassword: {
                    codeSent: false,
                    requested: false
                }
            }
        case 'STORE_SIGN_OUT':
            return DEFAULT_STATE
            
        default:
            return state
    }
}

export default AuthReducer