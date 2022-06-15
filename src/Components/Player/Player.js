import React, { useEffect } from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import "./Player.css"
function Player() {
    return (
        <div className='player'>
            <div className='player_head'>
                <SideBar/>
                <Body/>
            </div>
            <Footer/>
        </div>
    );
}
export default Player;