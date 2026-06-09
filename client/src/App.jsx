import Landing from "./pages/Landing/Landing";
import Weeklymenu from "./pages/Subscription/Subscription";
import Weeklymenu from "./pages/Subscription/Subscription"
import Dashboard from "./pages/Dashboard/Dashboard";

import { Route, Routes } from "react-router-dom";

import NonSubscriberUser from "./pages/Dashboard/NonSubscriberUser";
import SubscriberUser from "./pages/Dashboard/SubscriberUser";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Userdashboard from "./pages/Userdashboard/Userdashboard";
import LunchMenu from "./pages/WeeklyMenu/LunchMenu";
import DinnerMenu from "./pages/WeeklyMenu/DinnerMenu";
// import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/dashboard" element={<NonSubscriberUser />} />
        <Route path="/subscriber-dashboard" element={<SubscriberUser />} />
        <Route path="/user-dashboard" element={<Userdashboard />} />

        <Route path="/subscription" element={<Weeklymenu />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu/lunch" element={<LunchMenu />}/>
      <Route path="/menu/dinner" element={<DinnerMenu />}/>
      <Route path="/subscription" element={<Weeklymenu />} />
      
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

    {/* <Landing /> */}
    </>
  );
}

export default App;
