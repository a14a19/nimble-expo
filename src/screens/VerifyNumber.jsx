import { Keyboard, SafeAreaView, StatusBar, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GradientButton from "../utils/GradientButton";
import { useEffect, useRef, useState } from "react";

import CountdownTimer from "../components/CountdownTimer";

export default function VerifyNumber() {

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
        // console.log(`${inputs.input1}${inputs.input2}${inputs.input3}${inputs.input4}`, otp)
        setErr({ state: false, message: "" })
        if (inputs.input1 && inputs.input2 && inputs.input3 && inputs.input4) {
            navigation.navigate("Passions")
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
                        <Text className="flex text-left font-bold text-3xl pl-[4%] pb-[3%] mt-5">Enter your Number</Text>
                        <Text className="flex text-left px-[4%] text-base">Enter the 4 digits code we’ve texted to +1234567890</Text>
                    </View>

                    <View className="flex flex-row w-1/2 justify-between mx-auto">
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input1} onChange={(e) => handleChangeInput(e, "input2")} value={inputs.input1} />
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input2} onChange={(e) => handleChangeInput(e, "input3")} value={inputs.input2} />
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input3} onChange={(e) => handleChangeInput(e, "input4")} value={inputs.input3} />
                        <TextInput className="w-10 h-12 border border-gray-400 rounded-lg pb-0.5 text-center text-3xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input4} onChange={(e) => handleChangeInput(e, "input1")} value={inputs.input4} />
                    </View>

                    {/* Empty view  */}
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

