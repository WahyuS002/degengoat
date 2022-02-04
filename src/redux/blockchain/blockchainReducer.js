const initialState = {
    loading: false,
    walletAddress: null,
    errorMsg: null,
    joinedStatus: null,
}

const blockchainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CONNECTION_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'CONNECTION_SUCCESS':
            return {
                ...state,
                loading: false,
                walletAddress: action.payload.walletAddress,
                joinedStatus: action.payload.joinedStatus,
            }
        case 'CONNECTION_ERROR':
            return {
                ...state,
                loading: false,
                errorMsg: action.payload.errorMsg,
            }
        default:
            return state
    }
}

export default blockchainReducer
