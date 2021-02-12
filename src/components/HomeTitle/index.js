import React from 'react';
import { View, Text } from 'react-native';

import styles from './index.style';


const HomeTitle = ({style, text}) => {
    return (
        <View style={[styles.wrapper, style]}>
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

export default HomeTitle;