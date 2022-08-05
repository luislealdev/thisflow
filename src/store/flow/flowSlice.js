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
    setUser: (state, action) => {
      state.activeUser = action.payload;
    },
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
    setProfileImage: (state, action) => {
      state.isSaving = false;
      // if (state.active.imagesUrls) {
      //   state.active.imagesUrls = [
      //     ...state.active.imagesUrls,
      //     ...action.payload,
      //   ];
      //   return;
      // }
      // state.active.imagesUrls = [...action.payload];
      state.activeUser = {
        profilePicture: action.payload,
      }
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
export const { setSaving, updatedUser, setActiveUser,clearUserInfo,setUser,setProfileImage } = flowSlice.actions;
