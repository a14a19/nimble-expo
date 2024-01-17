import { createSlice } from "@reduxjs/toolkit";
import { FlatListComponent } from "react-native";

const initialState = {
  name: "",
  passionsCategories: {
    FoodAndDrink: {
      Italian: false,
      Japanese: false,
      Chinese: false,
      Mexican: false,
      Spicy: false,
      Seafood: false,
      Dessert: false,
      Tea: false,
      Alcohol: false,
      Vegetarian: false,
      Vegan: false,
    },

    Entertainment: {
      Movies: false,
      Dancing: false,
      Writing: false,
      Filming: false,
      Art: false,
      Gaming: false,
      Beauty: false,
      Music: false,
      Theatre: false,
      Photography: false,
      Singing: false,
    },

    Sports: {
      Basketball: false,
      Football: false,
      Skiing: false,
      Tennis: false,
      Soccer: false,
      Bowling: false,
      Lifting: false,
      Biking: false,
      Baseball: false,
      Badminton: false,
      Lacrosse: false,
    },

    TravellingAndActivities: {
      Roadtrip: false,
      Camping: false,
      Scuba: false,
      SportsGame: false,
      Carnival: false,
      Cafe: false,
      Cooking: false,
      Sightseeing: false,
    },

    Pets: {
      Dogs: false,
      Cats: false,
      Fish: false,
      Birds: false,
      Reptiles: false,
    },
  },
  traitsCategories: {
    Personality: {
      Introvert: false,
      Extrovert: false,
      Ambivert: false,
      Athletic: false,
      Adventurous: false,
      PartyAnimal: false,
      Foodie: false,
      Homebody: false,
      Outdoorsy: false,
      Smoker: false,
      AnimalLover: false,
      Chili: false,
      Creative: false,
      Reserved: false,
      Empathetic: false,
      Physical: false,
      Romantic: false,
      Academic: false,
    },

    AstrologySign: {
      Aries: false,
      Taurus: false,
      Gemini: false,
      Cancer: false,
      Leo: false,
      Virgo: false,
      Libra: false,
      Scorpius: false,
      Sagittarius: false,
      Capricorn: false,
      Aquarius: false,
      Pisces: false,
    },
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextForm: (state, action) => {
      console.log(state, action);
      state.name = action.payload.name;
    },
    changeBoolean: (state, { payload }) => {
      const { name, category } = payload;

      if (category && state.passionsCategories[category]) {
        state.passionsCategories[category][name] =
          !state.passionsCategories[category][name];
      }
      console.log(
        `Toggled ${category}: ${name} to ${state.passionsCategories[category][name]}`
      );
    },
    mergeFormData: (state, action) => {
      const obj = { ...state.passionsCategories, ...state.traitsCategories };
    },
  },
});

export const { nextForm, changeBoolean } = formSlice.actions;

export default formSlice.reducer;
