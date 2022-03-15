export const USER_LOCATION = 'USER_LOCATION'

export const setUserLatLng = () => {
    return (dispatch) => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
                let data = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    checkUser: true
                }
                console.log(data)
                dispatch({
                    type: USER_LOCATION,
                    payload: data,
                })
            })
        }
    }
}