const AuthReducer = (state = [], action) => {
    switch(action.type){
        case 'STORE_SIGN_IN_RESPONSE': 
            return [...state, action.session]
        
        case 'STORE_SIGN_OUT':
            return []
            
        default:
            return state
    }
}

export default AuthReducer