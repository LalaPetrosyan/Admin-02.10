import "./login.scss"
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [formErrors,setFormErrors]=useState({})
  const [formErrorsFalse,setFormErrorsFalse]=useState({})

  const validate=()=>{
    const errors={}
    if(loginData.email===""){
      errors.email="обязательное поле։введите адрес электронной почты"
    }
    if(loginData.password===""){
      errors.password="обязательное поле։введите пароль"
    }
    return errors
  }
  const validateFalse=()=>{
    const errors={}
    if(loginData.email!==true || loginData.password!==true){
      errors.email="Неправильный адрес электронной почты или пароль"
    }

    return errors
  }


  const changeData = (e) => {
    console.log(e.target.value)

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const login = () => {
    setFormErrors(validate(loginData))

    if (loginData.email !== "" && loginData.password !== "") {
      axios
        .post(
          `${process.env.REACT_APP_MY_API_KAY}/login`,
          loginData
        )
        .then((request) => {
          console.log(request)
          localStorage.setItem("token", request.data.token);
          window.location.replace("/users");
        })
        .catch((error) =>
        setFormErrorsFalse(validateFalse(loginData))
        );
    }
  };
  return (
    <div className="login__area">
      <h1>Log In</h1>
        <form className="login__form" >

        <input
        className="login__inp"
                type="email"
                label="Email"
                fullWidth
                name="email"
                value={loginData.email}
                onChange={(e) => changeData(e)}
                placeholder="elmail"
              />
           <p className='errMess'>{formErrors.email}</p> 
              <input
                className="login__inp"
                type="password"
                label="Password"
                fullWidth
                name="password"
                value={loginData.password}
                onChange={(e) => changeData(e)}
                placeholder="Password"
              />
  <p className='errMess'>{formErrors.password}</p> 
  <p className='errMess'>{formErrorsFalse.email}</p> 

        </form>
        <button variant="gradient"  onClick={login} className="login__btn">
                sign in
              </button>
    </div>
  )
}

export default Login