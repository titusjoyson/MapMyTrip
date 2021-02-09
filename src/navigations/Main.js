import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Welcome } from '../screens/onboard';
import Home from '../screens/home';
import TabIcon from '../components/tabIcon';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator()


// @refresh reset
const HomeTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting={true}
            sceneAnimationEnabled={false}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: () => <></>,
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon
                            focused={focused}
                            color={color}
                            size={size}
                            iconName="home"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: () => <></>,
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon
                            focused={focused}
                            color={color}
                            size={size}
                            iconName="bookmark"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: () => <></>,
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon
                            focused={focused}
                            color={color}
                            size={size}
                            iconName="person"
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const MainRouts = () => {
    return (
        <Stack.Navigator initialRouteName={"home"}>
            <Stack.Screen
                name="welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="home"
                component={Home}
            />
        </Stack.Navigator>
    )
}

export default () => (
    <NavigationContainer>
        <RootStack.Navigator initialRouteName={"homeTab"}>
            <RootStack.Screen
                name="main"
                component={MainRouts}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="homeTab"
                component={HomeTabs}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    </NavigationContainer>
);
