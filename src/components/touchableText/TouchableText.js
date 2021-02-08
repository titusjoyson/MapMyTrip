import React from 'react';
import {
    TouchableOpacity,
} from 'react-native';
import {
    Text
} from '@ui-kitten/components';


const TouchableText = ({ children, textStyle, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
)


export default TouchableText;