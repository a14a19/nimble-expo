import { Keyboard, SafeAreaView, StatusBar, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GradientButton from "../utils/GradientButton";
import { useEffect, useRef, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import InputDigits from "../components/InputDigits";

function VerifyNumber() {

    const navigation = useNavigation();
    const [otp, setOtp] = useState(0);
    const [inputs, setInputs] = useState({ input1: "", input2: "", input3: "", input4: "" })

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();

    const handleChangeInput = (e, input) => {
        e.preventDefault()
        console.log(input)

        if (input === "input2") {
            setInputs({ ...inputs, input1: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                input2.current.focus()
            }
        } else if (input === "input3") {
            setInputs({ ...inputs, input2: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                input3.current.focus()
            }
        } else if (input === "input4") {
            setInputs({ ...inputs, input3: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                input4.current.focus()
            }
        } else if (input === "input1") {
            setInputs({ ...inputs, input4: e.nativeEvent.text.trim() })
            if (e.nativeEvent.text.trim() !== "") {
                Keyboard.dismiss()
            }
        }

        console.log(e.nativeEvent.text, inputs)
    }

    const handlePress = () => {
        console.log(`${inputs.input1}${inputs.input2}${inputs.input3}${inputs.input4}`, otp)
        navigation.navigate("Passions")
    }

    const handleResend = () => {
        console.log("Resend otp here!")
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView >
                <View className="" >
                    <AntDesign name="left" size={24} color="black" onPress={() => navigation.navigate("Verification")} style={{ padding: 6 }} />
                    <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%] mt-5">Enter your Number</Text>
                    <Text className="flex text-left px-[4%] pb-[14%]">Enter the 4 digits code we’ve texted to +1234567890</Text>

                    <View className="flex flex-row w-1/2 justify-between mx-auto">
                        <TextInput className="w-8 h-10 border border-gray-400 rounded-lg pb-0.5 text-center text-2xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input1} onChange={(e) => handleChangeInput(e, "input2")} value={inputs.input1} />
                        <TextInput className="w-8 h-10 border border-gray-400 rounded-lg pb-0.5 text-center text-2xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input2} onChange={(e) => handleChangeInput(e, "input3")} value={inputs.input2} />
                        <TextInput className="w-8 h-10 border border-gray-400 rounded-lg pb-0.5 text-center text-2xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input3} onChange={(e) => handleChangeInput(e, "input4")} value={inputs.input3} />
                        <TextInput className="w-8 h-10 border border-gray-400 rounded-lg pb-0.5 text-center text-2xl" caretHidden={false} keyboardType="numeric" maxLength={1} ref={input4} onChange={(e) => handleChangeInput(e, "input1")} value={inputs.input4} />
                    </View>

                    <InputDigits outPut={setOtp} />

                    <GradientButton pVertical={`0%`} onPress={() => handlePress()} label={`Continue`} pVerticalBtn={`4%`} mTop={`25%`} />
                    <CountdownTimer startDuration={60} handleClick={handleResend} />
                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default VerifyNumber