import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    passions: {
        // Food and Drink
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

        // Entertainment
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

        // Sports
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

        // Traveling & Activities
        Roadtrip: false,
        Camping: false,
        Scuba: false,
        SportsGame: false,
        Carnival: false,
        Cafe: false,
        Cooking: false,
        Sightseeing: false,

        // Pets
        Dogs: false,
        Cats: false,
        Fish: false,
        Birds: false,
        Reptiles: false,
    },
    traits: {

    }
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        nextForm: (state, action) => {
            console.log(state, action)
            state.name = action.payload.name
        },
        changeBoolean: (state, { payload }) => {
            console.log(state.passions[payload.name], payload)
            state.passions[payload.name] = !state.passions[payload.name]
        },
        mergeFormData: (state, action) => {
            const obj = { ...state.passions, ...state.traits }
        }
    }
})

export const { nextForm, changeBoolean } = formSlice.actions;

export default formSlice.reducer;