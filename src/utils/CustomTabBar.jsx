import { TouchableOpacity, View } from "react-native"

import PersonInactive from "../assets/tabs/PersonInactive";
import PersonActive from "../assets/tabs/PersonActive";
import HeartInactive from "../assets/tabs/HeartInactive";
import SettingInactive from "../assets/tabs/SettingInactive";
import HeartActive from "../assets/tabs/HeartActive";
import SettingActive from "../assets/tabs/SettingActive";

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View className="flex flex-row">
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const isFocused = state.index === index;

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            className="flex-1 flex justify-center items-center py-2"
                            key={index}
                        >
                            {
                                label === "Profile" && isFocused
                                &&
                                <PersonActive />
                            }
                            {
                                label === "Profile" && !isFocused
                                &&
                                <PersonInactive />
                            }
                            {
                                label === "Nimble" && isFocused
                                &&
                                <HeartActive />
                            }
                            {
                                label === "Nimble" && !isFocused
                                &&
                                <HeartInactive />
                            }
                            {
                                label === "Settings" && isFocused
                                &&
                                <SettingActive />
                            }
                            {
                                label === "Settings" && !isFocused
                                &&
                                <SettingInactive />
                            }
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    )
};