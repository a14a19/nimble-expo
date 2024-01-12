import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native"
import GradientButton from "../utils/GradientButton"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

function SignInScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [hasNameError, setNameError] = useState(false);
    const [hasEmailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [nameErrorMessage, setNameErrorMessage] = useState("")


    const handleEmail = (value) => {
        setEmail(value);
        setEmailError(false);
    }
    const handleName = (value) => {
        setName(value);
        setNameError(false);
    }

    const checkErrors = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (name.length === 0) {
            setNameError(true);
            setNameErrorMessage("Invalid Username!");
            return;
        }

        else if (!emailRegex.test(email)) {
            setEmailError(true);
            setEmailErrorMessage("Please enter a valid email address.");
            return;
        }
        else {

            navigation.navigate("Verification");
        }

    }



    return (
        <SafeAreaView>
            <View className="flex justify-items-start bg-white text-black h-screen pt-[8%]">
                <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%]">Sign In</Text>

                <Text className="px-[4%] py-1">Enter your Full Name</Text>

                <TextInput
                    className="px-1 border  border-slate-300 bg-neutral-100 h-[6%] rounded-lg w-auto mx-[4%]"
                    placeholder=""
                    onChangeText={handleName}
                />
                {hasNameError && <Text className="px-[4%] mt-[1%] py-1 text-red-500" >{nameErrorMessage}</Text>}

                <Text className="px-[4%] mt-[3%] py-1">Enter Your Email Address</Text>
                <TextInput
                    className="px-1 border border-slate-300 bg-neutral-100 h-[6%] rounded-lg w-auto mx-[4%]"
                    type='email'
                    placeholder=""
                    onChangeText={handleEmail}
                />
                {hasEmailError && <Text className="px-[4%] mt-[1%] py-1 text-red-500" >{emailErrorMessage}</Text>}

                <Text className="flex text-right mt-4 mr-4 text-sm text-[#F21464] ">Forgot Password?</Text>

                <View className=" mt-16">
                    <GradientButton pVertical={`0%`}
                        onPress={checkErrors}
                        label="Sign In"
                        pVerticalBtn={`4%`}
                    />
                </View>

                <View className=" ">
                    <Pressable
                        onPress={() => {
                            navigation.navigate("Verification");
                        }}


                    >
                            <Text className=" flex text-center mt-4  text-sm text-[#F21464]">Dont have and Account? Sign Up!</Text>
                    </Pressable>
                </View>

            </View>

        </SafeAreaView>

    )
}
export default SignInScreen
