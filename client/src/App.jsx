import Landing from "./pages/Landing/Landing";
import Weeklymenu from "./pages/Subscription/Subscritption";

import { Route, Routes } from "react-router-dom";
import NonSubscriberUser from "./pages/Dashboard/NonSubscriberUser";
import SubscriberUser from "./pages/Dashboard/SubscriberUser";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Weeklymenudinner from "./pages/Weeklymenudinner/Weeklymenudinner";
import Weeklymenulunch from "./pages/Weeklymenulunch/Weeklymenulunch";
// import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<NonSubscriberUser />} />
        <Route path="/subscriber-dashboard" element={<SubscriberUser />} />
        <Route path="/subscription" element={<Weeklymenu />} />
        <Route path="/subscription/lunch" element={<Weeklymenulunch />} />
        <Route path="/subscription/dinner" element={<Weeklymenudinner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Landing /> */}
    </>
  );
}

export default App;
