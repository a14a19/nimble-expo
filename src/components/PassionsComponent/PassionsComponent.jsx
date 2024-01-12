import React from "react";
import { useState, useEffect } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

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

  // Initialize state for app readiness
  const [appIsReady, setAppIsReady] = useState(false);

  // Show splash screen while we load Google Fonts
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Montserrat_400Regular,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // Create a callback for when our font is done loading
  const handleOnLayout = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // return null until app is ready
  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView /* onLayout={handleOnLayout} */>
      <View className=" bg-white text-black h-screen w-[400px] relative">
        <View className="w-[358px] h-1 left-0 top-0 absolute ml-3 mt-7">
          <View className="w-[358px] h-1 left-0 top-0 absolute bg-gray-200 bg-opacity-25 rounded-md mt-7" />
          <View className="w-[53px] h-1 left-0 top-[0.22px] absolute bg-purple-500 rounded-md mt-7" />
        </View>
        <Pressable
          onPress={() => {
            navigateTo.navigate("Home");
          }}
        >
          <Image
            className="w-[11.77px] h-5 mt-24 ml-3 relative"
            source={require("../../assets/Vector.png")}
          />
        </Pressable>
        <Text className="w-[358px] h-[70px] left-0 top-[96px] absolute text-slate-900 text-[32px] font-semibold ml-3 mt-10">
          {/* Needs  font-mont */}
          What are your passions?
        </Text>
        <Text className="w-[350px] left-0 top-[181px] absolute text-slate-900 text-2xl text-bold  ml-3">
          Pick up to five interests. We will try to find dates who share those
          interests
        </Text>
        <Text className="w-[135px] text-black text-2xl font-semibold mt-36 ml-3">
          {/* Needs  font-mont */}
          Food & Drink
        </Text>
        {/* Bunch of Pressables for Food and Drink */}
        <Pressable className="ml-6 mt-[320px] absolute">
          <View className="w-[108px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="left-1 bottom-[0.1px]  absolute text-3xl">🍝</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs font-mont */}
              Italian
            </Text>
          </View>
        </Pressable>

        <Pressable className="ml-[140px] mt-[320px] absolute">
          <View className="w-[107px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="bottom-[0.1px] absolute text-2xl">🍣</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs  font-mont */}
              Japanese
            </Text>
          </View>
        </Pressable>

        <Pressable className="ml-[260px] mt-[320px] absolute">
          <View className="w-[107px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="bottom-[0.1px] absolute text-2xl">🥡</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs  font-mont */}
              Chinese
            </Text>
          </View>
        </Pressable>

        <Pressable className="ml-6 mt-[365px] absolute">
          <View className="w-[108px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="left-1 bottom-[0.1px] absolute text-2xl">🌮</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs font-mont */}
              Mexican
            </Text>
          </View>
        </Pressable>

        <Pressable className="ml-[140px] mt-[365px] absolute">
          <View className="w-[107px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="left-1 bottom-[0.7px] absolute text-2xl">🌶️</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs  font-mont */}
              Spicy
            </Text>
          </View>
        </Pressable>

        <Pressable className="ml-[260px] mt-[365px] absolute">
          <View className="w-[107px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="bottom-[0.1px] absolute text-2xl">🦞</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs  font-mont */}
              Seafood
            </Text>
          </View>
        </Pressable>

        <Pressable className="ml-6 mt-[410px] absolute">
          <View className="w-[108px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="left-1 bottom-[1px]  absolute text-2xl">🍰</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs font-mont */}
              Dessert
            </Text>
          </View>
        </Pressable>

        <Pressable className="ml-[140px] mt-[410px] absolute">
          <View className="w-[90px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="pl-1 bottom-[1px] absolute text-2xl">🍵</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs  font-mont */}
              Tea
            </Text>
          </View>
        </Pressable>

        <Pressable className="ml-[240px] mt-[410px] absolute">
          <View className=" w-[107px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="bottom-[0.1px] absolute text-2xl">🍻</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs  font-mont */}
              Chinese
            </Text>
          </View>
        </Pressable>

        <Pressable className="ml-6 mt-[460px] absolute">
          <View className="w-[120px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="left-1 bottom-[0.1px] absolute text-2xl">🥬</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs font-mont */}
              Vegetarian
            </Text>
          </View>
        </Pressable>

        <Pressable className="ml-[152px] mt-[460px] absolute">
          <View className="w-[100px] h-8 rounded-2xl border border-slate-300 gap-2 inline-flex">
            <Text className="left-1 bottom-[0.7px] absolute text-2xl">🍃</Text>
            <Text className="pl-4 text-center text-slate-400 text-sm font-medium">
              {/* Needs  font-mont */}
              Vegan
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PassionsComponent;
