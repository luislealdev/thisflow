import { createSlice } from "@reduxjs/toolkit";

export const flowSlice = createSlice({
  name: "flow",
  initialState: {
    isSaving: false,
    savedMessage: "",
    activeUser: {
      profilePicture: "",
      displayName:"",
      username: "",
      phrase: "",
      photos: [],
      songs: [],
      socialMedia: {},
      streamingApps: {},
    },
  },
  reducers: {
    setSaving: (state, action) => {
      state.isSaving = true;
    },
    updatedUser: (state, action) => {
      state.isSaving = false;
      state.activeUser = action.payload;
      state.savedMessage = `"${action.payload.username}" saved correctly.`;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSaving,updatedUser} = flowSlice.actions;
