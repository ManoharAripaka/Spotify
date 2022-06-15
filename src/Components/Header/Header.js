import React from 'react';
import "./Header.css"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useSelector } from 'react-redux';
function Header() {
    const { user } = useSelector((state) => state.data)
    const header = document.querySelector(".header")
    window.onscroll = () => {
        window.scrollY > 50 ? header.classList.add("active") : header.classList.remove("active")
    }
    return (
        <div className='header'>
            <ArrowBackIosRoundedIcon className="arrows" />
            <ArrowForwardIosRoundedIcon className="arrows" />
            <div className='profile'>
                <img src={user?.images[0].url} alt=""></img>
                <p>{user?.display_name}</p>
            </div>
        </div>
    );
}
export default Header;