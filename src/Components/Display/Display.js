import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Display.css"
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import { updatePlay } from '../../Store/DataStore';
function Display() {
    const dispatch = useDispatch()
    const { liked, play, user, title, items, top, image, name } = useSelector(state => state.data)
    const checkId = (id) => {
        let ret = false
        liked.map((like) => { if (like.track.id === id) ret = true })
        return ret
    }
    const msToSec = (time) => {
        let sec = Math.floor(time / 1000)
        let min = Math.floor(sec / 60)
        let rem = sec % 60
        return (min + ":" + rem)
    }
    const playChange = () => {
        dispatch(updatePlay(~play))
    }
    return (
        <div className='display'>
            {console.log(items)}
            <div className='display_header' style={{'background-image': `linear-gradient(to bottom right, #ffffff57, ${top})`}}>
                <img className="image" src={image} alt="" />
                <div className='text'>
                    <p className='list'>PLAYLIST</p>
                    <p className='title'>{title}</p>
                    <div className='bottom'>
                        <img src={user.images[0].url} alt="" />
                        <p className='one'>{name}</p>
                        <ul className='twoo'>
                            {items.length === 1 ? <li>1 song</li> : <li>{items.length} songs</li>}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='body_bottom'>
                <div>
                    {play ? <PauseCircleFilledRoundedIcon onClick={playChange} className='play' /> : <PlayCircleFilledRoundedIcon onClick={playChange} className='play' />}
                </div>
                <div className='playlist'>
                    <table>
                        <tr className='table_main'>
                            <td className='id'>#</td>
                            <td>TITLE</td>
                            <td className='album'>ALBUM</td>
                            <td className='head_time'>{<AccessTimeRoundedIcon />}</td>
                        </tr>
                        <hr />
                        {items.map((item) => (
                            <div className='each_item'>
                                <tr className='table_head'>
                                    <td className='id'>{items?.indexOf(item) + 1}</td>
                                    <td>
                                        <div className='title'>
                                            <img className="image" src={item?.track.album.images[2].url} alt="" />
                                            <div className='text'>
                                                <p className="one">{item?.track.name}</p>
                                                <p className='two'>{item?.track.artists.map((artist) => (item?.track.artists.indexOf(artist) === item?.track.artists.length - 1) ? artist.name : artist.name + ",")}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='album'>
                                        {item.track.album.name}
                                    </td>
                                    <td  >
                                        <div className='time'>
                                            {checkId(item.track.id) ? <FavoriteRoundedIcon style={{ 'color': "#0dc74e", "cursor": "pointer" }} /> : <FavoriteBorderRoundedIcon style={{ "cursor": "pointer" }} />}
                                            {msToSec(item.track.duration_ms)}
                                        </div>
                                    </td>
                                </tr>
                            </div>
                        ))}
                    </table>
                </div>
            </div>

        </div>
    );
}
export default Display;