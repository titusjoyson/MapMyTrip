import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        height: 160,
        width: 120,
    },
    imageWrapper: {
        height: 120,
        width: 120,
        borderRadius: 10,
        overflow: "hidden",
        flexDirection: "column",
        backgroundColor: "lightgray",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    titleWrapper: {
        marginTop: 4
    },
    textWrapper: {

    },
    title: {
        fontSize: 16,
        fontWeight: "500"
    },
    subTitleWrapper: {
        flexDirection: "row"
    },
    icon: {
        height: 16,
        width: 16,
        marginRight: 3
    },
    subTitle: {
        fontSize: 12,
    }
})

export default styles;