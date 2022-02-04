import MyAlgoConnect from '@randlabs/myalgo-connect'
import axios from 'axios'

const connectRequest = () => {
    return {
        type: 'CONNECTION_REQUEST',
    }
}

const connectSuccess = (payload) => {
    return {
        type: 'CONNECTION_SUCCESS',
        payload: payload,
    }
}

const connectFailed = (payload) => {
    return {
        type: 'CONNECTION_FAILED',
        payload: payload,
    }
}

export const connect = (shuffle_id) => {
    const myAlgoWallet = new MyAlgoConnect()
    return async (dispatch) => {
        dispatch(connectRequest())
        try {
            const accounts = await myAlgoWallet.connect()
            const addresses = accounts.map((account) => account.address)
            const joinedStatus = await axios.get(`${process.env.REACT_APP_API_URL}/check-joined-address/${shuffle_id}/${addresses[0]}`)
            dispatch(
                connectSuccess({
                    walletAddress: addresses[0],
                    joinedStatus: joinedStatus.data,
                })
            )
        } catch (err) {
            dispatch(connectFailed('Something went wrong!'))
        }
    }
}
