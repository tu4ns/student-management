import {Route, Routes} from "react-router-dom";
import RootLayout from "../../Layout/RootLayout/RootLayout";
import Login from "../../Pages/Auth/Login";
import Home from "../../Pages/Main-Screen/Home";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path='/home' element={<Home />}/>
      </Route>
      <Route path='/sign-in' element={<Login />}/>
    </Routes>
  );
}

export default MainNavigation;