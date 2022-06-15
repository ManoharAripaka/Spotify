import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Footer.css"
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import RepeatOneRoundedIcon from '@mui/icons-material/RepeatOneRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import { Slider } from '@mui/material'
import { updatePlay, updatePosition, updateRepeat, updateShuffle, updateVolume } from '../../Store/DataStore';
function Footer() {
    const dispatch = useDispatch()
    const { playing, user, position, volume, shuffle, repeat, play, liked } = useSelector(state => state.data)
    console.log(user.id)
    const checkId = (id) => {
        let ret = false
        liked.map((like) => { if (like.track.id === id) ret = true })
        return ret
    }
    const formatDuration = (value) => {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
    }
    const shuffleChange = () => {
        dispatch(updateShuffle(~shuffle))
    }
    const repeatChange = () => {
        repeat === 2 ? dispatch(updateRepeat(0)) : dispatch(updateRepeat(repeat + 1))
    }
    const playChange = () => {
        dispatch(updatePlay(~play))
    }
    return (
        <div className='footer'>
            <div className='footer_left'>
                <img src={playing?.item.album.images[2].url} alt="Not Found" />
                    <div className='text'>
                        <p className='onee'>{playing?.item.name}</p>
                        <p className='two'>{playing?.item.artists.map((artist) => (playing?.item.artists.indexOf(artist) === playing?.item.artists.length - 1) ? artist.name : artist.name + ",")}</p>
                    </div>
                    {checkId(playing?.item.id) ? <FavoriteRoundedIcon className="icon" style={{ 'color': "#0dc74e", "cursor": "pointer" }} /> : <FavoriteBorderRoundedIcon className="icon" style={{ "cursor": "pointer" }} />}
            </div>
            <div className='footer_center'>
                <div className='control'>
                    {shuffle ? <ShuffleRoundedIcon style={{ 'color': '#0dc74e' }} className='shuffle' onClick={shuffleChange} /> : <ShuffleRoundedIcon className='shuffle' onClick={shuffleChange} />}
                    <SkipPreviousRoundedIcon className='prev' />
                    {play ? <PauseCircleFilledRoundedIcon onClick={playChange} className='play1' /> : <PlayCircleFilledRoundedIcon onClick={playChange} className='play1' />}
                    <SkipNextRoundedIcon className='next' />
                    {repeat === 0 ? <RepeatRoundedIcon onClick={repeatChange} className='repeat' /> : repeat === 1 ? <RepeatRoundedIcon onClick={repeatChange} style={{ 'color': '#0dc74e' }} className='repeat' /> : <RepeatOneRoundedIcon onClick={repeatChange} style={{ 'color': '#0dc74e' }} className='repeat' />}
                </div>
                <div className='sliderbar'>
                    <p>{formatDuration(position)}</p>
                    <Slider
                        value={position}
                        min={0}
                        step={1}
                        max={Math.floor(playing.item.duration_ms / 1000)}
                        onChange={(_, value) => dispatch(updatePosition(value))}
                        sx={{
                            color: 'gray',
                            height: 2,
                            '& .MuiSlider-thumb': {
                                width: 7,
                                height: 7,
                                color: '#0dc74e',
                                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                    boxShadow: 'none',
                                    width: 10,
                                    height: 10,
                                },
                            },
                            '& .MuiSlider-track': {
                                color: '#0dc74e',
                            }
                        }}
                    />
                    <p>{formatDuration(Math.floor(playing.item.duration_ms / 1000) - position)}</p>
                </div>
            </div>
            <div className='footer_right'>
                {volume === 0 ? <VolumeOffRoundedIcon /> : volume === 50 ? <VolumeUpRoundedIcon /> : <VolumeDownRoundedIcon />}
                <Slider
                    className="slide"
                    min={0}
                    value={volume}
                    step={1}
                    max={50}
                    onChange={(_, value) => dispatch(updateVolume(value))}
                    sx={{
                        color: 'gray',
                        height: 2,
                        '& .MuiSlider-thumb': {
                            width: 7,
                            height: 7,
                            color: '#0dc74e',
                            '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                boxShadow: 'none',
                                width: 10,
                                height: 10,
                            },
                        },
                        '& .MuiSlider-track': {
                            color: '#0dc74e',
                        }
                    }}
                />
            </div>
        </div>
    );
}
export default Footer;