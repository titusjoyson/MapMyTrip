import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    },
    topFloaterContainer: {
        position: "absolute",
        width: "100%",
        top: 20,
    },
    bottomFloatingContainer: {
        position: "absolute",
        width: "100%",
        bottom: 10,
    },
    mapTypePopover: {
        justifyContent: "center",
        alignSelf: "flex-end",
        marginRight: "5%",
        marginTop: 20
    },
    mapSearchContainer: {
        width: "90%",
        alignSelf: "center"
    }
});


export default styles;