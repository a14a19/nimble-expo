//React
import React, { useEffect, useState, useCallback } from "react";
import { Text, View, Pressable, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

//redux
import { useSelector, useDispatch } from "react-redux";
import { changeBoolean } from "../features/forms/formSlice";

//Custom Hooks
import useFormattedInterests from "../hooks/useFormattedInterests";

//Buttons
import HollowButton from "../utils/HollowButton";
import GradientButton from "../utils/GradientButton";
import { AntDesign } from "@expo/vector-icons";

const TraitsComponent = () => {
  const dispatch = useDispatch();
  const { traitsCategories } = useSelector((store) => store.form);
  const navigateTo = useNavigation();

  const [categoryCounts, setCategoryCounts] = useState({
    Personality: 0,
    AstrologySign: 0,
  });

  useEffect(() => {
    const initialCounts = {
      Personality: 0,
      AstrologySign: 0,
    };

    // Iterate over each category and count selected interests
    Object.entries(traitsCategories).forEach(([category, interests]) => {
      initialCounts[category] = Object.values(interests).filter(
        (isSelected) => isSelected
      ).length;
    });

    setCategoryCounts(initialCounts);
  }, [traitsCategories]);

  const toggleInterest = useCallback(
    (interest, category) => {
      if (category === "AstrologySign") {
        const currentStatus = traitsCategories.AstrologySign[interest];

        // Create an object with all false values, except the current interest
        const updatedAstrologySigns = Object.keys(
          traitsCategories.AstrologySign
        ).reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {});

        // Toggle the current interest's value
        updatedAstrologySigns[interest] = !currentStatus;

        // Dispatch the updated state for AstrologySign
        dispatch(
          changeBoolean({
            category,
            type: "traits",
            value: updatedAstrologySigns,
          })
        );

        // Update the category counts for AstrologySign
        setCategoryCounts((prev) => ({
          ...prev,
          [category]: updatedAstrologySigns[interest] ? 1 : 0,
        }));
      } else {
        // Logic for other categories
        const categoryInterests = traitsCategories[category];
        const selectedInterestsCount = Object.values(categoryInterests).filter(
          (value) => value
        ).length;

        if (selectedInterestsCount >= 5 && !categoryInterests[interest]) {
          // User has already selected 5 interests, can't select more
          return;
        }

        // Toggle the state in Redux for other categories
        dispatch(changeBoolean({ name: interest, category, type: "traits" }));

        // Update the category counts for other categories
        setCategoryCounts((prev) => ({
          ...prev,
          [category]: categoryInterests[interest]
            ? prev[category] - 1
            : prev[category] + 1,
        }));
      }
    },
    [dispatch, traitsCategories]
  );

  const personalityTraitsSelected =
    Object.values(traitsCategories.Personality).filter(
      (isSelected) => isSelected
    ).length > 0;

  const getBackgroundColor = (isSelected) => {
    return isSelected ? "bg-violet-500" : "bg-gray-200";
  };

  const PersonalityData = Object.entries(traitsCategories.Personality).map(
    ([interest, selected]) => ({
      interest,
      formattedInterest: useFormattedInterests(interest),
      backgroundColor: getBackgroundColor(selected),
    })
  );

  const AstrologySignData = Object.entries(traitsCategories.AstrologySign).map(
    ([interest, selected]) => ({
      interest,
      formattedInterest: useFormattedInterests(interest),
      backgroundColor: getBackgroundColor(selected),
    })
  );

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-white">
        <View className="p-4 mt-11">
          <View className="flex w-[358px] h-1 bg-zinc-300 bg-opacity-25 rounded-md mb-9">
            <View className="w-[100px] h-1 bg-purple-500 rounded-md" />
          </View>

          <Pressable
            onPress={() => navigateTo.navigate("Verification")}
            className="mb-8"
          >
            <AntDesign name="left" size={24} color="black" />
          </Pressable>

          <Text
            className="text-4xl font-semibold mb-5"
            style={{ fontFamily: "mont-semibold" }}
          >
            What type of person are you?
          </Text>

          <Text className="text-lg mb-8" style={{ fontFamily: "mont-med" }}>
            Pick up to five traits that best describe you as a person.
          </Text>

          {/* Personality Data*/}
          <Text
            className="text-2xl mb-4"
            style={{ fontFamily: "mont-semibold" }}
          >
            Personality
          </Text>
          <View className="flex flex-row flex-wrap items-center mb-7 ml-2">
            {PersonalityData.map(
              ({ interest, formattedInterest, backgroundColor }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest, "Personality")}
                  className={`rounded-2xl border border-slate-200 flex gap-x-2 flex-row items-center justify-center mb-2 mr-5 p-1
                    ${backgroundColor}
                  }`}
                >
                  <Text
                    className={`text-center mr-1.5 ${
                      traitsCategories.Personality[interest]
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

          {/* Astrology Data */}
          <Text
            className="text-2xl mb-4"
            style={{ fontFamily: "mont-semibold" }}
          >
            Astrology Sign
          </Text>
          <View className="flex flex-row flex-wrap items-center mb-4 ml-2">
            {AstrologySignData.map(
              ({ interest, formattedInterest, backgroundColor }) => (
                <Pressable
                  key={interest}
                  onPress={() => toggleInterest(interest, "AstrologySign")}
                  className={`rounded-2xl border border-slate-200 flex gap-x-2 flex-row items-center justify-center mb-2 mr-4 p-1 ${backgroundColor}`}
                >
                  <Text
                    className={`text-center mr-1.5 ${
                      traitsCategories.AstrologySign[interest]
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
        </View>

        {personalityTraitsSelected ? (
          <GradientButton
            pVertical={`1%`}
            onPress={() => navigateTo.navigate("Traits")}
            label={`Continue`}
            pVerticalBtn={`4%`}
            mTop={`30%`}
          />
        ) : (
          <HollowButton label="Continue" mTop={`30%`} pVertical={`4%`} />
        )}
        <Text> WILL WORK ON THE NEXT PART DO NOT CLICK CONTINUE!</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TraitsComponent;
