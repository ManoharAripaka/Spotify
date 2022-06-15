import React, { useEffect } from "react"
import './App.css';
import Login from "./Components/Login/Login";
import Player from "./Components/Player/Player";
import { getTokenFromUrl } from "./Components/Spotify";
import { useDispatch, useSelector } from "react-redux";
import { updateLiked, updatePlaying, updatePlaylists, updatePosition, updateRecents, updateToken, updateUser } from "./Store/DataStore";
import SpotifyWebApi from "spotify-web-api-js";
const spotify = new SpotifyWebApi()
function App() {
  const {token, user} = useSelector((state) => state.data)
  const dispatch = useDispatch()
  useEffect(()=> {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    if (hash.access_token) dispatch(updateToken(hash.access_token))
    spotify.setAccessToken(hash.access_token)
    spotify.getMe().then(user => {dispatch(updateUser(user))})
    spotify.getMyCurrentPlayingTrack().then((response) => {
      dispatch(updatePlaying(response))
      dispatch(updatePosition(Math.floor(response.progress_ms/1000)))
    })
    spotify.getMySavedTracks().then((response) => dispatch(updateLiked(response.items)))
    spotify.getMyRecentlyPlayedTracks().then((response) => dispatch(updateRecents(response.items)))
    spotify.getUserPlaylists().then((response) => dispatch(updatePlaylists(response.items)))
  }, [])
  return (
    <div className="App">
      {token ? <Player/> : <Login/>}    
    </div>
  );
}
export default App;
