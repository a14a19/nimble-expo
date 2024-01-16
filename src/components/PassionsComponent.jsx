import React, { useEffect, useState, useCallback } from "react";
import { Text, View, Pressable, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import GradientButton from "../utils/GradientButton";
import { changeBoolean } from "../features/forms/formSlice";

//Custom Hooks
import useEmoji from "../hooks/useEmoji";
import useFormattedInterests from "../hooks/useFormattedInterests";

const PassionsComponent = () => {
  const dispatch = useDispatch();
  const { passionsCategories } = useSelector((store) => store.form);
  const navigateTo = useNavigation();

  const [categoryCounts, setCategoryCounts] = useState({
    FoodAndDrink: 0,
    Entertainment: 0,
    Sports: 0,
    TravellingAndActivities: 0,
    Pets: 0,
  });

  useEffect(() => {
    const initialCounts = {
      FoodAndDrink: 0,
      Entertainment: 0,
      Sports: 0,
      TravellingAndActivities: 0,
      Pets: 0,
    };

    // Iterate over each category and count selected interests
    Object.entries(passionsCategories).forEach(([category, interests]) => {
      initialCounts[category] = Object.values(interests).filter(
        (isSelected) => isSelected
      ).length;
    });

    setCategoryCounts(initialCounts);
  }, [passionsCategories]);

  const toggleInterest = useCallback(
    (interest, category) => {
      const categoryInterests = passionsCategories[category];
      const selectedInterestsCount = Object.values(categoryInterests).filter(
        (value) => value === true
      ).length;

      // Check if the user has already selected 5 interests in this category
      if (selectedInterestsCount >= 5 && !categoryInterests[interest]) {
        // User has already selected 5 interests, can't select more
        return;
      }

      // Toggle the state in Redux
      dispatch(changeBoolean({ name: interest, category }));

      // Update the category counts
      setCategoryCounts((prev) => ({
        ...prev,
        [category]: categoryInterests[interest]
          ? prev[category] - 1
          : prev[category] + 1,
      }));
    },
    [dispatch, passionsCategories]
  );

  const getBackgroundColor = (isSelected) => {
    return isSelected ? "bg-violet-500" : "bg-gray-200";
  };

  const FoodAndDrinkData = Object.entries(passionsCategories.FoodAndDrink).map(
    ([interest, selected]) => ({
      interest,
      emoji: useEmoji(interest),
      formattedInterest: useFormattedInterests(interest),
      backgroundColor: getBackgroundColor(selected),
    })
  );

  const EntertainmentData = Object.entries(
    passionsCategories.Entertainment
  ).map(([interest, selected]) => ({
    interest,
    emoji: useEmoji(interest),
    formattedInterest: useFormattedInterests(interest),
    backgroundColor: getBackgroundColor(selected),
  }));

  const SportsData = Object.entries(passionsCategories.Sports).map(
    ([interest, selected]) => ({
      interest,
      emoji: useEmoji(interest),
      formattedInterest: useFormattedInterests(interest),
      backgroundColor: getBackgroundColor(selected),
    })
  );

  const TravelAndActivitiesData = Object.entries(
    passionsCategories.TravellingAndActivities
  ).map(([interest, selected]) => ({
    interest,
    emoji: useEmoji(interest),
    formattedInterest: useFormattedInterests(interest),
    backgroundColor: getBackgroundColor(selected),
  }));

  const PetsData = Object.entries(passionsCategories.Pets).map(
    ([interest, selected]) => ({
      interest,
      emoji: useEmoji(interest),
      formattedInterest: useFormattedInterests(interest),
      backgroundColor: getBackgroundColor(selected),
    })
  );

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-white">
        <View className="p-4 mt-11">
          <View className="flex w-[358px] h-1 bg-zinc-300 bg-opacity-25 rounded-md mb-9">
            <View className="w-[53px] h-1 bg-purple-500 rounded-md" />
          </View>

          <Pressable
            onPress={() => navigateTo.navigate("Verification")}
            className="mb-8"
          >
            <AntDesign name="left" size={24} color="black" />
          </Pressable>

          <Text
            className="text-5xl font-semibold mb-5"
            style={{ fontFamily: "mont-semibold" }}
          >
            What are your passions?
          </Text>

          <Text className="text-lg mb-8" style={{ fontFamily: "mont-med" }}>
            Pick up to five interests. We will try to find dates who share those
            interests.
          </Text>

          {/* Food and Drink Map */}
          <Text
            className="text-2xl mb-3"
            style={{ fontFamily: "mont-semibold" }}
          >
            Food & Drink
          </Text>
          <View className="flex flex-row flex-wrap items-center mb-4 ml-2">
            {FoodAndDrinkData.map(
              ({ interest, emoji, formattedInterest, backgroundColor }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest, "FoodAndDrink")}
                  className={`rounded-2xl border border-slate-200 flex gap-x-2 flex-row items-center justify-center mb-2 mr-4 p-1 
                    ${backgroundColor}
                  }`}
                >
                  <Text className="text-2xl ml-1.5">{emoji}</Text>
                  <Text
                    className={`text-center mr-1.5 ${
                      passionsCategories.FoodAndDrink[interest]
                        ? "text-white"
                        : "text-gray-500"
                    } `}
                    style={{ fontFamily: "mont-med" }}
                  >
                    {formattedInterest}
                  </Text>
                </Pressable>
              )
            )}
          </View>

          {/* Entertainment Map */}
          <Text
            className="text-2xl mb-3"
            style={{ fontFamily: "mont-semibold" }}
          >
            Entertainment
          </Text>
          <View className="flex flex-row flex-wrap items-center mb-4 ml-2">
            {EntertainmentData.map(
              ({ interest, emoji, formattedInterest, backgroundColor }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest, "Entertainment")}
                  className={`rounded-2xl border border-slate-200 flex gap-x-2 flex-row items-center justify-center mb-2 mr-4 p-1 ${backgroundColor}`}
                >
                  <Text className="text-2xl ml-1.5">{emoji}</Text>
                  <Text
                    className={`text-center mr-1.5 ${
                      passionsCategories.Entertainment[interest]
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                    style={{ fontFamily: "mont-med" }}
                  >
                    {formattedInterest}
                  </Text>
                </Pressable>
              )
            )}
          </View>

          {/* Sports Map */}
          <Text
            className="text-2xl mb-3"
            style={{ fontFamily: "mont-semibold" }}
          >
            Sports
          </Text>
          <View className="flex flex-row flex-wrap items-center mb-4 ml-2">
            {SportsData.map(
              ({ interest, emoji, formattedInterest, backgroundColor }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest, "Sports")}
                  className={`rounded-2xl border border-slate-200 flex gap-x-2 flex-row items-center justify-center mb-2 mr-4 p-1 ${backgroundColor} `}
                >
                  <Text className="text-2xl ml-1.5">{emoji}</Text>
                  <Text
                    className={`text-center mr-1.5 ${
                      passionsCategories.Sports[interest]
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                    style={{ fontFamily: "mont-med" }}
                  >
                    {formattedInterest}
                  </Text>
                </Pressable>
              )
            )}
          </View>

          {/* Travelling & Activities */}
          <Text
            className="text-2xl mb-3"
            style={{ fontFamily: "mont-semibold" }}
          >
            Travelling & Activities
          </Text>
          <View className="flex flex-row flex-wrap items-center mb-4 ml-2">
            {TravelAndActivitiesData.map(
              ({ interest, emoji, formattedInterest, backgroundColor }) => (
                <Pressable
                  key={interest}
                  onPress={() =>
                    toggleInterest(interest, "TravellingAndActivities")
                  }
                  className={`rounded-2xl border border-slate-200 flex gap-x-2 flex-row items-center justify-center mb-2 mr-4 p-1 ${backgroundColor} `}
                >
                  <Text className="text-2xl ml-1.5">{emoji}</Text>
                  <Text
                    className={`text-center mr-1.5 ${
                      passionsCategories.TravellingAndActivities[interest]
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                    style={{ fontFamily: "mont-med" }}
                  >
                    {formattedInterest}
                  </Text>
                </Pressable>
              )
            )}
          </View>

          {/* Pets */}
          <Text
            className="text-2xl mb-3"
            style={{ fontFamily: "mont-semibold" }}
          >
            Pets
          </Text>
          <View className="flex flex-row flex-wrap items-center mb-4 ml-2">
            {PetsData.map(
              ({ interest, emoji, formattedInterest, backgroundColor }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest, "Pets")}
                  className={`rounded-2xl border border-slate-200 flex gap-x-2 flex-row items-center justify-center mb-2 mr-4 p-1 ${backgroundColor}`}
                >
                  <Text className="text-2xl ml-1.5">{emoji}</Text>
                  <Text
                    className={`text-center mr-1.5 ${
                      passionsCategories.Pets[interest]
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                    style={{ fontFamily: "mont-med" }}
                  >
                    {formattedInterest}
                  </Text>
                </Pressable>
              )
            )}
          </View>

          <GradientButton
            pVertical={`1%`}
            onPress={() => handleContinue()}
            label={`Continue`}
            pVerticalBtn={`4%`}
            mTop={`30%`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PassionsComponent;
