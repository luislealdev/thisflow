import { createSlice } from "@reduxjs/toolkit";

export const flowSlice = createSlice({
  name: "flow",
  initialState: {
    isLoading: true,
    isSaving: false,
    savedMessage: "",
    activeUser: {
      profilePicture: "",
      displayName: "",
      phrase: "",
      photos: [],
      songs: [],

      lastNewTitle: "",
      lastNewText: "",

      facebookUrl: "",
      instagramUrl: "",
      youtubeUrl: "",

      appleMusicUrl: "",
      spotifyUrl: "",

      youtubeVideo1: "",
      youtubeVideo2: "",
      youtubeVideo3: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.activeUser = action.payload;
      state.isSaving = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
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
      state.savedMessage = `"${action.payload.displayName}" saved correctly.`;
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
      };
    },
    clearUserInfo: (state) => {
      (state.isSaving = false),
        (state.savedMessage = ""),
        (state.activeUser = {
          profilePicture: "",
          displayName: "",
          phrase: "",
          photos: [],
          songs: [],

          facebookUrl: "",
          instagramUrl: "",
          youtubeUrl: "",

          appleMusicUrl: "",
          spotifyUrl: "",
        });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSaving,
  updatedUser,
  setActiveUser,
  clearUserInfo,
  setUser,
  setProfileImage,
  setLoading,
} = flowSlice.actions;
