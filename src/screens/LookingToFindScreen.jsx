import { Text, View, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Pressable, TouchableWithoutFeedback } from 'react-native';

import GradientButton from "../utils/GradientButton"
import { useNavigation } from "@react-navigation/native"
import { useMemo, useState } from "react";
import { AntDesign } from "@expo/vector-icons";


function LookingToFindScreen() {
    const navigateTo = useNavigation();
    const [selectedRadio, setSelectedRadio] = useState(0);
    const data = [' ','relationship','Casual', 'Unsure', 'Undisclosed'];

    const handleSubmit = () => {
        if (selectedRadio > 0) {
            console.log(data[selectedRadio])
            navigateTo.navigate("SexualOrientation");
        }

        
    }
    return (
        <SafeAreaView>
            <View className=" flex flex-col h-full justify-between bg-white">
                <View className="p-4 mt-11">
                    <View className="flex w-[358px] h-1 bg-zinc-300 bg-opacity-25 rounded-md mb-9">
                        <View className="w-[160px] h-1 bg-purple-500 rounded-md" />
                    </View>
                    <Pressable
                        onPress={() => navigateTo.navigate("Passions")}
                        className="mb-4"
                    >
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>

                    <Text className="flex text-left font-semibold text-3xl  pb-[8%]   pt-[4%]" style={{ fontFamily: "mont-semibold" }}>What are you hoping to Find?</Text>
                    <Text className="flex text-left text-md pb-[14%]" style={{ fontFamily: "mont-med" }}>This will help us to assist you to find a date Faster.</Text>

                    <View className="flex flex-1 items-start ml-3 justify-start">
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedRadio(1);
                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedRadio == 1 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left pb-[4%]">A relationship</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-12">
                            <TouchableOpacity onPress={() => {
                                setSelectedRadio(2);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedRadio == 2 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left pb-[4%]">Something casual</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-12">
                            <TouchableOpacity onPress={() => {
                                setSelectedRadio(3);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedRadio == 3 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left pb-[4%]">Unsure</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-12">
                            <TouchableOpacity onPress={() => {
                                setSelectedRadio(4);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedRadio == 4 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left pb-[4%]">Prefer not to say</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View className="flex text-left px-[4%] pb-[5%] ">

                    <View className=" mt-16">
                        <GradientButton pVertical={`0%`}
                            onPress={handleSubmit}
                            label="Continue"
                            pVerticalBtn={`4%`}
                        />
                    </View>
                </View>

            </View>

        </SafeAreaView>

    )

}

export default LookingToFindScreen;

const styles = StyleSheet.create({

    radio: {
        width: 20,
        height: 20,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radiobg: {
        backgroundColor: '#F21464',
        width: 12,
        height: 12,
        margin: 3,
        borderRadius: 5,

    }
})