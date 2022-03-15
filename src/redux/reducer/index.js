import { initialState } from "../store";
import { USER_LOCATION } from "../action";

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
        default:
            return {
                ...state
            }
    }
}