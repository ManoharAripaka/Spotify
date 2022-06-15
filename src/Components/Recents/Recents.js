import React from 'react';
import { useSelector } from 'react-redux';
import "./Recents.css"
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
function Recents(props) {
    const { recents, user } = useSelector(state => state.data)
    return (
        <div className='recents'>
            <div className='recents_header'>
                <img className="image" src="https://i.scdn.co/image/ab6775700000ee8590aacfc7b0a0927a1241241a" alt="" />
                <div className='text'>
                    <p className='list'>PLAYLIST</p>
                    <p className='title'>Recently played</p>
                    <div className='bottom'>
                        <img src="https://i.scdn.co/image/ab6775700000ee8590aacfc7b0a0927a1241241a" alt="" />
                        <p className='one'>Manohar</p>
                        <ul className='two'><li>2 songs</li></ul>
                    </div>
                </div>
            </div>
            <div>
                <PlayCircleFilledRoundedIcon className='play'/>
            </div>
            <div className='playlist'>
                <table>
                    <tr>
                        <th>#</th>
                        <th>TITLE</th>
                        <th>ALBUM</th>
                        <th>DATE ADDED</th>
                        <th>{<AccessTimeRoundedIcon/>}</th>
                    </tr>
                </table>
                <div className='playlist_image'>
                    {/* <img src={recents[recents.length - 1].track.album.images[0].url} alt="" /> */}
                </div>
                {/* {console.log(recents)} */}
            </div>
        </div>
    );
}
export default Recents;