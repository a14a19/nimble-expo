import { SafeAreaView, StatusBar, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GradientButton from "../utils/GradientButton";
import { useEffect, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";

function VerifyNumber() {

    const navigation = useNavigation();

    const handlePress = () => {

    }

    const handleResend = () => {
        console.log("Resend otp here!")
    }

    return (
        <SafeAreaView>
            <View className="">
                <AntDesign name="left" size={24} color="black" onPress={() => navigation.navigate("Verification")} style={{ padding: 6 }} />
                <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%] mt-5">Enter your Number</Text>
                <Text className="flex text-left px-[4%] pb-[14%]">Enter the 4 digits code we’ve texted to +1234567890</Text>

                <GradientButton pVertical={`0%`} onPress={() => handlePress()} label={`Continue`} pVerticalBtn={`4%`} mTop={`25%`} />
                <CountdownTimer startDuration={60} handleClick={handleResend} />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

export default VerifyNumber