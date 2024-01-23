import { TouchableWithoutFeedback, Pressable, Keyboard, TextInput, SafeAreaView, Text, View } from "react-native";
import GradientButton from "../utils/GradientButton"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { passwordChangeAPI } from '../features/auth/authSlice';



function ChangePasswordScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const { valid } = useSelector((store) => store.auth)
    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    const [hasError, setError] = useState(false);
    const [errormsg, setErrorMessage] = useState("");
    
    const handlePassword = (value) => {
        setPassword(value);
    };
    const handleCnfPassword = (value) => {
        setCnfPassword(value);
    };
    useEffect(()=> {
        if(valid == true){
            navigation.navigate("SignIn");
        } else{
            setError(false);
            setErrorMessage(" message ");
        }
    },[valid]);
    const handleSubmit = () => {
        dispatch(passwordChangeAPI({ body: { password: password, cnfPassword: cnfPassword }, params: {id: "65a78a7ebe5805e5be7652ad"}, options: "" }))
    };

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
        >
            <SafeAreaView>
                <View className="flex flex-col h-full justify-between pt-[8%] px-[4%] bg-white">
                    <View>
                        <Text className="flex text-left font-bold text-3xl pb-[6%]" style={{ fontFamily: "mont-semibold" }}>Change Password</Text>
                        <Text className="py-[1%]" style={{ fontFamily: "mont-med" }}>Enter a new Password</Text>
                        <TextInput
                            className="px-1 border mt-[%] border-slate-300 bg-neutral-100 h-[15%] rounded-lg w-auto "
                            placeholder=""
                            onChangeText={handlePassword}

                        />
                        <Text className="py-[1%]" style={{ fontFamily: "mont-med" }}>Confirm Password</Text>
                        <TextInput
                            className="px-1 border mt-[%] border-slate-300 bg-neutral-100 h-[15%] rounded-lg w-auto "
                            placeholder=""
                            onChangeText={handleCnfPassword}

                        />
                        <View>
                            <Pressable
                                onPress={() => {
                                    navigation.navigate("SignIn");
                                }}
                            >
                                <Text className="flex text-right mt-4 mr-4 text-sm text-[#F21464] ">Temp Routing?</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <View className="mb-[3%]">
                            <GradientButton pVertical={`0%`}
                                onPress={handleSubmit}

                                label="Continue"
                                pVerticalBtn={`5%`}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default ChangePasswordScreen;