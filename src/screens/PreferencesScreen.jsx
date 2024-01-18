import { View, SafeAreaView, Text } from "react-native";
import GradientButton from "../utils/GradientButton"
import { useNavigation } from "@react-navigation/native"

import { useState } from "react";







function PreferencesScreen() {
    const navigation = useNavigation();
    const [range, setRange] = useState([0, 0]);

    


    return (
        <SafeAreaView>
            <View>
                <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%]">Preferences</Text>
                <Text className="flex text-left px-[4%] pb-[14%]">Select what you would love to see in your date.</Text>
                <View className="flex text-left px-[4%] pb-[14%] "></View>
                <View className=" mt-16">
                    <GradientButton pVertical={`0%`}
                        onPress={() => {
                            navigation.navigate("LookingToFind");
                        }}
                        label="Continue"
                        pVerticalBtn={`4%`}
                    />
                </View>
                <View className="mx-8">
                   
                   

                </View>



                <Text>{range}</Text>




            </View>

        </SafeAreaView>

    )
}
export default PreferencesScreen;