import React from "react";
import { Text, View, Pressable, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useForm } from "react-hook-form";

//Custom Hooks
import useEmoji from "../../hooks/useEmoji";
import useFormattedInterest from "../../hooks/useFormattedInterests";
import useDefaultValues from "../../hooks/useDefaultValues";

const PassionsComponent = () => {
  const navigateTo = useNavigation();
  const defaultValues = useDefaultValues();
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: defaultValues,
  });

  const selectedInterests = watch(); //IMPORTANT!! - Watches for changes in form state
  const toggleInterest = (interest) => {
    setValue(interest, !selectedInterests[interest]);
  };

  const displayInterests = Object.keys(control._defaultValues); //display interests!
  const isLongText = (formattedText) => {
    return formattedText.length > 9;
  };

  const getBackgroundColor = (interest) => {
    return selectedInterests[interest] ? "bg-violet-500" : "bg-gray-200";
  };

  //Hook Data
  const FoodAndDrinkData = displayInterests.slice(0, 11).map((interest) => {
    const emoji = useEmoji(interest);
    const formattedInterest = useFormattedInterest(interest);
    return {
      interest,
      emoji,
      formattedInterest,
      isLong: isLongText(formattedInterest),
      backgroundColor: getBackgroundColor(interest, selectedInterests),
    };
  });

  const EntertainmentData = displayInterests.slice(11, 22).map((interest) => {
    const emoji = useEmoji(interest);
    const formattedInterest = useFormattedInterest(interest);
    return {
      interest,
      emoji,
      formattedInterest,
      isLong: isLongText(formattedInterest),
      backgroundColor: getBackgroundColor(interest, selectedInterests),
    };
  });

  const SportsData = displayInterests.slice(22, 33).map((interest) => {
    const emoji = useEmoji(interest);
    const formattedInterest = useFormattedInterest(interest);
    return {
      interest,
      emoji,
      formattedInterest,
      isLong: isLongText(formattedInterest),
      backgroundColor: getBackgroundColor(interest, selectedInterests),
    };
  });

  const TravelAndActivitiesData = displayInterests
    .slice(33, 41)
    .map((interest) => {
      const emoji = useEmoji(interest);
      const formattedInterest = useFormattedInterest(interest);
      return {
        interest,
        emoji,
        formattedInterest,
        isLong: isLongText(formattedInterest),
        backgroundColor: getBackgroundColor(interest, selectedInterests),
      };
    });

  const PetsData = displayInterests.slice(41, 46).map((interest) => {
    const emoji = useEmoji(interest);
    const formattedInterest = useFormattedInterest(interest);
    return {
      interest,
      emoji,
      formattedInterest,
      isLong: isLongText(formattedInterest),
      backgroundColor: getBackgroundColor(interest, selectedInterests),
    };
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-white">
        <View className="p-4">
          <Pressable
            onPress={() => navigateTo.navigate("Home")}
            className="mb-5"
          >
            <AntDesign name="left" size={24} color="black" />
          </Pressable>
          <Text className="text-5xl font-semibold mb-7">
            What are your passions?
          </Text>

          <Text className="text-lg mb-4">
            Pick up to five interests. We will try to find dates who share those
            interests.
          </Text>

          {/* Food and Drink Map */}
          <Text className="text-2xl mb-3 font-semibold">Food & Drink</Text>
          <View className="flex flex-row flex-wrap items-center mb-4">
            {FoodAndDrinkData.map(
              ({
                interest,
                emoji,
                formattedInterest,
                isLong,
                backgroundColor,
              }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest)}
                  className={`rounded-2xl border border-slate-200 flex-row items-center justify-center mb-2 mr-2 p-1 ${backgroundColor} ${
                    isLong ? "w-[130px]" : "w-[110px]"
                  }`}
                >
                  <Text className="text-2xl ml-1.5">{emoji}</Text>
                  <Text
                    className={`flex-1 text-center mr-1.5 ${
                      selectedInterests[interest] ? "text-white" : "text-black"
                    }`}
                  >
                    {formattedInterest}
                  </Text>
                </Pressable>
              )
            )}
          </View>

          {/* Entertainment Map */}
          <Text className="text-2xl mb-3 font-semibold">Entertainment</Text>
          <View className="flex flex-row flex-wrap items-center mb-4">
            {EntertainmentData.map(
              ({
                interest,
                emoji,
                formattedInterest,
                isLong,
                backgroundColor,
              }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest)}
                  className={`rounded-2xl border border-slate-200 flex-row items-center justify-center mb-2 mr-2 p-1 ${backgroundColor} ${
                    isLong ? "w-[130px]" : "w-[110px]"
                  }`}
                >
                  <Text className="text-2xl ml-1.5">{emoji}</Text>
                  <Text
                    className={`flex-1 text-center mr-1.5 ${
                      selectedInterests[interest] ? "text-white" : "text-black"
                    }`}
                  >
                    {formattedInterest}
                  </Text>
                </Pressable>
              )
            )}
          </View>

          {/* Sports Map */}
          <Text className="text-2xl mb-3 font-semibold">Sports</Text>
          <View className="flex flex-row flex-wrap items-center mb-4">
            {SportsData.map(
              ({
                interest,
                emoji,
                formattedInterest,
                isLong,
                backgroundColor,
              }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest)}
                  className={`rounded-2xl border border-slate-200 flex-row items-center justify-center mb-2 mr-2 p-1 ${backgroundColor} ${
                    isLong ? "w-[111px]" : "w-[111px]"
                  }`}
                >
                  <Text className="text-2xl ml-1.5">{emoji}</Text>
                  <Text
                    className={`flex-1 text-center mr-1.5 ${
                      selectedInterests[interest] ? "text-white" : "text-black"
                    }`}
                  >
                    {formattedInterest}
                  </Text>
                </Pressable>
              )
            )}
          </View>

          {/* Travelling & Activities */}
          <Text className="text-2xl mb-3 font-semibold">
            Travelling & Activities
          </Text>
          <View className="flex flex-row flex-wrap items-center mb-4">
            {TravelAndActivitiesData.map(
              ({
                interest,
                emoji,
                formattedInterest,
                isLong,
                backgroundColor,
              }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest)}
                  className={`rounded-2xl border border-slate-200 flex-row items-center justify-center mb-2 mr-2 p-1 ${backgroundColor} ${
                    isLong ? "w-[130px]" : "w-[102px]"
                  }`}
                >
                  <Text className="text-2xl ml-1.5">{emoji}</Text>
                  <Text
                    className={`flex-1 text-center mr-1.5 ${
                      selectedInterests[interest] ? "text-white" : "text-black"
                    }`}
                  >
                    {formattedInterest}
                  </Text>
                </Pressable>
              )
            )}
          </View>

          {/* Pets */}
          <Text className="text-2xl mb-3 font-semibold">Pets</Text>
          <View className="flex flex-row flex-wrap items-center mb-4">
            {PetsData.map(
              ({
                interest,
                emoji,
                formattedInterest,
                isLong,
                backgroundColor,
              }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest)}
                  className={`rounded-2xl border border-slate-200 flex-row items-center justify-center mb-2 mr-2 p-1 ${backgroundColor} ${
                    isLong ? "w-[130px]" : "w-[110px]"
                  }`}
                >
                  <Text className="text-2xl ml-1.5">{emoji}</Text>
                  <Text
                    className={`flex-1 text-center mr-1.5 ${
                      selectedInterests[interest] ? "text-white" : "text-black"
                    }`}
                  >
                    {formattedInterest}
                  </Text>
                </Pressable>
              )
            )}
          </View>

          <Pressable
            onPress={handleSubmit(onSubmit)}
            className="bg-blue-500 p-3 rounded-lg mt-4"
          >
            <Text className="text-white text-center">Submit Interests</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PassionsComponent;
