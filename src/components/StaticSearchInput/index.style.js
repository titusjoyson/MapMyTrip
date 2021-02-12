import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemWrapped:{
        justifyContent: "center",
    },
    input:{
        flexDirection: "row",
        backgroundColor: "white",
        height: 50,
        width: "90%",
        justifyContent: "center",
        borderRadius: 12,
        alignSelf: "center",
        alignItems: "center",
    },
    textStyle:{
        alignSelf: "center"
    },
    shadow: {  
        borderColor:'lightgray', // if you need 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: 'lightgray',
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    icon: {
        height: 22,
        width: 22,
        alignSelf: "center",
        marginRight: 15
    }
})

export default styles;