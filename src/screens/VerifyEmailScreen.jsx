import { SafeAreaView, View, Keyboard, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { useEffect, useRef, useState } from "react";
import GradientButton from "../utils/GradientButton";
import { useNavigation } from '@react-navigation/native';
import CountdownTimer from "../components/CountdownTimer";


function VerifyEmailScreen() {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(0);
    const [triggerTimer, setTriggerTimer] = useState(false);
    const [inputs, setInputs] = useState({ input1: "", input2: "", input3: "", input4: "" })
    // can use error handles as well
    const [err, setErr] = useState({ state: false, message: "" })
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const handlePress = () => {
        // console.log(`${inputs.input1}${inputs.input2}${inputs.input3}${inputs.input4}`, otp)
        setErr({ state: false, message: "" })
        if (inputs.input1 && inputs.input2 && inputs.input3 && inputs.input4) {
            navigation.navigate("ChangePassword")
        } else {
            setErr({ state: true, message: "Please enter OTP" })
        }
    }
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
    const handleResend = () => {
        // console.log("Resend otp here!")
        setTriggerTimer(preVal => !preVal)
    }
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
        >
            <SafeAreaView>
                <View className="flex flex-col h-full justify-between pt-[8%] px-[4%] bg-white">
                    <View>
                        <Text className="flex text-left font-bold text-3xl pb-[6%]" style={{ fontFamily: "mont-semibold" }}>Verify Your Email here</Text>
                        <Text className="py-[1%]" style={{ fontFamily: "mont-med" }}>Enter the 4 digit Otp sent to your email for verification.</Text>
                    </View>
                    <View className="flex flex-row w-1/2 justify-between mx-auto">
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input1} onChange={(e) => handleChangeInput(e, "input2")} value={inputs.input1} />
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input2} onChange={(e) => handleChangeInput(e, "input3")} value={inputs.input2} />
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input3} onChange={(e) => handleChangeInput(e, "input4")} value={inputs.input3} />
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input4} onChange={(e) => handleChangeInput(e, "input1")} value={inputs.input4} />
                    </View>
                    <View></View>
                    <View className="mb-8">
                        {inputs.input1 && inputs.input2 && inputs.input3 && inputs.input4 && <GradientButton pVertical={`0%`} onPress={() => handlePress()} label={`Continue`} pVerticalBtn={`4%`} mTop={`5%`} />}
                        <CountdownTimer startDuration={60} handleClick={handleResend} triggerTimer={triggerTimer} />
                    </View>
                
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )

}
export default VerifyEmailScreen;