import React from "react";

import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PassionsComponent = () => {
  const navigateTo = useNavigation();
  return (
    <SafeAreaView>
      <View className=" bg-white text-black h-screen w-[400px] relative">
        <Text className="font-mont w-[358px] h-[70px] left-0 top-[85px] absolute text-slate-900 text-[32px] font-semibold ml-3">
          What are your passions?
        </Text>
        <Text className="w-[350px] left-0 top-[181px] absolute text-slate-900 text-base font-medium ml-3">
          Pick up to five interests. We will try to find dates who share those
          interests
        </Text>
        <View className="w-[358px] h-1 left-0 top-0 absolute ml-3 mt-5">
          <View className="w-[358px] h-1 left-0 top-0 absolute bg-gray-200 bg-opacity-25 rounded-md" />
          <View className="w-[53px] h-1 left-0 top-[0.22px] absolute bg-purple-500 rounded-md" />
        </View>
        <Pressable
          onPress={() => {
            navigateTo.navigate("Home");
          }}
        >
          <Image
            className="w-[11.77px] h-5 mt-11 ml-3 relative"
            source={require("../../assets/Vector.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PassionsComponent;
