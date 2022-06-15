import React from 'react';
import "./Body.css"
import Header from '../Header/Header';
import Display from "../Display/Display"
import { useDispatch, useSelector } from 'react-redux';
import { updateImage, updateItems, updateName, updateTitle, updateTop } from '../../Store/DataStore';
// import { updateData, updateTitle } from '../../Store/DataStore';
function Body() {
    const { recents, user } = useSelector((state) => state.data)
    const dispatch = useDispatch()
    const changeData = () => {
        // console.log(recents,user)
        dispatch(updateTitle("Recently Played"))
        dispatch(updateItems(recents))
        dispatch(updateTop("#1b1b42"))
        dispatch(updateImage(user.images[0].url))
        dispatch(updateName(user.display_name))
    }
    return (
        <div className='body'>
            <Header />
            {()=>changeData()}
            <Display/>
        </div>
    );
}
export default Body;