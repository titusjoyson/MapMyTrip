import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from '@ui-kitten/components';
import styles from './index.style';
import StaticSearchInput from '../../components/StaticSearchInput';
import Layout from '../../theme/Layout';
import HomeTitle from '../../components/HomeTitle';
import ItemSlider from '../../components/ItemSlider';

const homeImg = require("../../../assets/images/home-image-1.jpeg");
const avatarImg = require("../../../assets/images/avatar.png");
const layout = Layout()

class Home extends React.Component {

    render() {
        return (
            <SafeAreaView
                style={styles.container}
                edges={['right', 'top', 'left']}
            >
                <View style={styles.topContainer}>
                    <ImageBackground source={homeImg} style={styles.image}>
                        <View style={[layout.row, styles.avatarRow]}>
                            <Text style={styles.text}>Discovery</Text>
                            <Avatar source={avatarImg} />
                        </View>
                        <StaticSearchInput
                            style={styles.touchInput}
                            onPress={() => { }}
                        />
                    </ImageBackground>
                </View>
                <View style={styles.bottomContainer}>
                    <ScrollView style={styles.scroll} showsHorizontalScrollIndicator={false}>
                        <ItemSlider title={"Suggested"} />
                        <ItemSlider title={"Recent"} style={{ marginTop: 20 }} />
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}


export default Home;