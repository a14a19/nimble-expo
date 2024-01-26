import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Receivables (selected button entries) from 'Form' components.

  //PassionsComponent Arrays
  FoodAndDrink: [],
  Entertainment: [],
  Sports: [],
  TravellingAndActivities: [],
  Pets: [],

  //TraitsComponent Arrays
  Personality: [],
  AstrologySign: [],

  //LookingToFind Arrays
  LookingToFind: [],

  //SexualOrientation Ararys
  Gender: [],
  SexualOrientation: [],
  GenderCriteria: [],

  age: [18, 30],
  distance: [50],

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
      NoPets: false,
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
      Scorpio: false,
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
      const { name, category, type, value } = payload;

      if (type === "traits" && category === "AstrologySign") {
        if (typeof value === "object") {
          state.traitsCategories[category] = value;
        } else {
          state.traitsCategories[category][name] =
            !state.traitsCategories[category][name];
        }
      } else if (
        type === "passions" &&
        category &&
        state.passionsCategories[category]
      ) {
        state.passionsCategories[category][name] =
          !state.passionsCategories[category][name];
      } else if (
        type === "traits" &&
        category &&
        state.traitsCategories[category]
      ) {
        state.traitsCategories[category][name] =
          !state.traitsCategories[category][name];
      }
    },

    setSelectedInterests: (state, action) => {
      const { category, interests } = action.payload;
      state[category] = interests;
    },

    setSelectedPreferences: (state, action) => {
      const { category, preferences } = action.payload;
      if (category === "LookingToFind") {
        state.LookingToFind = [preferences];
      } else if (category === "Gender") {
        state.Gender = [preferences];
      } else if (category === "SexualOrientation") {
        state.SexualOrientation = [preferences];
      } else if (category === "GenderCriteria") {
        state.GenderCriteria = [preferences];
      } else if (category === "Age") {
        state.age = preferences
      } else if (category === "Distance") {
        state.distance = preferences
      }
    },

    mergeFormData: (state, action) => {
      const obj = {
        FoodAndDrink: state.FoodAndDrink,
      };

      console.log(obj);
      state.mergeForm = obj;
    },
  }
});

export const {
  nextForm,
  changeBoolean,
  setSelectedInterests,
  setSelectedPreferences,
} = formSlice.actions;
export default formSlice.reducer;
