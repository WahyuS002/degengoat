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
            const registeredStatus = await axios.get(`${process.env.REACT_APP_API_URL}/participant/checkRegistered/${addresses[0]}`)
            dispatch(
                connectSuccess({
                    walletAddress: addresses[0],
                    registeredStatus: registeredStatus.data,
                })
            )
        } catch (err) {
            dispatch(connectFailed('Something went wrong!'))
        }
    }
}

export const refreshWalletRegisteredStatus = (wallet_address) => {
    return async (dispatch) => {
        dispatch(connectRequest())
        try {
            const registeredStatus = await axios.get(`${process.env.REACT_APP_API_URL}/participant/checkRegistered/${wallet_address}`)
            dispatch(
                connectSuccess({
                    registeredStatus: registeredStatus.data,
                })
            )
        } catch (err) {
            dispatch(connectFailed('Something went wrong!'))
        }
    }
}

export const checkJoinedAddress = (wallet_address, shuffle_slug = null) => {
    return async (dispatch) => {
        dispatch(connectRequest())
        try {
            const joinedStatus = await axios.get(`${process.env.REACT_APP_API_URL}/participant/shuffle/joinedStatus/${wallet_address}/${shuffle_slug}`)
            const registeredStatus = await axios.get(`${process.env.REACT_APP_API_URL}/participant/checkRegistered/${wallet_address}`)
            const participant = await axios.get(`${process.env.REACT_APP_API_URL}/participant/shuffle/${wallet_address}/${shuffle_slug}`)
            console.log('this participant is :', participant)
            dispatch(
                connectSuccess({
                    walletAddress: wallet_address,
                    registeredStatus: registeredStatus.data,
                    joinedStatus: joinedStatus.data,
                    participantPosition: participant.data.data.position,
                })
            )
        } catch (err) {
            dispatch(connectFailed('Something went wrong!'))
        }
    }
}
