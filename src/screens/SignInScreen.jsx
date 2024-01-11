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
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleEmail = (value) => {
    setEmail(value)
  }
  const handleName = (value) => {
    setName(value)
  }

  return (
    <SafeAreaView>
      <View className="flex justify-items-start bg-white text-black h-screen pt-[8%]">
        <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%]">
          Sign In
        </Text>

        <Text className="px-[4%] py-1">Enter your Full Name</Text>

        <TextInput
          className="border focus:border-green-400 border-slate-300 bg-neutral-100 h-[6%] rounded-lg w-auto mx-[4%]"
          placeholder=""
          onChangeText={handleName}
        />
        <Text className="px-[4%] mt-[3%] py-1">Enter Your Email Address</Text>

        <TextInput
          className="border border-slate-300 bg-neutral-100 h-[6%] rounded-lg w-auto mx-[4%]"
          type="email"
          placeholder=""
          onChangeText={handleEmail}
        />

        <Text className="flex text-right mt-4 mr-4 text-sm text-[#F21464] ">
          Forgot Password?
        </Text>

        <View className=" mt-16">
          <GradientButton
            onPress={() => {
              navigation.navigate("Verification")
            }}
            label="Sign In"
          />
        </View>

        <View className="flex flex-row justify-center items-center mt-4 text-center  text-sm">
          <Text className=" text-[#F21464]">Don't have and Account? </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("SignUp")
            }}
          >
            <Text className=" text-[#F21464] underline">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default SignInScreen
