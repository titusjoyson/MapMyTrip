import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Icon, Text } from '@ui-kitten/components';
import styles from './item.style';


class Item extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <ImageBackground
                        source={{ uri: "https://placeimg.com/640/480/any" }} 
                        style={styles.image}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>Oie Sintorini</Text>
                    </View>
                    <View style={styles.subTitleWrapper}>
                        <Icon fill='#232323' style={styles.icon} name={'navigation-2'} />
                        <Text style={styles.subTitle}>Greece</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Item;