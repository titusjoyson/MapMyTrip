import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../theme/Colors';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    topContainer:{
        flex: 0
    },
    text: {
        textAlign: 'center',
    },
    likeButton: {
        marginVertical: 16,
        width: "80%",
    },
    logo: {
        height: imageHeight,
        width: imageWidth,
        resizeMode: 'contain',
    },
    termsContainer:{
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    termsText:{
        textAlign: "center",
        fontSize: 12
    },
    termsTextHighligh:{
        fontSize: 12,
        color: Colors.primaryDark
    }
});


export default styles;