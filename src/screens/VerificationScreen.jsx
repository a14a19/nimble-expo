import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native"
import RNPickerSelect from "react-native-picker-select"
import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "react-native-web"
import { useState, useRef } from "react"
import GradientButton from "../utils/GradientButton"
import { AntDesign } from "@expo/vector-icons"
import { CountryButton, CountryPicker } from "react-native-country-codes-picker"

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

export default function VerificationScreen() {
  const navigation = useNavigation()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [hasError, setHasError] = useState(false)

  const [show, setShow] = useState(false)
  const [countryCode, setCountryCode] = useState("+91")

  const changePhoneNumber = (value) => {
    setPhoneNumber(value)
  }

  const checkErrors = () => {
    if (countryCode.length === 0) {
      setHasError(true)
      return
    } else if (phoneNumber.length !== 10) {
      setHasError(true)
      return
    } else {
      setHasError(false)
      navigation.navigate("VerifyNumber")
    }
  }

  return (
    <SafeAreaView>
      <View className="flex justify-items-start bg-white text-black h-screen pt-[8%]">
        <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%]">
          Enter your Number
        </Text>
        <Text className="flex text-left px-[4%] pb-[14%]">
          We will need to verify your identify to ensure the safety of our users
        </Text>
        <View className="flex flex-row justify-start px-[4%] pb-[2%]">
          <View className="flex flex-row justify-between">
            <View className="flex flex-row justify-center w-[24%] px-4 py-4 bg-neutral-100 rounded-lg border border-slate-300 text-black text-center">
              <TouchableOpacity
                onPress={() => setShow(true)}
                className="flex flex-row items-center justify-between w-full"
              >
                <Text>{countryCode}</Text>
                <AntDesign name="down" size={20} color="#BBBBD1" />
              </TouchableOpacity>
              <CountryPicker
                show={show}
                pickerButtonOnPress={(item) => {
                  setCountryCode(item.dial_code)
                  setShow(false)
                }}
                ListHeaderComponent={ListHeaderComponent}
                popularCountries={["in", "us"]}
                onBackdropPress={() => setShow(false)}
                style={{
                  modal: {
                    height: 400,
                  },
                }}
              />
            </View>
            <TextInput
              className="w-[72%] h-[100%] px-4 bg-neutral-100 rounded-lg border border-slate-300"
              onChangeText={changePhoneNumber}
              value={phoneNumber}
              placeholder="Phone number"
              keyboardType="numeric"
            />
          </View>
        </View>
        {hasError && (
          <Text className="flex text-left px-[6%] text-red-700">
            Please enter all the fields!
          </Text>
        )}
        <GradientButton
          pVertical={`0%`}
          onPress={checkErrors}
          label="Verify"
          pVerticalBtn={`4%`}
          mTop={`20%`}
        />
      </View>
    </SafeAreaView>
  )
}
