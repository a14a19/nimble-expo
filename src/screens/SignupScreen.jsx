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
import { Controller, useForm } from "react-hook-form"
import { AntDesign } from "@expo/vector-icons"
import { CountryPicker, CountryButton } from "react-native-country-codes-picker"
import { userSignUp } from "../services/api"
import { useDispatch } from "react-redux"
import { handleRegister } from "../features/auth/registerSlice"

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

  // const [location, setLocation] = useState(false)

  // ---------- Date Of Birth Functionality -----------------

  const [dateOfBirth, setDateOfBirth] = useState("")

  const [date, setDate] = useState(new Date())

  const [showDatePicker, setShowDatePicker] = useState(false)

  const [invalidAge, setInvalidAge] = useState(false)
  const [invalidAgeError, setInvalidAgeError] = useState("")

  const calculateAge = (dateOfBirth) => {
    const currentDate = new Date()
    const birthDate = new Date(dateOfBirth)

    let age = currentDate.getFullYear() - birthDate.getFullYear()

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      age--
    }

    return age
  }

  const onChangeDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate
      setDate(currentDate)
      const age = calculateAge(currentDate)
      if (age < 18 || age > 40) setInvalidAge(true)
      age < 18
        ? setInvalidAgeError("Invalid Age : Too Young")
        : age > 40
        ? setInvalidAgeError("Invalid Age : Too Old")
        : setInvalidAgeError("")
      if (Platform.OS === "android") {
        toggleDatePicker()
        setDateOfBirth(currentDate.toISOString().split("T")[0])
      }
    } else {
      toggleDatePicker()
    }
  }

  // const toggleSwitch = () => {
  //   setLocation(!location)
  // }
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  }

  const confirmIOSDate = () => {
    setDateOfBirth(date.toDateString())
    toggleDatePicker()
  }

  const dispatch = useDispatch()
  // ----------------------------------------------------------

  const onRegisterPressed = async (data) => {
    const { fullname, password, email, phone } = data

    //  validate the DOB here

    const formData = {
      currentScreen: "SignUp",
      fullName: fullname,
      email: email,
      number: phone,
      dob: dateOfBirth,
      password: password,
    }

    if (!invalidAge) {
      console.log("registering user:")
      const data = userSignUp(formData)
      dispatch(
        handleRegister({
          _fullname: data.fullName,
          _email: data.email,
          _token: data.token,
        })
      )
    }

    // if (!invalidAge) console.log(fullname, email, password, dateOfBirth, phone)
  }

  return (
    <SafeAreaView
      className="bg-white"
      style={{
        width: Dimensions.get("window").width,
        // height: Dimensions.get("window").height,
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
            {/* Full Name */}
            <View className="flex gap-1">
              <Text className="font-medium" style={{ fontFamily: "mont-med" }}>
                Enter full name
              </Text>
              <CustomInput
                name="fullname"
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
            {/* Email Address */}
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
            {/* Phone Number */}
            <View className="flex gap-1">
              <Text className="font-medium" style={{ fontFamily: "mont-med" }}>
                Enter your phone number
              </Text>

              <Controller
                control={control}
                name="phone"
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: PHONE_REGEX,
                    message: "Phone number is invalid",
                  },
                }}
                render={({
                  field: { value, onChange, onBlur },
                  fieldState: { error },
                }) => (
                  <>
                    <View className="flex flex-row items-center justify-between">
                      <View className="flex flex-row justify-center w-14 px-1 h-10 bg-neutral-100 rounded-md border border-slate-300 text-black text-center">
                        <TouchableOpacity
                          onPress={() => setShowCountryCodePicker(true)}
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
                          onBackdropPress={() =>
                            setShowCountryCodePicker(false)
                          }
                          style={{
                            modal: {
                              height: 400,
                            },
                          }}
                        />
                      </View>
                      <View className="w-4/5">
                        <View className="w-full my-1">
                          <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder="eg. 1234567890"
                            autoComplete="off"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="numeric"
                            className={`px-3 border border-slate-300 bg-neutral-100 rounded-md h-10 w-full ${
                              error && "border-red-500"
                            }`}
                          />
                        </View>
                      </View>
                    </View>
                    {error && (
                      <Text style={{ color: "red", alignSelf: "stretch" }}>
                        {error.message || "Error"}
                      </Text>
                    )}
                  </>
                )}
              />

              {/* <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row justify-center w-14 px-1 h-10 bg-neutral-100 rounded-md border border-slate-300 text-black text-center">
                  <TouchableOpacity
                    onPress={() => setShowCountryCodePicker(true)}
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
              </View> */}
            </View>
            {/* Date of birth Picker */}
            <View className="flex gap-1">
              <Text className="font-medium" style={{ fontFamily: "mont-med" }}>
                Enter date of birth
              </Text>
              {showDatePicker && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={onChangeDate}
                  style={{
                    height: 120,
                    marginTop: -10,
                  }}
                  maximumDate={new Date()}
                  minimumDate={new Date("1990-1-1")}
                />
              )}
              {showDatePicker && Platform.OS === "ios" && (
                <View className="flex justify-around flex-row">
                  <TouchableOpacity onPress={toggleDatePicker} className="p-2">
                    <HollowButton
                      onPress={() => {
                        // navigation.navigate("SignIn");
                      }}
                      label="Cancel"
                      mTop={`0%`}
                      pVertical={`0%`}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={confirmIOSDate} className="p-2">
                    <GradientButton
                      pVertical={`0%`}
                      pVerticalBtn={`2%`}
                      onPress={() => {
                        // navigation.navigate("SignUp");
                      }}
                      label="Confirm"
                      mTop={`0%`}
                    />
                  </TouchableOpacity>
                </View>
              )}
              {!showDatePicker && (
                <Pressable onPress={toggleDatePicker}>
                  <TextInput
                    value={dateOfBirth}
                    placeholder="2000-10-10"
                    onChangeText={setDateOfBirth}
                    className={`px-3 border border-slate-300 bg-neutral-100 rounded-md h-10 w-full`}
                    editable={false}
                    onPress={toggleDatePicker}
                  />
                </Pressable>
              )}
              {invalidAge && (
                <Text style={{ color: "red", alignSelf: "stretch" }}>
                  {invalidAgeError}
                </Text>
              )}
            </View>

            {/* Password */}
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
            {/* Confirm password */}
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
