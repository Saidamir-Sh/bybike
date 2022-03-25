// turning number into lat,lng format
export const intoLatLng = (value) => {
    let arr = value?.toString().split("")
    let formattedArr = arr?.splice(2, 0, '.')
    let LatLng = parseFloat(arr?.join(''))
    return LatLng
}

// formatting station name
export const formatName = (string) => {
    return string?.replace('-', ' ').toUpperCase()
}