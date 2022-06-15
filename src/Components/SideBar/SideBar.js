import React from 'react';
import "./SideBar.css";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch, useSelector } from 'react-redux';
import { updateImage, updateItems, updateName, updateTitle, updateTop } from '../../Store/DataStore';
import SpotifyWebApi from 'spotify-web-api-js';
function SideBar() {
    const dispatch = useDispatch()
    const spotify = new SpotifyWebApi()
    const { playlists, liked, user, recents, token } = useSelector(state => state.data)
    const changeData = () => {
        // console.log(user,"manu");
        dispatch(updateTitle("Liked Songs"))
        dispatch(updateItems(liked))
        dispatch(updateTop("#1f1f3f77"))
        dispatch(updateImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiClKcixfv9BXCvcR9cvi6PMP5eD2b2q8rT54k9VAtZpW7c3EmsY438rCqjrwHuwr50g&usqp=CAU"))
        dispatch(updateName(user.display_name))
    }
    const changeData2 = () => {
        // console.log(recents,user)
        dispatch(updateTitle("Recently Played"))
        dispatch(updateItems(recents))
        dispatch(updateTop("#1b1b42"))
        dispatch(updateImage(user.images[0].url))
        dispatch(updateName(user.display_name))
    }
    const changeData3 = (data) => {
        console.log(data.length, data)
        spotify.setAccessToken(token)
        spotify.getPlaylist(data.id).then((response) => dispatch(updateItems(response.tracks.items)))
        dispatch(updateTitle(data.name))
        dispatch(updateTop("#1b1b42"))
        dispatch(updateImage(data.images[0].url))
        dispatch(updateName(user.display_name))
    }
    return (
        <div className='sidebar'>
            <img className='sidebar_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <div className='sidebar_top'>
                <div className="sidebar_icons" onClick={()=> changeData2()}>
                    <HomeRoundedIcon />
                    <p>Home</p>
                </div>
                <div className="sidebar_icons">
                    <SearchRoundedIcon />
                    <p>Search</p>
                </div>
                <div className="sidebar_icons">
                    <LibraryMusicRoundedIcon />
                    <p>Your Library</p>
                </div>
            </div>
            <div className='sidebar_center'>
                <div className="sidebar_icons">
                    <PlaylistAddRoundedIcon />
                    <p>Create Platlist</p>
                </div>
                <div className="sidebar_icons" onClick={()=>changeData()}>
                    <FavoriteRoundedIcon />
                    <p>Liked Songs</p>
                </div>
            </div>
            <hr size="10" />
            <div className='sidebar_bottom'>
                {playlists.map((item) => <p onClick={()=> changeData3(item)}>{item.name}</p>)}
            </div>
        </div>
    );
}
export default SideBar;