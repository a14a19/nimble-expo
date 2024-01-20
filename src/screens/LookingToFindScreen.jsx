import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";

import GradientButton from "../utils/GradientButton";
import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPreferences } from "../features/forms/formSlice";

function LookingToFindScreen() {
  const dispatch = useDispatch();
  const navigateTo = useNavigation();
  const [selectedRadio, setSelectedRadio] = useState(0);
  const data = [" ", "relationship", "Casual", "Unsure", "Undisclosed"];
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (selectedRadio > 0) {
      dispatch(
        setSelectedPreferences({
          category: "LookingToFind",
          preferences: data[selectedRadio],
        })
      );
      navigateTo.navigate("SexualOrientation");
    } else {
      setError(true);
      setErrorMessage("Please select any one option!");
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <View className=" flex flex-col h-full justify-between bg-white ">
        <View className="p-4 mt-11">
          <View className="flex w-[358px] h-1 bg-zinc-300 bg-opacity-25 rounded-md mb-9">
            <View className="w-[160px] h-1 bg-purple-500 rounded-md" />
          </View>

          <Pressable
            onPress={() => navigateTo.navigate("Passions")}
            className="mb-4"
          >
            <AntDesign name="left" size={24} color="black" />
          </Pressable>

          <Text
            className="text-3xl font-semibold mb-5"
            style={{ fontFamily: "mont-semibold" }}
          >
            What are you hoping to Find?
          </Text>

          <Text className="text-md mb-8" style={{ fontFamily: "mont-med" }}>
            This will help us to assist you to find a date Faster.{" "}
          </Text>

          {/* <Text className="flex text-left font-semibold text-3xl  pb-[8%]   pt-[4%]" style={{ fontFamily: "mont-semibold" }}>What are you hoping to Find?</Text> */}
          {/* <Text className="flex text-left text-md pb-[14%]" style={{ fontFamily: "mont-med" }}>This will help us to assist you to find a date Faster.</Text> */}

          <View className="flex flex-1 items-start ml-3 justify-start">
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelectedRadio(1);
                }}
              >
                <View className="flex flex-row items-center">
                  <View style={styles.radio}>
                    {selectedRadio == 1 ? (
                      <View style={styles.radiobg}></View>
                    ) : null}
                  </View>
                  <Text className=" text-md text-left pb-[5%] ">
                    A relationship
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View className="mt-12">
              <TouchableOpacity
                onPress={() => {
                  setSelectedRadio(2);
                }}
              >
                <View className="flex flex-row items-center ">
                  <View style={styles.radio}>
                    {selectedRadio == 2 ? (
                      <View style={styles.radiobg}></View>
                    ) : null}
                  </View>
                  <Text className=" text-md text-left pb-[5%]">
                    Something casual
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View className="mt-12">
              <TouchableOpacity
                onPress={() => {
                  setSelectedRadio(3);
                }}
              >
                <View className="flex flex-row items-center ">
                  <View style={styles.radio}>
                    {selectedRadio == 3 ? (
                      <View style={styles.radiobg}></View>
                    ) : null}
                  </View>
                  <Text className=" text-md text-left pb-[5%]">Unsure</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View className="mt-12">
              <TouchableOpacity
                onPress={() => {
                  setSelectedRadio(4);
                }}
              >
                <View className="flex flex-row items-center ">
                  <View style={styles.radio}>
                    {selectedRadio == 4 ? (
                      <View style={styles.radiobg}></View>
                    ) : null}
                  </View>
                  <Text className=" text-md text-left pb-[5%]">
                    Prefer not to say
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="flex text-left px-[4%] pb-[5%] ">
          {hasError && (
            <Text className="flex text-center py-[5%] text-red-500">
              {errorMessage}
            </Text>
          )}

          <View className="">
            <GradientButton
              pVertical={`0%`}
              onPress={handleSubmit}
              label="Continue"
              pVerticalBtn={`5%`}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LookingToFindScreen;

const styles = StyleSheet.create({
  radio: {
    width: 20,
    height: 20,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  radiobg: {
    backgroundColor: "#F21464",
    width: 12,
    height: 12,
    margin: 3,
    borderRadius: 5,
  },
});
