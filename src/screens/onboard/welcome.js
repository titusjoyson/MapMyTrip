/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import {
    Button,
    Icon,
    Layout,
    Text
} from '@ui-kitten/components';
import { GoogleSignin } from '@react-native-community/google-signin';
import TouchableText from '../../components/touchableText/TouchableText';
import styles from './welcome.style';
import Layouts from '../../theme/Layout';

const layouts = Layouts()

GoogleSignin.configure({
    webClientId: '',
});

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (props) => (
    <Icon {...props} name='google' />
);

async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

export default () => (
    <Layout style={styles.container}>
        <View style={styles.topContainer}>
            <Image
                source={require('../../../assets/logos/MapMyTrip-logos_transparent_cr.png')}
                style={styles.logo}
            />
            <Text style={styles.termsText}>
                <Text>Manage Your Travel</Text>
            </Text>
        </View>
        <Button
            style={styles.likeButton}
            accessoryLeft={HeartIcon}
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        >
            Google Sign-In
        </Button>
        <View style={styles.termsContainer}>
            <View style={layouts.row}>
                <Text style={styles.termsText}>By using this app, you</Text>
            </View>
            <View style={layouts.row}>
                <Text style={styles.termsText}>agree to Path's </Text>
                <TouchableText textStyle={styles.termsTextHighligh}>Terms of Use</TouchableText>
            </View>
            <View style={layouts.row}>
                <Text style={styles.termsText}> and </Text>
                <TouchableText textStyle={styles.termsTextHighligh}>Privacy Policy</TouchableText>
            </View>
        </View>
    </Layout>
);
