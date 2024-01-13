import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileTab from './ProfileTab';
import SettingsTab from './SettingsTab';
import NimbleTab from "./NimbleTab";
import CustomTabBar from "../utils/CustomTabBar";
import { StatusBar } from "react-native";

export default function TabScreens() {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Nimble" tabBar={props => <CustomTabBar {...props} />}>
                <Tab.Screen name="Profile" component={ProfileTab} />
                <Tab.Screen name="Nimble" component={NimbleTab} />
                <Tab.Screen name="Settings" component={SettingsTab} />
            </Tab.Navigator>
        </NavigationContainer>
    )
};

