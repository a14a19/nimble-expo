import { SafeAreaView, View, Text, Pressable, TouchableWithoutFeedback, TextInput, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native"
import GradientButton from "../utils/GradientButton"
function ForgotPasswordScreen() {
    const navigation = useNavigation();
    const handleEmail = (value) => {
        setEmail(value);
        setEmailError(false);
    }
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
        >
            <SafeAreaView>
                <View className="flex flex-col h-full justify-between pt-[8%] px-[4%] bg-white">
                    <View>
                        <Text className="flex text-left font-bold text-3xl pb-[6%]" style={{ fontFamily: "mont-semibold" }}>Forgot Password</Text>
                        <Text className="py-[1%]" style={{ fontFamily: "mont-med" }}>Enter your Email Address</Text>
                        <TextInput
                            className="px-1 border mt-[%] border-slate-300 bg-neutral-100 h-[20%] rounded-lg w-auto "
                            placeholder=""
                            onChangeText={handleEmail}
                        />
                        <View>
                            <Pressable
                                onPress={() => {
                                    navigation.navigate("LookingToFind");
                                }}
                            >
                                <Text className="flex text-right mt-4 mr-4 text-sm text-[#F21464] ">Temp Routing?</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <View className="mb-[3%]">
                            <GradientButton pVertical={`0%`}
                                onPress={() => {
                                    navigation.navigate("VerifyEmail");
                                }}

                                label="Continue"
                                pVerticalBtn={`5%`}
                            />
                        </View>
                    </View>


                </View>

            </SafeAreaView>

        </TouchableWithoutFeedback>

    )
}
export default ForgotPasswordScreen;