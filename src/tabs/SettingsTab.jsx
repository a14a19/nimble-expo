import { SafeAreaView, Switch, ScrollView, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import SolidButton from "../utils/SolidButton";
import { useState } from "react"
export default function SettingsTab() {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView className="flex-1">
            <ScrollView className=" bg-white">
                <View className="flex mx-[4%]">
                    <View className="mt-[6%]">
                        <SolidButton
                            pVertical={`4%`}
                            label="Upgrade to Premium"


                        />
                    </View>
                    <Text className="text-lg"style={{ fontFamily: "mont-semibold" }}>Location Preferences</Text>
                    <View className="mt-[3%] flex items-start mx-[3%]">
                        <Switch
                            trackColor={{ false: '#767577', true: '#77F7AA' }}
                            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
