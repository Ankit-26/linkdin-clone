import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import linkdin from "../../src/linkdin.svg"
import "./Header.css"
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function Header() {
  return (
    <div className='header'>
        <div className='left-header'>
            <img src={linkdin} alt=""/>
            <div className='header-search'>
            <SearchIcon/>
            <input type="text"></input>
            </div>
        </div>
        <div className='right-header'>
            <HeaderOptions title={"Home"} Icon={HomeIcon}/>
            <HeaderOptions title={"My Network"} Icon={SupervisorAccountIcon}/>
        </div>
    </div>
  )
}

export default Header