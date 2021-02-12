import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContainer: {
        height: "22%",
        backgroundColor: "white"
    },
    bottomContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end"
    },
    text: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: "10%"
    },
    avatarRow:{
        marginHorizontal: 20,
        marginRight: 25,
        justifyContent: "space-between"
    },
    touchInput:{
        position:"absolute",
        backgroundColor: "transparent",
        bottom: -25,
        width: "100%"
    },
    homeTitle:{
        
    },
    scroll:{
        flex: 1,
        marginBottom: 20,
        marginTop: 45
    }
});


export default styles;