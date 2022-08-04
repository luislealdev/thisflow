import { createSlice } from "@reduxjs/toolkit";

export const flowSlice = createSlice({
  name: "flow",
  initialState: {
    isSaving: false,
    savedMessage: "",
    activeUser: {
      profilePicture: "",
      displayName: "",
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
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
      state.savedMessage = "";
    },
    updatedUser: (state, action) => {
      state.isSaving = false;
      state.activeUser = action.payload;
      state.savedMessage = `"${action.payload.username}" saved correctly.`;
    },
    clearUserInfo: (state) =>{
      state.isSaving= false,
      state.savedMessage= "",
      state.activeUser = {
      profilePicture: "",
      displayName:"",
      username:"",
      phrase:"",
      photos:[],
      songs:[],
      socialMedia:{},
      streamingApp:{},
    }
  },

}});

// Action creators are generated for each case reducer function
export const { setSaving, updatedUser, setActiveUser,clearUserInfo } = flowSlice.actions;
