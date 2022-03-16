import { initialState } from "../store";
import { USER_LOCATION, 
         FETCH_COUNTRY_CODE, 
         FETCH_ALL_BIKE_NETWORKS, 
         FETCH_STATIONS} from "../action";

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOCATION:
            return {
                ...state,
                userPosition: action.payload,
                mapCenter: {
                    lat: action.payload.lat,
                    long: action.payload.long
                },
                isLoading: false,
            }
        case FETCH_COUNTRY_CODE:
            return {
                ...state,
                countryCode: action.payload
            }
        case FETCH_ALL_BIKE_NETWORKS: 
            return {
                ...state,
                allBikeNetworks: action.payload
            }
        case FETCH_STATIONS: 
            return {
                ...state,
                stations: action.payload,
                checkStations: true
            }
        default:
            return {
                ...state
            }
    }
}