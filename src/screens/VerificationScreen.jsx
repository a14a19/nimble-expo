import { Text, View, TextInput, SafeAreaView, Pressable, TouchableWithoutFeedback } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native-web';
import { useState, useRef } from 'react';
import GradientButton from '../utils/GradientButton';
import { AntDesign } from '@expo/vector-icons';

export default function VerificationScreen() {

    const navigation = useNavigation();
    const [countryCode, setCountryCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [hasError, setHasError] = useState(false);
    const pickerRef = useRef(null);

    const changePhoneNumber = (value) => {
        setPhoneNumber(value);
    }

    const changeCountryCode = (value) => {
        setCountryCode(value);
    }

    const checkErrors = () => {
        if (countryCode.length === 0) {
            setHasError(true);
            return;
        }
        else if (phoneNumber.length !== 10) {
            setHasError(true);
            return;
        }
        else {
            setHasError(false);
            navigation.navigate("VerifyNumber");
        }
    }

    const placeholder = {
        label: 'CC',
        value: "",
    };

    const options = [
        { label: "IN +91", value: '+91' },
        { label: "US +1", value: '+1' },
        { label: "CA +7", value: '+7' },
        { label: "UAE +231", value: '231'},
    ];

    const openDrawer = () => {
        if (pickerRef && pickerRef.current) {
            pickerRef.current.togglePicker();
        }
    }

    return (
        <SafeAreaView>
            <View className="flex justify-items-start bg-white text-black h-screen pt-[8%]">
                <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%]">Enter your Number</Text>
                <Text className="flex text-left px-[4%] pb-[14%]">We will need to verify your identify to ensure the safety of our users</Text>
                <View className="flex flex-row justify-start px-[4%] pb-[2%]">
                    <View className="flex flex-row justify-between">
                        <TouchableWithoutFeedback onPress={openDrawer}>
                            <View className="flex flex-row justify-center w-[24%] px-4 py-4 bg-neutral-100 rounded-lg border border-slate-300 text-black text-center">
                                <RNPickerSelect
                                    placeholder={placeholder}
                                    items={options}
                                    onValueChange={changeCountryCode}
                                    value={countryCode}
                                    ref={pickerRef}
                                />
                                <View className="pl-2" >
                                    <AntDesign name="down" size={20} color="#BBBBD1" />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TextInput className="w-[72%] h-[100%] px-4 bg-neutral-100 rounded-lg border border-slate-300" onChangeText={changePhoneNumber} value={phoneNumber} placeholder="Phone number" keyboardType="numeric" />
                    </View>
                </View>
                {hasError && <Text className="flex text-left px-[6%] text-red-700">Please enter all the fields!</Text>}
                <GradientButton pVertical={`0`} onPress={checkErrors} label="Verify" />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

