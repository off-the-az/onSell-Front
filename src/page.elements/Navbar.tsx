import "./styles/Navbar.css";
// Buttons import
import Logo from "../assets/buttons/Logo.svg";
import Items from "../assets/buttons/Items.svg";
import Chats from "../assets/buttons/Chats.svg";
import Search from "../assets/buttons/Search.svg";
import Profile from "../assets/buttons/Profile.svg";
import Support from "../assets/buttons/Support.svg";
//Icons import
import TwitterIcon from "../assets/icons/Twitter Icon.svg";
import TelegramIcon from "../assets/icons/Telegram Icon.svg";
import InstagramIcon from "../assets/icons/Instagram Icon.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    /*<div className="top-circles-block">
          <div className="top-circle-1"></div>
          <div className="top-circle-2"></div>
          <div className="top-circle-3"></div>
        </div>
        <div className="bottom-circles-block">
          <div className="bottom-circle-1"></div>
          <div className="bottom-circle-2"></div>
          <div className="bottom-circle-3"></div>
        </div>*/
    <>
      <div className="navigation">
      

        <nav style={{ zIndex: 3, position: "relative" }}>
          <ul className="nav-links">
            <li className="nav-btn" ng-init="ShowMain=true">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </li>
            <li className="nav-btn">
              <Link to="/items">
                <img src={Items} alt="Items" />
              </Link>
            </li>
            <li className="nav-btn">
              <Link to="/chats">
                <img src={Chats} alt="Chats" />
              </Link>
            </li>
            <li className="nav-btn">
              <Link to="/search">
                <img src={Search} alt="Search" />
              </Link>
            </li>
            <hr className="hr" />
            <li className="nav-btn large-btn">
              <Link to="/profile">
                <img src={Profile} alt="Profile" />
              </Link>
              <Link to="/wallet" className="wallet-btn">
                14500$
              </Link>
            </li>
            <li className="nav-btn">
              <Link to="/support">
                <img src={Support} alt="Support" />
              </Link>
            </li>
            <li className="social-panel">
              <Link to="#" className="social-panel-btn twitter-icn">
                <img src={TwitterIcon} alt="Twitter" />
              </Link>
              <Link to="#" className="social-panel-btn instagram-icn">
                <img src={InstagramIcon} alt="Instagram" />
              </Link>
              <Link to="#" className="social-panel-btn telegram-icn">
                <img src={TelegramIcon} alt="Telegram" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
