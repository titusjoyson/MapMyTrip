import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Icon, Button, Layout, Popover, Text, Card } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import styles from './MyLocation.styles';
import Geolocation from 'react-native-geolocation-service';

const StarIcon = (props) => (
    <Icon {...props} name='radio-button-on-outline' />
);

const MyLocation = ({ style, onPress }) => {
    return (
        <Button
            style={styles.button}
            status='danger'
            accessoryLeft={StarIcon}
            onPress={() => {
                Geolocation.getCurrentPosition(
                    (position) => {
                        console.log(position);
                        onPress(position);
                    },
                    (error) => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
            }}
        />
    );
};

export default MyLocation;