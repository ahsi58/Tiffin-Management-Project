import Landing from "./pages/Landing/Landing";
import Weeklymenu from "./pages/Subscription/Subscription";

import { Route, Routes } from "react-router-dom";

import NonSubscriberUser from "./pages/Dashboard/NonSubscriberUser";
import SubscriberUser from "./pages/Dashboard/SubscriberUser";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Userdashboard from "./pages/Userdashboard/Userdashboard";

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
    </>
  );
}

export default App;
