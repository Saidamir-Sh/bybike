export const USER_LOCATION = 'USER_LOCATION'
export const FETCH_COUNTRY_CODE = 'FETCH_COUNTRY_CODE'
export const FETCH_ALL_BIKE_NETWORKS = 'FETCH_ALL_BIKE_NETWORKS'

export const setUserLatLng = () => {
    return (dispatch) => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
                let data = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    checkUser: true
                }
                dispatch({
                    type: USER_LOCATION,
                    payload: data,
                })
            })
        }
    }
}

export const fetchCountryCode = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(`https://ip.nf/me.json`)
            if(response.ok) {
                let data = await response.json()
                dispatch({
                    type: FETCH_COUNTRY_CODE,
                    payload: data.ip.country_code
                })
            }
        } catch (error) {
            console.log('Error occured while fetching country code : ' + error)
        }
    }
}

export const fetchAllBikeNetworks = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(`http://api.citybik.es/v2/networks`, {mode: 'cors'}, 
            {headers : {
                "x-rapidapi-host": "community-citybikes.p.rapidapi.com",
                "x-rapidapi-key": "6c32858c11mshafd50d3dee6dc14p1ac0b8jsnf6f06fe1b868"
            }}
            )
            if(response.ok) {
                let data = await response.json()
                dispatch({
                    type: FETCH_ALL_BIKE_NETWORKS,
                    payload: data
                })
            }
        } catch (error) {
            console.log('Error occured while fetching all bike networks : ' + error)
        }
    }
}