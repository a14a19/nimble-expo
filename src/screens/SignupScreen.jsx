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

import { useNavigation } from "@react-navigation/native"

import DateTimePicker from "@react-native-community/datetimepicker"
import { StatusBar } from "expo-status-bar"
import GradientButton from "../utils/GradientButton"

const SignupScreen = () => {

  const navigation = useNavigation();

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")

  const [location, setLocation] = useState(false)

  const [date, setDate] = useState(new Date())

  const [showDatePicker, setShowDatePicker] = useState(false)

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate
      setDate(currentDate)
      if (Platform.OS === "android") {
        toggleDatePicker()
        setDateOfBirth(currentDate.toDateString())
      }
    } else {
      toggleDatePicker()
    }
  }

  const toggleSwitch = () => {
    setLocation(!location)
  }
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  }

  const confirmIOSDate = () => {
    setDateOfBirth(date.toDateString())
    toggleDatePicker()
  }

  const onSubmit = () => {
    console.log(fullName, email, dateOfBirth)
    navigation.navigate("Verification")
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView className="bg-white h-full p-0">
          <View
            className="px-4 py-4 flex gap-2 bg-white"
            style={{ width: Dimensions.get("window").width }}
          >
            <Text className="font-bold text-3xl py-6">Create an account</Text>

            <View className="flex gap-1">
              <Text className="font-medium">Enter full name</Text>
              <TextInput
                onChangeText={setFullName}
                value={fullName}
                placeholder="e.g John Reese"
                keyboardType="default"
                className="bg-neutral-100 px-3 h-10 border border-neutral-300 rounded-md"
              />
            </View>

            <View className="flex gap-1">
              <Text className="font-medium">Enter your email address</Text>
              <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="e.g johnr@example.com"
                keyboardType="default"
                className="bg-neutral-100 px-3 h-10 border border-neutral-300 rounded-md"
              />
            </View>

            <View className="flex gap-1">
              <Text className="font-medium">Enter date of birth</Text>
              {showDatePicker && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={onChange}
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
                  <TouchableOpacity
                    onPress={toggleDatePicker}
                    className="p-2 bg-gray-400"
                  >
                    <Text className="text-gray-700 font-medium text-sm text-center">
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={confirmIOSDate}
                    className="p-2 bg-gray-400"
                  >
                    <Text className="text-fuchsia-700 font-medium text-sm text-center">
                      Confirm
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              {!showDatePicker && (
                <Pressable onPress={toggleDatePicker}>
                  <TextInput
                    value={dateOfBirth}
                    placeholder="Tue Oct 10 2000"
                    onChangeText={setDateOfBirth}
                    className="bg-neutral-100 h-10 border border-gray-300 rounded-lg px-3 text-black font-medium"
                    editable={false}
                    onPressIn={toggleDatePicker}
                  />
                </Pressable>
              )}
            </View>

            <View className="flex items-center justify-between pl-2 flex-row">
              <Text className="font-medium">Turn on location service</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#767577" }}
                thumbColor={location ? "#fd6ee9" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={location}
              />
            </View>

            <Pressable onPress={onSubmit}>
              <GradientButton label="Create Account" />
            </Pressable>

            <Text className="text-rose-800 font-medium text-center pt-3" onPress={() => navigation.navigate("SignIn")}>
              Have an Account? Sign In
            </Text>
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignupScreen
