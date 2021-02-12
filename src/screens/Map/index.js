import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from '@ui-kitten/components';
import MapView from 'react-native-maps';
import MapTypePopover from './MapTypePopover';
import styles from './index.style';


class Map extends React.Component {

    render() {
        return (
            <SafeAreaView
                style={styles.container}
                edges={['right', 'top', 'left']}
            >
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsMyLocationButton
                    showsUserLocation
                    showsCompass
                    showsScale

                    showsPointsOfInterest={false}
                    showsBuildings={true}
                    showsTraffic={false}
                >
                        
                </MapView>
                <MapTypePopover 
                    style={styles.mapTypePopover} 
                />
            </SafeAreaView>
        )
    }
}


export default Map;