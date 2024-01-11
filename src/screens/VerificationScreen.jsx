import { Text, View, TextInput, SafeAreaView, Pressable } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native-web';
import { useState } from 'react';
import GradientButton from '../utils/GradientButton';
import { AntDesign } from '@expo/vector-icons';

export default function VerificationScreen() {

    const navigation = useNavigation();
    const [countryCode, setCountryCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [hasError, setHasError] = useState(false);

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
            navigation.navigate("Home");
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
    ];

    return (
        <SafeAreaView>
            <View className="flex justify-items-start bg-white text-black h-screen pt-[8%]">
                <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%]">Enter your Number</Text>
                <Text className="flex text-left px-[4%] pb-[14%]">We will need to verify your identify to ensure the safety of our users</Text>
                <View className="flex flex-row justify-start px-[4%] pb-[2%] w-[100%]">
                    <View className="flex flex-row justify-between w-[100%]">
                        <SelectList 
                            boxStyles={{ borderRadius: "8%", border: "0.4px solid var(--gray, #BBBBD1)", background: "#F6F6F6" }}
                            placeholder={"CC"}
                            search={false}
                            setSelected={changeCountryCode} 
                            data={[...options.map(item => item.label)]}
                            save="value"
                        />
                        <TextInput className="w-[68%] h-[46px] px-4 bg-[white] rounded-lg border-[0.8px] border-[black]" onChangeText={changePhoneNumber} value={phoneNumber} placeholder="Phone number" keyboardType="numeric" />
                    </View>
                </View>
                {hasError && <Text className="flex text-left px-[4%] text-red-700">Please enter all the fields!</Text>}
                <GradientButton onPress={checkErrors} label="Verify" />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

