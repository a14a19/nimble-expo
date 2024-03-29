import { Keyboard, SafeAreaView, StatusBar, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GradientButton from "../utils/GradientButton";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CountdownTimer from "../components/CountdownTimer";
import { userVerifyingOtpAPI } from "../features/auth/authSlice";

export default function VerifyNumber() {

    const dispatch = useDispatch()
    const { name } = useSelector((store) => store.form)
    const navigation = useNavigation();
    const prevScreen = navigation.getState()?.routes;
    const prev = prevScreen[prevScreen.length - 2]?.name;
    const [otp, setOtp] = useState(0);
    const [triggerTimer, setTriggerTimer] = useState(false);
    const [inputs, setInputs] = useState({ input1: "", input2: "", input3: "", input4: "" })
    // can use error handles as well
    const [err, setErr] = useState({ state: false, message: "" })

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();

    useEffect(() => {
        setTriggerTimer(preVal => !preVal)
    }, [])

    const handleChangeInput = (e, input) => {
        e.preventDefault()
        // console.log(input)
        setErr({ state: false, message: "" })

        if (input === "input2") {
            setInputs({ ...inputs, input1: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                input2.current.focus()
            } else {
                // input1.current.focus()
            }
        } else if (input === "input3") {
            setInputs({ ...inputs, input2: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                input3.current.focus()
            } else {
                input1.current.focus()
            }
        } else if (input === "input4") {
            setInputs({ ...inputs, input3: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                input4.current.focus()
            } else {
                input2.current.focus()
            }
        } else if (input === "input1") {
            setInputs({ ...inputs, input4: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                Keyboard.dismiss()
            } else {
                input3.current.focus()
            }
        }

        // console.log(e.nativeEvent.text, inputs)
    }

    const handlePress = () => {
        // console.log(`${inputs.input1}${inputs.input2}${inputs.input3}${inputs.input4}`, otp, prevScreen[prevScreen.length - 2])
        setErr({ state: false, message: "" })
        if (inputs.input1 && inputs.input2 && inputs.input3 && inputs.input4) {
            navigation.navigate("Passions")
            dispatch(userVerifyingOtpAPI({ body: { otp: Number(`${inputs.input1}${inputs.input2}${inputs.input3}${inputs.input4}`), token: "", prevScreen: prevScreen[prevScreen.length - 2]?.name }, params: { id: "65aa8fb1f561b5078bde1fe0" }, options: "" }))

        } else {
            setErr({ state: true, message: "Please enter OTP" })
        }
    }
    const handlePressTwo = () => {
        // console.log(`${inputs.input1}${inputs.input2}${inputs.input3}${inputs.input4}`, otp, prevScreen[prevScreen.length - 2])
        setErr({ state: false, message: "" })
        if (inputs.input1 && inputs.input2 && inputs.input3 && inputs.input4) {
            navigation.navigate("ChangePassword")
            dispatch(userVerifyingOtpAPI({ body: { otp: Number(`${inputs.input1}${inputs.input2}${inputs.input3}${inputs.input4}`), token: "", prevScreen: prevScreen[prevScreen.length - 2]?.name }, params: { id: "65aa8fb1f561b5078bde1fe0" }, options: "" }))

        } else {
            setErr({ state: true, message: "Please enter OTP" })
        }
    }

    const handleResend = () => {
        // console.log("Resend otp here!")
        setTriggerTimer(preVal => !preVal)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView >
                <View className="flex flex-col h-full justify-between" >
                    <View>
                        <AntDesign name="left" size={24} color="black" onPress={() => navigation.navigate("Verification")} style={{ paddingTop: 10, paddingLeft: 10 }} />
                        <Text className="flex text-left text-3xl pl-[4%] pb-[3%] mt-5" style={{ fontFamily: "mont-semibold" }}>
                            {prev === "Verification" ? "Verify your Email" : "Verify your Account"}
                        </Text>
                        <Text className="flex text-left px-[4%] text-base" style={{ fontFamily: "mont-med" }}>Enter the 4 digits code that we’ve sent to your given email.</Text>
                    </View>

                    <View className="flex flex-row w-1/2 justify-between mx-auto">
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" style={{ fontFamily: "mont-semibold" }} caretHidden={false} keyboardType="numeric" maxLength={1} ref={input1} onChange={(e) => handleChangeInput(e, "input2")} value={inputs.input1} />
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" style={{ fontFamily: "mont-semibold" }} caretHidden={false} keyboardType="numeric" maxLength={1} ref={input2} onChange={(e) => handleChangeInput(e, "input3")} value={inputs.input2} />
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" style={{ fontFamily: "mont-semibold" }} caretHidden={false} keyboardType="numeric" maxLength={1} ref={input3} onChange={(e) => handleChangeInput(e, "input4")} value={inputs.input3} />
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" style={{ fontFamily: "mont-semibold" }} caretHidden={false} keyboardType="numeric" maxLength={1} ref={input4} onChange={(e) => handleChangeInput(e, "input1")} value={inputs.input4} />
                    </View>

                    {/* Empty view  */}
                    <View></View>

                    {prev === "Verification" ?
                        <View className="mb-8">
                            {inputs.input1 && inputs.input2 && inputs.input3 && inputs.input4 && <GradientButton pVertical={`0%`} onPress={() => handlePressTwo()} label={`Continue`} pVerticalBtn={`4%`} mTop={`5%`} />}
                            <CountdownTimer startDuration={60} handleClick={handleResend} triggerTimer={triggerTimer} />
                        </View> :
                        <View className="mb-8">
                            {inputs.input1 && inputs.input2 && inputs.input3 && inputs.input4 && <GradientButton pVertical={`0%`} onPress={() => handlePress()} label={`Continue`} pVerticalBtn={`4%`} mTop={`5%`} />}
                            <CountdownTimer startDuration={60} handleClick={handleResend} triggerTimer={triggerTimer} />
                        </View>
                    }
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

