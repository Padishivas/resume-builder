import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";
const employmentSlice = createSlice({
  name: "Employment History",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push({
        id: uuid().split("-").join(""),
        jobTitle: "Untitled",
        company: "",
        start: "",
        end: "",
        city: "",
        description: "",
      });
    },
    remove: (state,action) => {
        state.value = state.value.filter(e => e.id !== action.payload); 
        // action.payload = id
    },
    modify: (state,action) => {
        state.value = state.value.map(e => {
            // action.payload = {id: "", update:{}}
            if(e.id == action.payload.id) {
                return {
                    ...e,
                    ...action.payload.update
                }
            }
            return e;
        })
    }
  },
});

export const {add,modify,remove} = employmentSlice.actions;

export default employmentSlice.reducer;
