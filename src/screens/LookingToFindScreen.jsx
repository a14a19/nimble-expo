import { Text, View, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Pressable, TouchableWithoutFeedback } from 'react-native';

import GradientButton from "../utils/GradientButton"
import { useNavigation } from "@react-navigation/native"
import { useMemo, useState } from "react";

function LookingToFindScreen() {
    const navigation = useNavigation();
    const [selectedRadio, setSelectedRadio] = useState(0);

    const [selectedId, setSelectedId] = useState();
    return (
        <SafeAreaView>
            <View className=" flex flex-col h-full justify-between">
                <View>
                    <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%] pt-[8%]">What are you hoping to Find?</Text>
                    <Text className="flex text-left px-[4%] pb-[14%]">This will help us to assist you to find a date Faster.</Text>

                    <View className="flex flex-1 items-start ml-3 justify-start">
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedRadio(1);
                                console.log("Selected option: A relationship");
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
                                console.log("Selected option: Something casual");
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
                                console.log("Selected option: Unsure");
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
                                console.log("Selected option: Prefer not to say");
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
                <View className="flex text-left px-[4%] pb-[14%] ">

                    <View className=" mt-16">
                        <GradientButton pVertical={`0%`}
                            onPress={() => {
                                navigation.navigate("Preferences");
                            }}
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