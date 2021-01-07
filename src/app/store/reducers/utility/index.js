const UTILITY_DEFAULT = {
    loading: false
}

const UtilityReducer = (state = UTILITY_DEFAULT, action) => {
    switch(action.type){
        case 'PAGE_LOADING':
            return {
                ...state,
                loading: true
            }
        
        case 'LOADING_DONE':
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}

export default UtilityReducer