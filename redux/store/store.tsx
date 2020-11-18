import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from '../reducers/rootReducer'
import {spamWordsFilterMiddleware} from "../middleware/middleware";

const initialState = {}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk,spamWordsFilterMiddleware)))

export default store