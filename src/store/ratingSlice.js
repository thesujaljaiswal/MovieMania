import { createSlice } from "@reduxjs/toolkit";

export const raingSlice = createSlice({
  name: "ratings",
  initialState: {
    rating: {},
    changing:false
  },
  reducers: {
    setRatings:(state,action)=>{
        state.changing=true;
        state.rating=action.payload;
    },
    removeAlert:(state)=>{
      state.changing=false;
    }
    
  },
});

export const { setRatings,removeAlert } = raingSlice.actions;

export default raingSlice.reducer;
