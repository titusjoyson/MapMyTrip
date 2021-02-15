import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignSelf: "flex-end",
        marginRight: "5%",
        marginBottom: "5%"
    },
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default styles;