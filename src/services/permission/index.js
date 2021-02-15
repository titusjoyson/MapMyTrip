import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';


export const alertHandler = (result) => {
    switch (result) {
        case RESULTS.UNAVAILABLE:
            alert('This feature is not available (on this device / in this context)');
            break;
        case RESULTS.DENIED:
            // 'The permission has not been requested / is denied but requestable'
            requestPermission();
            break;
        case RESULTS.LIMITED:
            alert('The location permission is limited: some actions are possible');
            break;
        case RESULTS.GRANTED:
            // The permission is granted
            break;
        case RESULTS.BLOCKED:
            // The permission is denied and not requestable anymore
            break;
    }
}


export const checkPermission = () => {
    return check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        .then((result) => {
            alertHandler(result);
        })
        .catch((error) => {
            // …
        });
}


export const requestPermission = () => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
        //alertHandler(result);
    });
}
