import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducer';

export const initialState = {
    countryCode: null,
    userPosition: {},
    mapCenter: {},
    allBikeNetworks: [],
    stations: {},
    isLoading: true,
    checkStations: false,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let configureStore = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default configureStore