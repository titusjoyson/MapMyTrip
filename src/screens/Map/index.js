import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from '@ui-kitten/components';
import MapView from 'react-native-maps';
import MapTypePopover from './MapTypePopover';
import GooglePlacesInput from './MapSearch';
import MyLocation from './MyLocation';
import { alertHandler, checkPermission } from '../../services/permission';
import styles from './index.style';


class Map extends React.Component {
    state = {
        mapType: "satellite",
        showsPointsOfInterest: false,
        showsBuildings: false,
        showsTraffic: false,
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }

    componentDidMount() {
        checkPermission()
    }

    getInitialState() {
        return {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        const {
            region,
            mapType,
            showsPointsOfInterest,
            showsBuildings,
            showsTraffic
        } = this.state;

        return (
            <SafeAreaView
                style={styles.container}
                edges={['right', 'top', 'left']}
            >
                <MapView
                    style={styles.map}
                    initialRegion={region}
                    region={region}

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
                <View style={styles.topFloaterContainer}>
                    <GooglePlacesInput
                        style={{
                            container: styles.mapSearchContainer
                        }}
                    />
                    <MapTypePopover
                        style={styles.mapTypePopover}
                        value={{
                            mapType,
                            showsPointsOfInterest,
                            showsBuildings,
                            showsTraffic
                        }}
                        onChange={(value) => {
                            this.setState(value)
                        }}
                    />
                </View>
                <View style={styles.bottomFloatingContainer}>
                    <MyLocation
                        onPress={value => {
                            //alert(JSON.stringify(value.coords))
                            this.setState({
                                initialRegion: {
                                    latitude: value.coords.latitude,
                                    longitude: value.coords.longitude,
                                }
                            })
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}


export default Map;