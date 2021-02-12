import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        paddingBottom: 15
    },
    avatar: {
        marginHorizontal: 4,
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    backdrop:{
        marginTop: 10 
    },
    cardSection:{

    },
    cardTitle:{
        fontSize: 14,
        marginBottom: 20
    },
    cardRow:{
        flexDirection: "row"
    },
    cardContainer: {
        height: 80,
        width: 50,
        marginRight: 20,
    },
    cardImage: {
        height: 50,
        width: 50,
        borderRadius: 5,
    },
    cardImageSelected:{
        borderWidth: 2.5,
        borderColor: Colors.primary
    },
    cardText: {
        fontSize: 12,
        marginTop: 8
    },
    cardTextSelected: {
        color: Colors.primary
    }
});


export default styles;