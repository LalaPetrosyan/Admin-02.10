import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [changeData, setChangeData] = useState({
    password: "",
    newPassword: "",
  });

  const changesData = (e) => {
    console.log(e.target.value)
    setChangeData({
      ...changeData,
      [e.target.name]: e.target.value,
    });
  };
  const change = () => {
    const token=localStorage.getItem("token")

    if (changeData.password !== "" && changeData.newPassword !== "") {
      axios
        .put(
          `${process.env.REACT_APP_MY_API_KAY}/changepassword`,  
        
           { password:changeData.password,newPassword:changeData.newPassword, token}
          
               )
               .then((request) => {
                alert("Пароль был изменен")
                window.location.replace("/");
              })
        .catch((error) => console.log(error));
    }
  };
  return (
 <>
      <Sidebar />
     
 <div className="home">
  
      <div className="form__change">
<h1> Изменить пароль</h1>
      <input
              type="text"
              label="password"
              placeholder="Пароль"
              fullWidth
              name="password"
              value={changeData.password}
              onChange={(e) => changesData(e)}
            />
      
            <input
              type="text"
              label="newPassword"
              placeholder="Новый пароль"
              fullWidth
              name="newPassword"
              value={changeData.newPassword}
              onChange={(e) => changesData(e)}
            />
   <button  className="change_btn" onClick={change}>
              Изменить
            </button>
      </div>

   
     
    </div>
</>
  );
};

export default Home;
