import { Image, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../utils/GradientButton';
import HollowButton from '../utils/HollowButton';

function OnboardingScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="flex justify-items-start bg-white text-black h-screen pt-[8%]">
                <View className="flex flex-row justify-center mt-[50%]">
                    <Image className=""
                        source={require('../assets/Vector.png')}
                    />
                    <Text className="flex text-center font-bold text-5xl pl-[1%] pb-[1%]">Nimble</Text>
                </View>
                <Text className="flex text-center font-semibold text-xl pl-[4%] pb-[10%]">Date first, text after</Text>
                <Text
                    className="flex text-center mt-32 px-[10%] text-md text-black">
                    By Creating an account you agree to Our
                    <Text className=" flex text-center mt-4  text-[#F21464]"> Terms of Service </Text>
                    and
                    <Text className=" flex text-center mt-4  text-[#F21464]"> Privacy Policy</Text>
                    .
                </Text>
                <View className="flex justify-around mt-4">
                    <GradientButton
                        onPress={() => {
                            // navigation.navigate("CreateAccountScreen");
                        }}
                        label="Create Account"
                    />
                </View>
                <View className="flex justify-around mt-0 mb-2">
                    <HollowButton
                        onPress={() => {
                            navigation.navigate("SignIn");
                        }}
                        label="Sign In"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default OnboardingScreen;