import { createSlice } from "@reduxjs/toolkit";

const personalDetailsSlice = createSlice({
    name: "Personal Details",
    initialState: {
        value: {}
    },
    reducers: {
        saveData: (state,action) => {
            state.value = {
                ...state.value,
                ...action.payload,
                // [action.payload.key]: action.payload.value
            }
        }
    }
})

export const {saveData} = personalDetailsSlice.actions;

export default personalDetailsSlice.reducer;