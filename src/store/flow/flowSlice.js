import { createSlice } from '@reduxjs/toolkit';

export const flowSlice = createSlice({
   name: 'flow',
   initialState: {
       isSaving: false,
       profilePicture: "",
       username: "",
       phrase:"",
       photos: [],
       songs: [],
       socialMedia: {},
       streamingApps:{}

   },
   reducers: {
     
     }
});

// Action creators are generated for each case reducer function
export const {  } = flowSlice.actions;