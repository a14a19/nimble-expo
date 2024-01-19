import { SafeAreaView, Pressable, ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import Asexual from '../assets/imgs/Asexual.png';
import Pansexual from '../assets/imgs/Pansexual.png';
import Bisexual from '../assets/imgs/Bisexual.png';
import Gay from '../assets/imgs/Gay.png';
import GradientButton from "../utils/GradientButton"

function SexualOrientationScreen() {
    const navigateTo = useNavigation();
    const [hasError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedGender, setSelectedGender] = useState(0);
    const [selectedOrientation, setSelectedOrientation] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(0);
    const data = [' ', 'Male', 'Female', 'Non-Binary', 'Trans', 'Other', 'Straight', 'Gay', 'Bisexual', 'Pansexual', 'Asexual', 'Men', 'Women', 'Non-binary', 'Everyone'];
    const handleSubmit = () => {
        if (selectedChoice > 0 && selectedGender > 0 && selectedOrientation > 0) {
            console.log(data[selectedGender], data[selectedOrientation], data[selectedChoice])
            navigateTo.navigate("Preferences");
        } else {
            setError(true);
            setErrorMessage("Please select one option from each of the sections!")
        }

    }
    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="bg-white">
                <View className="p-4 mt-11">
                    <View className="flex w-[358px] h-1 bg-zinc-300 bg-opacity-25 rounded-md mb-9">
                        <View className="w-[230px] h-1 bg-purple-500 rounded-md" />
                    </View>

                    <Pressable
                        onPress={() => navigateTo.navigate("LookingToFind")}
                        className="mb-8"
                    >
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>


                    <Text
                        className="text-3xl font-semibold mb-5"
                        style={{ fontFamily: "mont-semibold" }}
                    >
                        What is your gender identity?
                    </Text>

                    <Text className="text-md mb-8" style={{ fontFamily: "mont-med" }}>
                        This will appear on your profile.
                    </Text>

                    <View className="flex flex-1 items-start ml-3 justify-start">
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedGender(1);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedGender == 1 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Male </Text>
                                    <Text className=" text-lg text-left mb-3 text-[#F21464] " style={{ fontFamily: "mont-med" }}>♂️  </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedGender(2);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedGender == 2 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Female </Text>
                                    <Text className=" text-lg text-left mb-3 text-[#F21464] " style={{ fontFamily: "mont-med" }}>♀️  </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedGender(3);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedGender == 3 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Non-Binary </Text>
                                    <Text className=" text-lg text-left mb-1 text-[#F21464] " style={{ fontFamily: "mont-med" }}>   </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedGender(4);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedGender == 4 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Trans </Text>
                                    <Text className=" text-lg text-left mb-1 text-[#F21464] " style={{ fontFamily: "mont-med" }}> ⚥  </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedGender(5);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedGender == 5 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Other </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text
                        className="text-3xl mt-[6%] font-semibold mb-5"
                        style={{ fontFamily: "mont-semibold" }}
                    >
                        What is your Sexual Orientation?
                    </Text>

                    <Text className="text-md  mb-8" style={{ fontFamily: "mont-med" }}>
                        This will help us to assist you to find a date  faster.
                    </Text>

                    <View className="flex flex-1 items-start ml-3 justify-start">
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedOrientation(6);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedOrientation == 6 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Straight </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedOrientation(7);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedOrientation == 7 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Gay </Text>
                                    <Image className="h-4 w-6 rounded-sm" source={Gay} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedOrientation(8);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedOrientation == 8 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Bisexual </Text>
                                    <Image className="h-4 w-6 rounded-sm" source={Bisexual} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedOrientation(9);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedOrientation == 9 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Pansexual </Text>
                                    <Image className="h-4 w-6 rounded-sm" source={Pansexual} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedOrientation(10);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedOrientation == 10 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Asexual </Text>
                                    <Image className="h-4 w-6 rounded-sm" source={Asexual} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text
                        className="text-3xl mt-[6%] font-semibold mb-5"
                        style={{ fontFamily: "mont-semibold" }}
                    >
                        What do you want to be shown?
                    </Text>

                    <Text className="text-md  mb-8" style={{ fontFamily: "mont-med" }}>
                        This will help us narrow down your search.
                    </Text>

                    <View className="flex flex-1 items-start ml-3 justify-start">
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedChoice(11);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedChoice == 11 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Men </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedChoice(12);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedChoice == 12 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Woman </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedChoice(13);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedChoice == 13 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Non-binary </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                setSelectedChoice(14);

                            }}>
                                <View className="flex flex-row items-center ">
                                    <View style={styles.radio}>
                                        {selectedChoice == 14 ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text className=" text-md text-left " style={{ fontFamily: "mont-med" }}>Everyone </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="flex text-left px-[4%] pb-[5%] ">
                        {hasError && <Text className="flex text-center pt-[2%] text-red-500" >{errorMessage}</Text>}

                        <View className="mt-[6%]">
                            <GradientButton pVertical={`0%`}
                                onPress={handleSubmit}
                                label="Continue"
                                pVerticalBtn={`4%`}
                            />
                        </View>
                    </View>



                </View>

            </ScrollView>

        </SafeAreaView>
    )

}
export default SexualOrientationScreen;


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