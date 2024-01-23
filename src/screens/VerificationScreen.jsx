import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  Keyboard,
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
  const prevScreen = navigation.getState()?.routes;
  const prev = prevScreen[prevScreen.length - 2]?.name;
  const [phoneNumber, setPhoneNumber] = useState("")
  const [hasError, setHasError] = useState(false)
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false)
  const [countryCode, setCountryCode] = useState("+91")
  const [errorMessage, setErrorMessage] = useState("");

  const changePhoneNumber = (value) => {
    setPhoneNumber(value)
  }
  const handleEmail = (value) => {
    setEmail(value);
    
  }

  const checkErrors = () => {
    if (countryCode.length === 0) {
      setHasError(true)
      setErrorMessage("Please enter Valid Data.");
      return
    } else if (phoneNumber.length !== 10) {
      setHasError(true)
      setErrorMessage("Please enter Valid Data.");
      return
    } else {
      setHasError(false)
      navigation.navigate("VerifyNumber")
    }
  }

  const checkEmailErrors = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setHasError(true);
      setErrorMessage("Please enter a valid email address.");
    } else{
      setHasError(false);
      navigation.navigate("VerifyNumber")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView>
        <View className="flex flex-col justify-between bg-white text-black h-full pt-[8%]">
          <View className="flex text-left">
            <Text className="flex text-left font-bold text-2xl pl-[4%] pb-[6%]">
              {prev === "SignUp" ? "Enter your Number" : "Enter your Email"}
            </Text>
            <Text className="flex text-left px-[4%] pb-[6%]">
              We will need to verify your identify to ensure the safety of our users
            </Text>
            {prev === "SignUp" ?
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
              :
              <TextInput
                className="flex  text-left px-1 border border-slate-300 bg-neutral-100 h-[20%] rounded-lg mx-[4%] "
                placeholder="example@mail.com"
                onChangeText={handleEmail}
              />}

            {hasError && <Text className="px-[4%] mt-[1%] py-1 text-red-500" >{errorMessage}</Text>}

          </View>

          {prev === "SignUp" ?
            <View className="flex text-left mb-[2%]">
              <GradientButton
                pVertical={`0%`}
                onPress={checkErrors}
                label="Verify Number"
                pVerticalBtn={`4%`}
                mTop={`20%`}
              />
            </View>
            :
            <View className="flex text-left mb-[2%]">
              <GradientButton
                pVertical={`0%`}
                onPress={checkEmailErrors}
                label="Verify Email"
                pVerticalBtn={`4%`}
                mTop={`20%`}
              />
            </View>
          }
        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>

  )
}
