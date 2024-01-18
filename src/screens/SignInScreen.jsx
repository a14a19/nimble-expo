import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    SafeAreaView,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native"
import GradientButton from "../utils/GradientButton"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { userSignInApi } from '../features/auth/authSlice';


function SignInScreen() {
    const { isLoggedIn, errors } = useSelector((store) => store.auth)
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasEmailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [haserror, setError] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState("");
    const handleEmail = (value) => {
        setEmail(value);
        setEmailError(false);
    }
    const handlePassword = (value) => {
        setPassword(value);

    }
    const checkErrors = () => {
        dispatch(userSignInApi({ body: { email: email, password: password }, params: "", options: "" }))
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
            setEmailErrorMessage("Please enter a valid email address.");
            return;
        } else if (errors.length > 0) {
            setError(true);
            setErrorMsg(errors[0].msg);
        }
        else {
            setError(false);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView>
                <View className="flex flex-col h-full justify-between bg-white text-black  pt-[8%]">
                    <View>
                        <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%]">Sign In</Text>

                        <Text className="px-[4%] py-1">Enter your Email Address</Text>

                        <TextInput
                            className="px-1 border  border-slate-300 bg-neutral-100 h-[14%] rounded-lg w-auto mx-[4%]"
                            placeholder=""
                            onChangeText={handleEmail}
                        />
                        {hasEmailError && <Text className="px-[4%] mt-[1%] py-1 text-red-500" >{emailErrorMessage}</Text>}

                        <Text className="px-[4%] mt-[3%] py-1">Enter Your Password</Text>
                        <TextInput
                            className="px-1 border border-slate-300 bg-neutral-100 h-[14%] rounded-lg w-auto mx-[4%]"
                            type='email'
                            placeholder=""
                            secureTextEntry={true}
                            onChangeText={handlePassword}
                        />
                        {haserror && <Text className="px-[4%] mt-[1%] py-1 text-red-500" >{ErrorMsg}</Text>}
                        <View>
                            <Pressable
                                onPress={() => {
                                    navigation.navigate("LookingToFind");
                                }}
                            >
                                <Text className="flex text-right mt-4 mr-4 text-sm text-[#F21464] ">Forgot Password?</Text>
                            </Pressable>
                        </View>
                        {/* <Text className="flex text-right mt-4 mr-4 text-sm text-[#F21464] ">Forgot Password?</Text> */}
                    </View>
                    <View>
                        <View className=" mt-16">
                            <GradientButton pVertical={`0%`}
                                // onPress={ ()=> {
                                //     dispatch(userSignInApi({ body: { email: email, password: password }, params: "", options: "" }))
                                // }}
                                onPress={checkErrors}
                                label="Sign In"
                                pVerticalBtn={`4%`}
                            />
                        </View>

                        <View className=" ">
                            <Pressable
                                onPress={() => {
                                    navigation.navigate("SignUp");
                                }}
                            >
                                <Text className=" flex text-center mt-4 mb-2 text-sm text-[#F21464]">Dont have and Account? Sign Up!</Text>
                            </Pressable>
                        </View>
                    </View>




                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>


    )
}

export default SignInScreen
