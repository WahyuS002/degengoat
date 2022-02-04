import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'

const middleware = [thunk]
const composeEnchancers = compose(applyMiddleware(...middleware))

const configureStore = () => {
    return createStore(rootReducer, composeEnchancers)
}

const store = configureStore()

export default store
