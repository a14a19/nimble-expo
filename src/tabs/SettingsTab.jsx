import { SafeAreaView, Switch, ScrollView, ImageBackground, Text, View, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import GradientButton from "../utils/GradientButton"
import { useState } from "react"
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import BackImage from "../assets/imgs/BGimage.png";
import { AntDesign } from "@expo/vector-icons";
export default function SettingsTab() {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const [budgetSlider, setBudgetSlider] = useState([1, 10])
    const [ageSlider, setAgeSlider] = useState([18, 34])
    const [distanceSlider, setDistanceSlider] = useState([5, 20])
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isPressed, setIsPressed] = useState(false);
    const initialData = ['Delhi', 'Mumbai', 'Kolkata', 'Gujarat', 'Nepal', 'Goa'];

    const [selectedItems, setSelectedItems] = useState([]);

    const handlePress = (item) => {
        if (selectedItems.includes(item)) {
            // If the item is already selected, remove it from the selection
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            // If the item is not selected, add it to the selection
            setSelectedItems([...selectedItems, item]);
        }
    };


    // const Locations = () => {
    //     const data = ['Bushwick', 'Williamburg', 'Greenpoint', 'Bed Stuy', 'Park Slope', 'Crown Heights', 'Soho', 'Noho',];
    return (
        <SafeAreaView className="flex-1">
            <ScrollView className=" bg-white">
                <View className="flex  ">
                    <View className="my-[6%]">
                        <GradientButton pVertical={`0%`}

                            label="Upgrade to Premium"
                            pVerticalBtn={`4%`}
                        />
                    </View>
                    <ImageBackground class=" " source={BackImage} resizeMode="stretch">
                        <View className=" py-[5%] bg-gray-300/60 rounded-lg mt-[2%] mx-[4%] px-[3%]">
                            <Text className="text-xl text-center mb-[4%]" style={{ fontFamily: "mont-bold" }}>Date Settings</Text>

                            <Text className="text-lg" style={{ fontFamily: "mont-semibold" }}>Location Preferences</Text>
                            <View className="mt-[2%] flex items-start mx-[2%]">
                                <Switch
                                    trackColor={{ false: '#767577', true: '#77F7AA' }}
                                    thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <View className="flex flex-row flex-wrap p-2 justify-center mt-[4%] ">
                                {initialData.map((item, index) => (
                                    <Pressable
                                        key={index}
                                        onPress={() => handlePress(item)}
                                        className={` rounded-2xl border border-slate-200 flex  flex-row items-center justify-center w-[44%] mb-2 mr-4 p-2`}
                                        style={[
                                            { backgroundColor: selectedItems.includes(item) ? '#FF5492' : 'transparent' },
                                        ]}
                                    >
                                        <Text
                                            className={`text-center mr-1.5 ${selectedItems.includes(item) ? 'text-[#FAFBFE]' : 'text-[#4B4B6D]'}`}
                                            fontFamily="mont-med"
                                        >
                                            {item}
                                        </Text>
                                    </Pressable>
                                ))}

                            </View>






                            <View className=" flex items-center justify-center">
                                <View className="flex justify-between items-center flex-row w-full">
                                    <Text className="text-lg mt-[4%] " style={{ fontFamily: "mont-semibold" }}>
                                        Date Budget
                                    </Text>
                                    <Text className="mr-[8%] mt-[2%] " style={{ fontFamily: "mont-semibold" }}>
                                        {budgetSlider[0]}k-{budgetSlider[1]}k
                                    </Text>
                                </View>
                                <MultiSlider
                                    values={budgetSlider}
                                    min={1}
                                    max={30}
                                    sliderLength={300}
                                    isMarkersSeparated={true}
                                    onValuesChange={(value) => setBudgetSlider(value)}
                                    containerStyle={{ width: "100%" }}
                                    trackStyle={{ height: 5, }}
                                    selectedStyle={{ backgroundColor: "#9F54FF", }}
                                    unselectedStyle={{ backgroundColor: "#FAFBFE" }}
                                />
                            </View>
                            <View className=" flex items-center justify-center">
                                <View className="flex justify-between items-center flex-row w-full">
                                    <Text className="text-lg mt-[2%] " style={{ fontFamily: "mont-semibold" }}>
                                        Age Range
                                    </Text>
                                    <Text className="mr-[8%] mt-[2%] " style={{ fontFamily: "mont-semibold" }}>
                                        {ageSlider[0]}-{ageSlider[1]}
                                    </Text>
                                </View>
                                <MultiSlider
                                    values={ageSlider}
                                    min={18}
                                    max={50}
                                    sliderLength={300}
                                    isMarkersSeparated={true}
                                    onValuesChange={(value) => setAgeSlider(value)}
                                    containerStyle={{ width: "100%" }}
                                    trackStyle={{ height: 5, }}
                                    selectedStyle={{ backgroundColor: "#9F54FF", }}
                                    unselectedStyle={{ backgroundColor: "#FAFBFE" }}
                                />
                            </View>
                            <View className=" flex items-center justify-center">
                                <View className="flex justify-between items-center flex-row w-full">
                                    <Text className="text-lg mt-[2%] " style={{ fontFamily: "mont-semibold" }}>
                                        Maximum Distance
                                    </Text>
                                    <Text className="mr-[8%] mt-[2%] " style={{ fontFamily: "mont-semibold" }}>
                                        {distanceSlider[0]}km-{distanceSlider[1]}km
                                    </Text>
                                </View>
                                <MultiSlider
                                    values={distanceSlider}
                                    min={5}
                                    max={50}
                                    sliderLength={300}
                                    isMarkersSeparated={true}
                                    onValuesChange={(value) => setDistanceSlider(value)}
                                    containerStyle={{ width: "100%" }}
                                    trackStyle={{ height: 5, }}
                                    selectedStyle={{ backgroundColor: "#9F54FF", }}
                                    unselectedStyle={{ backgroundColor: "#FAFBFE" }}
                                />
                            </View>


                        </View>



                    </ImageBackground>
                    <View className="mx-[4%] mt-[20%] py-[1%] border-y-2 border-gray-400 flex flex-row justify-between">
                        <Text className="text-lg mt-[1%] " style={{ fontFamily: "mont-semibold" }}>
                            Edit Prompts
                        </Text>
                        <Pressable
                            className="mr-[1%] mt-[2%] "
                        >
                            <AntDesign name="right" size={18} color="black" />
                        </Pressable>
                    </View>
                    <View className="mx-[4%] mt-[9%] py-[1%] border-y-2 border-gray-400  flex flex-row justify-between">
                        <Text className="text-lg mt-[1%] " style={{ fontFamily: "mont-semibold" }}>
                            Notification Settings
                        </Text>
                        <Pressable
                            className="mr-[1%] mt-[2%] "
                        >
                            <AntDesign name="right" size={18} color="black" />
                        </Pressable>
                    </View>
                    <View className="mx-[4%] mt-[1%] py-[1%] border-b-2 border-gray-400  flex flex-row justify-between">
                        <Text className="text-lg  " style={{ fontFamily: "mont-semibold" }}>
                            Invite a Friend!
                        </Text>
                        <Pressable
                            className="mr-[1%] mt-[2%] "
                        >
                            <AntDesign name="right" size={18} color="black" />
                        </Pressable>
                    </View>
                    <View className="mx-[4%] mt-[9%] py-[1%] border-y-2 border-gray-400  flex flex-row justify-between">
                        <Text className="text-lg mt-[1%] " style={{ fontFamily: "mont-semibold" }}>
                            Hide Account
                        </Text>
                        <Pressable
                            className="mr-[1%] mt-[2%] "
                        >
                            <AntDesign name="right" size={18} color="black" />
                        </Pressable>
                    </View>
                    <View className="mx-[4%] mt-[1%] py-[1%] border-b-2 border-gray-400  flex flex-row justify-between">
                        <Text className="text-lg  " style={{ fontFamily: "mont-semibold" }}>
                            Delete Account
                        </Text>
                        <Pressable
                            className="mr-[1%] mt-[2%] "
                        >
                            <AntDesign name="right" size={18} color="black" />
                        </Pressable>
                    </View>

                    <View className=" mt-[14%] mb-[2%]">
                        <GradientButton pVertical={`0%`}

                            label="Confirm"
                            pVerticalBtn={`4%`}
                        />
                    </View>





                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

