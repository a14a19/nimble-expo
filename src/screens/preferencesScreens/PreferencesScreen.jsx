import { View, SafeAreaView, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import GradientButton from "../../utils/GradientButton"

function PreferencesScreen() {
    const navigation = useNavigation();

    const [ageSlider, setAgeSlider] = useState([18, 30])
    const [distSlider, setDistSlider] = useState([50])

    const handleSubmit = () => {
        console.log("age", ageSlider, "dist", distSlider)
        navigation.navigate("AddPhoto");
    }

    return (
        <SafeAreaView>
            <View className=" flex flex-col h-full justify-between bg-white ">
                <View className="p-4 mt-11">
                    <View className="flex w-full h-1 bg-zinc-300 bg-opacity-25 rounded-md mb-9">
                        <View className="w-[290px] h-1 bg-purple-500 rounded-md" />
                    </View>
                    <Pressable
                        onPress={() => navigation.navigate("Passions")}
                        className="mb-4"
                    >
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>
                    <Text className="flex text-left font-semibold text-3xl  pb-[8%]   pt-[4%]" style={{ fontFamily: "mont-semibold" }}>Preferences</Text>
                    <Text className="flex text-left text-md pb-[1%]" style={{ fontFamily: "mont-med" }}>Select what you would love to see in your date.</Text>
                </View>

                <View className="mx-5 flex items-center justify-center">
                    <View className="flex justify-between items-center flex-row w-full">
                        <Text style={{ fontFamily: "mont-semibold" }}>
                            Age range
                        </Text>
                        <Text style={{ fontFamily: "mont-semibold" }}>
                            {ageSlider[0]}-{ageSlider[1]}
                        </Text>
                    </View>
                    <MultiSlider
                        values={ageSlider}
                        min={18}
                        max={90}
                        sliderLength={300}
                        isMarkersSeparated={true}
                        onValuesChange={(value) => setAgeSlider(value)}
                        containerStyle={{ width: "100%" }}
                        trackStyle={{ height: 5, }}
                        selectedStyle={{ backgroundColor: "#9F54FF", }}
                        unselectedStyle={{ backgroundColor: "#BBBBD1" }}
                    />
                </View>

                <View className="mx-5 flex items-center justify-center">
                    <View className="flex justify-between items-center flex-row w-full">
                        <Text style={{ fontFamily: "mont-semibold" }}>
                            Maximum Distance
                        </Text>
                        <Text style={{ fontFamily: "mont-semibold" }}>
                            {distSlider[0]}mi
                        </Text>
                    </View>
                    <MultiSlider
                        values={distSlider}
                        min={5}
                        max={150}
                        sliderLength={300}
                        isMarkersSeparated={false}
                        onValuesChange={(value) => setDistSlider(value)}
                        trackStyle={{ height: 5, }}
                        selectedStyle={{ backgroundColor: "#9F54FF", }}
                        unselectedStyle={{ backgroundColor: "#BBBBD1" }}
                    />
                </View>

                <View className="flex text-left px-[4%] pb-[5%] ">
                    <GradientButton pVertical={`0%`}
                        onPress={() => handleSubmit()}
                        label="Continue"
                        pVerticalBtn={`4%`}
                    />
                </View>
            </View>
        </SafeAreaView>

    )
}
export default PreferencesScreen;