import { View, SafeAreaView, Text, Pressable } from "react-native";
import GradientButton from "../utils/GradientButton"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

function PreferencesScreen() {
    const navigation = useNavigation();
   

    return (
        <SafeAreaView>
            <View className=" flex flex-col h-full justify-between bg-white ">
                <View className="p-4 mt-11">
                    <View className="flex w-[358px] h-1 bg-zinc-300 bg-opacity-25 rounded-md mb-9">
                        <View className="w-[290px] h-1 bg-purple-500 rounded-md" />
                    </View>
                    <Pressable
                        onPress={() => navigateTo.navigate("Passions")}
                        className="mb-4"
                    >
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>
                    <Text className="flex text-left font-semibold text-3xl  pb-[8%]   pt-[4%]" style={{ fontFamily: "mont-semibold" }}>Preferences</Text>
                    <Text className="flex text-left text-md pb-[14%]" style={{ fontFamily: "mont-med" }}>Select what you would love to see in your date.</Text>
           


                </View>
                <View className="flex text-left px-[4%] pb-[5%] ">
                    <GradientButton pVertical={`0%`}
                        onPress={() => {
                            navigation.navigate("LookingToFind");
                        }}
                        label="Continue"
                        pVerticalBtn={`4%`}
                    />
                </View>
            </View>
        </SafeAreaView>

    )
}
export default PreferencesScreen;