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

export const connect = () => {
    const myAlgoWallet = new MyAlgoConnect()
    return async (dispatch) => {
        dispatch(connectRequest())
        try {
            const accounts = await myAlgoWallet.connect()
            const addresses = accounts.map((account) => account.address)
            dispatch(
                connectSuccess({
                    walletAddress: addresses[0],
                })
            )
        } catch (err) {
            dispatch(connectFailed('Something went wrong!'))
        }
    }
}

export const checkJoinedAddress = (shuffle_id, address) => {
    return async (dispatch) => {
        dispatch(connectRequest())
        try {
            const joinedStatus = await axios.get(`${process.env.REACT_APP_API_URL}/check-joined-address/${shuffle_id}/${address}`)
            dispatch(
                connectSuccess({
                    walletAddress: address,
                    joinedStatus: joinedStatus.data,
                })
            )
        } catch (err) {
            dispatch(connectFailed('Something went wrong!'))
        }
    }
}
