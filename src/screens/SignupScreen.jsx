import {
  View,
  Text,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  Platform,
  TouchableOpacity,
  Switch,
} from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

import DateTimePicker from "@react-native-community/datetimepicker"
import GradientButton from "../utils/GradientButton"
import { useNavigation } from "@react-navigation/native"
import HollowButton from "../utils/HollowButton"
import CustomInput from "../components/CustomInput"
import { useForm } from "react-hook-form"
import { AntDesign } from "@expo/vector-icons"
import { CountryPicker, CountryButton } from "react-native-country-codes-picker"

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const PHONE_REGEX = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

function ListHeaderComponent({ countries, lang, onPress }) {
  return (
    <View style={{ paddingBottom: 20 }}>
      <Text>Popular countries</Text>
      {countries?.map((country, index) => {
        return (
          <CountryButton
            key={index}
            item={country}
            name={country?.name?.[lang || "en"]}
            onPress={() => onPress(country)}
          />
        )
      })}
    </View>
  )
}

const SignupScreen = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm()
  const pwd = watch("password")

  const [showCountryCodePicker, setShowCountryCodePicker] = useState(false)
  const [countryCode, setCountryCode] = useState("+91")

  // const [dateOfBirth, setDateOfBirth] = useState("")

  // const [location, setLocation] = useState(false)

  // const [date, setDate] = useState(new Date())

  // const [showDatePicker, setShowDatePicker] = useState(false)

  // const onChange = ({ type }, selectedDate) => {
  //   if (type == "set") {
  //     const currentDate = selectedDate
  //     setDate(currentDate)
  //     if (Platform.OS === "android") {
  //       toggleDatePicker()
  //       setDateOfBirth(currentDate.toDateString())
  //     }
  //   } else {
  //     toggleDatePicker()
  //   }
  // }

  // const toggleSwitch = () => {
  //   setLocation(!location)
  // }
  // const toggleDatePicker = () => {
  //   setShowDatePicker(!showDatePicker)
  // }

  // const confirmIOSDate = () => {
  //   setDateOfBirth(date.toDateString())
  //   toggleDatePicker()
  // }

  // const onSubmit = () => {
  //   console.log(fullName, email, dateOfBirth)
  //   navigation.navigate("VerifyNumber")
  // }

  const onRegisterPressed = async (data) => {
    console.log(username, password, email)
    const { username, password, email } = data
    navigation.navigate("VerifyNumber")
  }

  return (
    <SafeAreaView
      className="bg-white"
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="px-4 py-4 flex gap-2 bg-white">
            <Text
              className="font-bold text-3xl py-6"
              style={{ fontFamily: "mont-semibold" }}
            >
              Create an account
            </Text>

            <View className="flex gap-1">
              <Text className="font-medium" style={{ fontFamily: "mont-med" }}>
                Enter full name
              </Text>
              <CustomInput
                name="username"
                control={control}
                placeholder="eg. John Reese"
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "username should be at least 3 characters long",
                  },
                  maxLength: {
                    value: 24,
                    message: "username should be max 24 characters long",
                  },
                }}
              />
            </View>

            <View className="flex gap-1">
              <Text className="font-medium" style={{ fontFamily: "mont-med" }}>
                Enter your email address
              </Text>

              <CustomInput
                name="email"
                control={control}
                placeholder="eg. johnreese@example.com"
                rules={{
                  required: "Email is required",
                  pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
                }}
              />
            </View>

            <View className="flex gap-1">
              <Text className="font-medium" style={{ fontFamily: "mont-med" }}>
                Enter your phone number
              </Text>

              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row justify-center w-14 px-1 h-10 bg-neutral-100 rounded-md border border-slate-300 text-black text-center">
                  <TouchableOpacity
                    onPress={() => setShow(true)}
                    className="flex flex-row items-center justify-between w-full"
                  >
                    <Text>{countryCode}</Text>
                    <AntDesign name="down" size={20} color="#BBBBD1" />
                  </TouchableOpacity>
                  <CountryPicker
                    show={showCountryCodePicker}
                    pickerButtonOnPress={(item) => {
                      setCountryCode(item.dial_code)
                      setShowCountryCodePicker(false)
                    }}
                    ListHeaderComponent={ListHeaderComponent}
                    popularCountries={["in", "us"]}
                    onBackdropPress={() => setShowCountryCodePicker(false)}
                    style={{
                      modal: {
                        height: 400,
                      },
                    }}
                  />
                </View>
                <View className="w-4/5">
                  <CustomInput
                    name="phone"
                    control={control}
                    placeholder="eg.123456789"
                    keyboardType="numeric"
                    rules={{
                      required: "Phone number is required",
                      pattern: {
                        value: PHONE_REGEX,
                        message: "Phone number is invalid",
                      },
                    }}
                  />
                </View>
              </View>
            </View>

            <View className="flex gap-1">
              <Text className="font-medium" style={{ fontFamily: "mont-med" }}>
                Enter your Password
              </Text>

              <CustomInput
                name="password"
                control={control}
                placeholder="Password"
                secureTextEntry
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password should be at least 8 characters long",
                  },
                }}
              />
            </View>

            <View className="flex gap-1">
              <Text className="font-medium" style={{ fontFamily: "mont-med" }}>
                Renter your Password
              </Text>

              <CustomInput
                name="password-repeat"
                control={control}
                placeholder="Repeat Password"
                secureTextEntry
                rules={{
                  validate: (value) => value === pwd || "Password do not match",
                }}
              />
            </View>

            <Pressable onPress={handleSubmit(onRegisterPressed)}>
              <GradientButton
                pVertical={`4%`}
                label="Create Account"
                pVerticalBtn={`2%`}
                mTop={`0%`}
              />
            </Pressable>

            <Text
              onPress={() => navigation.navigate("SignIn")}
              className="text-rose-600 font-medium text-center pt-3"
              style={{ fontFamily: "mont-med" }}
            >
              Have an Account? Sign In
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignupScreen
