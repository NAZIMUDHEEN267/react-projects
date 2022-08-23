
import icon from "../block.png";
import { FaBell } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { TiGroupOutline } from "react-icons/ti";
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


import { useState } from "react";

function Nav() {
  
  const items = [
    'Athletics',
    'History',
    'Arts & Culture',
    'Spirituality',
    'Animals',
    'Travel',
    'Interior',
    'People',
    'Health & Wellness',
    'Food & Drink',
    'Film',
    'Fashion',
    'Business & Work',
    'Nature',
    'Architecture',
    'Texture & Patterns',
    'Wallpaper',
    'Events',
  ];

  const [click, setClick] = useState(false);
  const [move, setMove] = useState('');
  const [itemCount, setItemCount] = useState(items);

  return (
    <header className="header">
      <nav className="nav">
        <img className="nav__img" src={icon} alt="icon.png" />
        <div className="nav__search">
          <BiSearchAlt2 className="search__icon" />
          <input className="search__bar" type="search" name="search" id="search" placeholder="Search..." autoComplete="off"/>
        </div>
        <ul className="nav__links">
          <li>Advertise</li>
          <li>Blog</li>
          <li>Submit a photo</li>
          <li>
            <FaBell />
          </li>
          <li>
            <BsPersonFill />
          </li>
          {/* nav-bars click event */}
          <li onClick={() => setClick(!click)}>
            <VscThreeBars />
          </li>
        </ul>

        {/* nav-bars event links */}
        <div className="shadow">
          <div className={`${(click) ? "nav-bar__links" : "hide"}`}>
            <ul className="links">
              <li className="main-link">
                <HiOutlineOfficeBuilding />
                <span>Company</span>
              </li>
              <li>
                <ul>
                  <li>about</li>
                  <li>history</li>
                  <li>join the team</li>
                  <li>press</li>
                  <li>contact</li>
                  <li>help center</li>
                </ul>
              </li>
            </ul>
            <ul className="links">
              <li className="main-link">
                <GrProjects />
                <span>Product</span>
              </li>
              <li>
                <ul>
                  <li>developers/Api</li>
                  <li>unsplash dataset</li>
                  <li>unsplash for ios</li>
                  <li>apps & plugins</li>
                </ul>
              </li>
            </ul>
            <ul className="links">
              <li className="main-link">
                <TiGroupOutline />
                <span>Community</span>
              </li>
              <li>
                <ul>
                  <li>become a contributer</li>
                  <li>topics</li>
                  <li>collection</li>
                  <li>trends</li>
                  <li>awards</li>
                  <li>stats</li>
                  <ul className="social-links">
                    <li><AiOutlineTwitter /></li>
                    <li><AiFillFacebook /></li>
                    <li><AiOutlineInstagram /></li>
                  </ul>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* nav down links */}
      <nav className="nav-down">
        <div className="user-nav">
          <li>Editorial</li>
          <li>Following</li>
        </div>
        <div className="nav-types">

          {/* left arrow key */}
          <span className="arrow left-arrow" onClick={() => setMove('prev')}>
            <MdKeyboardArrowLeft />
          </span>

          {/* categories links */}
          <ul className="categories" >
            {
              itemCount.map((name, index) => <li key={String(index)}>{name}</li>)
            }
          </ul>

          {/* right arrow key */}
          <span className="arrow right-arrow" onClick={() => setMove('next')}>
            <MdKeyboardArrowRight />
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Nav