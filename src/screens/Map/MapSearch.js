import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Icon, Button, Layout, Popover, Text, Card } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import styles from './MapSearch.style';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = ({ style }) => {
    return (
        <GooglePlacesAutocomplete
            styles={style}
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            query={{
                key: 'YOUR API KEY',
                language: 'en',
            }}
        />
    );
};

export default GooglePlacesInput;