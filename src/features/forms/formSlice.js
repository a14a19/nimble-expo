import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FlatListComponent } from "react-native";
import { userFinalSignUp, userProfileUpdate } from "../../services/api";

const initialState = {
  name: "",

  isAPIPending: false,

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

export const userFinalSignUpAPI = createAsyncThunk(
  "form/userFinalSignUp",
  async (payload, thunkAPI) => {
    try {
      return userFinalSignUp(payload.body, payload.params, payload.options)
        .then((res) => res.data)
        .catch((e) => e.response.data);
    } catch (e) {
      console.log(e);
      thunkAPI.rejectWithValue("form error - ", e);
      return e;
    }
  }
);

export const userProfileUpdateAPI = createAsyncThunk("form/userProfileUpdate", async (payload, thunkAPI) => {
  try {
    return userProfileUpdate(payload.body, payload.params, payload.options).then((res) => res.data).catch((e) => e.response);
  } catch (e) {
    thunkAPI.rejectWithValue("form error - ", e)
    return e
  }
})

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
      }
    },

    mergeFormData: (state, action) => {
      const obj = {
        FoodAndDrink: state.FoodAndDrink,
      };

      console.log(obj);
      state.mergeForm = obj;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userFinalSignUpAPI.fulfilled, (state, { payload }) => {
      console.log("user form updated fulfilled", payload)
    })
    builder.addCase(userFinalSignUpAPI.pending, (state, { payload }) => {
      console.log("user form updated pending", payload)
    })
    builder.addCase(userFinalSignUpAPI.rejected, (state, { payload }) => {
      console.log("user form updated rejected", payload)
    })
    builder.addCase(userProfileUpdateAPI.fulfilled, (state, { payload }) => {
      state.isAPIPending = false;
      console.log("user form updated fulfilled", payload)
    })
    builder.addCase(userProfileUpdateAPI.pending, (state, { payload }) => {
      state.isAPIPending = true;
      console.log("user form updated pending", payload)
    })
    builder.addCase(userProfileUpdateAPI.rejected, (state, { payload }) => {
      state.isAPIPending = false;
      console.log("user form updated rejected", payload)
    })
  }
});

export const {
  nextForm,
  changeBoolean,
  setSelectedInterests,
  setSelectedPreferences,
} = formSlice.actions;
export default formSlice.reducer;
