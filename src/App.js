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
import {
	ApplicationProvider,
	IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './screens/onboard';
import Default from './theme/Default';

const Stack = createStackNavigator();

export default () => (
	<>
		<IconRegistry icons={EvaIconsPack} />
		<ApplicationProvider {...eva} theme={eva.light}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="welcome"
						component={Welcome}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</ApplicationProvider>
	</>
);
