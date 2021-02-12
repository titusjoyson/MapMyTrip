import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon, Text } from '@ui-kitten/components';
import styles from './index.style';

const StaticSearchInput = ({ onPress, style }) => {

    return (
        <View style={style}>
            <TouchableOpacity activeOpacity={0.90} onPress={() => onPress()}>
                <View style={[styles.input, styles.shadow]}>
                    <Icon fill='#232323' style={styles.icon} name={'search-outline'} />
                    <Text style={styles.textStyle}>Hi Titus, Where do you want to go?</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};


export default StaticSearchInput;