import { Image, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../utils/GradientButton';
import HollowButton from '../utils/HollowButton';
import { useDispatch } from "react-redux";
import { userSignInApi } from '../features/auth/authSlice';

function OnboardingScreen() {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const marginTopValue = "3%";
    return (
        <SafeAreaView>
            <View className="flex flex-col h-full justify-between bg-white text-black  pt-[8%]" >
                <View className="">
                    <View className="flex flex-row justify-center mt-[50%]">
                        <Image className=""
                            source={require('../assets/Vector.png')}
                        />
                        <Text className="flex text-center font-bold text-5xl pl-[1%] pb-[1%]" style={{ fontFamily: 'mont-bold' }}>Nimble</Text>
                    </View>
                    <Text className="flex text-center font-semibold text-xl pl-[4%] pb-[10%]" style={{ fontFamily: 'mont-semibold' }}>Date first, text after</Text>
                </View>
                <View>
                    <Text
                        style={{ fontFamily: 'mont-med' }}
                        className="flex text-center mt-32 px-[10%] text-md text-black">
                        By Creating an account you agree to Our
                        <Text className=" flex text-center mt-4  text-[#F21464]"> Terms of Service </Text>
                        and
                        <Text className=" flex text-center mt-4  text-[#F21464]"> Privacy Policy</Text>
                        .
                    </Text>
                    <View className="flex justify-around mt-4">
                        <GradientButton
                            pVertical={`0%`}
                            pVerticalBtn={`4%`}
                            onPress={() => {
                                console.log("test")
                                navigation.navigate("SignUp");
                            }}
                            label="Create Account"
                            mTop={marginTopValue}
                        />
                    </View>
                    <View className="flex justify-around mt-0 mb-2">
                        <HollowButton
                            onPress={() => {
                                navigation.navigate("SignIn");
                            }}
                            label="Sign In"
                            mTop={marginTopValue}
                            pVertical={`4%`}
                        />
                    </View>

                </View>


            </View>
        </SafeAreaView>
    )
}
export default OnboardingScreen;