import { View, SafeAreaView, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import GradientButton from "../../utils/GradientButton"
import { userFinalSignUpAPI } from "../../features/auth/authSlice";
import { setSelectedPreferences } from "../../features/forms/formSlice";

function PreferencesScreen() {

    const dispatch = useDispatch()
    const { FoodAndDrink, Entertainment, Sports, TravellingAndActivities, Pets, Personality, AstrologySign, LookingToFind, Gender, SexualOrientation, GenderCriteria, age, distance } = useSelector((store) => store.form)
    const { userData } = useSelector((store) => store.auth)
    const navigation = useNavigation();

    useEffect(() => {
        console.log("user data after preferences - ", userData);
        if (userData.age) {
            navigation.navigate("AddPhoto")
        }
    }, [userData])

    const [ageSlider, setAgeSlider] = useState(age)
    const [distSlider, setDistSlider] = useState(distance)

    const handleSubmit = () => {
        const data = {
            FoodAndDrink: FoodAndDrink,
            Entertainment: Entertainment,
            Sports: Sports,
            TravellingAndActivities: TravellingAndActivities,
            Pets: Pets,
            Personality: Personality,
            AstrologySign: AstrologySign,
            toFind: LookingToFind,
            Gender: Gender,
            SexualOrientation: SexualOrientation,
            toBeShown: GenderCriteria,
            age: ageSlider,
            distance: distSlider[0]
        }
        console.log("final data to send: ", data)
        dispatch(userFinalSignUpAPI({ body: data, params: { id: "65afca9516257d6a7ec63b59" }, options: "" }))
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