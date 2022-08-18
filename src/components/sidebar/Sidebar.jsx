import "./sidebar.scss";
import StoreIcon from "@mui/icons-material/Store";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import logoImg from "../../images/logo.png"

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const logout = () => { 
    localStorage.removeItem("token"); 
    window.location.replace("/"); 
  };
  return (
    <div className="sidebar">
      <div className="center">
        <ul className="sid"> 
<div className="sic__block">
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
            <StoreIcon className="icon" />
              <span>Продукты</span>
            </li>
          </Link>
          <Link to="/users/new" className="link"  style={{ textDecoration: "none" }}>
            <li>
          <AddPhotoAlternateIcon className="icon" />

            <span>Добавление продукта</span>
          </li>
        </Link>
  </div>    
    <div className="sic__block"  style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <Link className="link" to='/home'  style={{ textDecoration: "none" }}>
              <span>Профиль</span>
              </Link>
          </li>
          <li>

            <ExitToAppIcon className="icon" />
            <span  onClick={logout}>Выйти</span>
          </li>
          </div>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
