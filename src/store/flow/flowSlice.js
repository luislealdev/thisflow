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

      state.activeUser = {
        profilePicture: action.payload,
      };
    },
    setUserGaleryPhotos: (state, action) => {
      state.isSaving = false;

      if (state.activeUser.photos) {
        state.activeUser.photos = [
          ...state.activeUser.photos,
          ...action.payload,
        ];
        return;
      }
      state.activeUser.photos = [...action.payload];
    },
    deleteGaleryPhotos: (state) => {
      state.activeUser.photos = [];
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
  setUserGaleryPhotos,
  deleteGaleryPhotos
} = flowSlice.actions;
