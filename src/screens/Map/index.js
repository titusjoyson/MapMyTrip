import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from '@ui-kitten/components';
import MapView from 'react-native-maps';
import MapTypePopover from './MapTypePopover';
import styles from './index.style';


class Map extends React.Component {
    state = {
        mapType: "satellite",
        showsPointsOfInterest: false,
        showsBuildings: false,
        showsTraffic: false
    }

    render() {
        const { mapType, showsPointsOfInterest, showsBuildings, showsTraffic } = this.state;

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

                    showsPointsOfInterest={showsPointsOfInterest}
                    showsBuildings={showsBuildings}
                    showsTraffic={showsTraffic}
                    mapType={mapType}
                >
                        
                </MapView>
                <MapTypePopover 
                    style={styles.mapTypePopover}
                    value={{
                        mapType,
                        showsPointsOfInterest,
                        showsBuildings,
                        showsTraffic
                    }}
                    onChange={(value)=>{
                        this.setState(value)
                    }}
                />
            </SafeAreaView>
        )
    }
}


export default Map;