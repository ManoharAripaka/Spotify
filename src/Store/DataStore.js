import { createSlice } from "@reduxjs/toolkit";
const dataStore = createSlice({
    name : "dataStore",
    initialState: {
        token: null,
        user: null,
        playlists: [],
        recents: [],
        liked: [],
        playing: [],
        positon: null,
        volume: 30,
        shuffle: false,
        repeat: 0,
        play: false,
        title: null,
        items: {},
        top: null,
        image: null,
        name: null
    },
    reducers: {
        updateToken: (state, action) => {state.token = action.payload},
        updateUser: (state, action) => {state.user = action.payload},
        updatePlaylists: (state, action) => {state.playlists = action.payload},
        updateRecents: (state, action) => {state.recents = action.payload},
        updateLiked: (state, action) => {state.liked = action.payload},
        updatePlaying: (state, action) => {state.playing = action.payload},
        updatePosition: (state, action) => {state.position = action.payload},
        updateVolume: (state, action) => {state.volume = action.payload},
        updateShuffle: (state,action) => {state.shuffle = action.payload},
        updateRepeat: (state, action) => {state.repeat = action.payload},
        updatePlay: (state, action) => {state.play = action.payload},
        updateTitle: (state, action) => {state.title = action.payload},
        updateItems: (state,action) => {state.items = action.payload},
        updateTop: (state, action) => {state.top = action.payload},
        updateImage: (state, action) => {state.image = action.payload},
        updateName: (state, action) => {state.name = action.payload}
    }
})
export const {updateToken, updateUser, updatePlaylists, updateRecents, updateLiked, updatePlaying, updatePosition, updateVolume, updateShuffle, updateRepeat, updatePlay, updateTitle, updateItems, updateImage, updateTop, updateName} = dataStore.actions
export default dataStore.reducer