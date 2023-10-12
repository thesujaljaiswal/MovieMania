import { createSlice } from "@reduxjs/toolkit";

export const raingSlice = createSlice({
  name: "ratings",
  initialState: {
    rating: {},
  },
  reducers: {
    setRatings:(state,action)=>{
        state.rating=action.payload;
    }
    
  },
});

export const { setRatings } = raingSlice.actions;

export default raingSlice.reducer;
