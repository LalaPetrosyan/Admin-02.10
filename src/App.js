import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
    const { darkMode } = useContext(DarkModeContext);

    return ( <
        div className = { darkMode ? "app dark" : "app" } >
        <BrowserRouter >
        <Routes >
        <Route path = "/" >
        <Route index element = { < Login / > }/> <
        Route path = "home"element = { < Home / > }/> <
        Route path = "users" >
        <Route index element = { < List / > }/>
        <Route path = "new" element = { < New title = "Добавить новый продукт" / > }/> </Route>
        </Route> 
        </Routes> 
        </BrowserRouter> 
        </div>
    );
}

export default App;