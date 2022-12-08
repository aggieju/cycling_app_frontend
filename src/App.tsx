import './App.css';
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../src/pages/Homepage"
import { Welcomepage } from "../src/pages/Welcomepage"
import { Campings } from "../src/pages/Campings"
import { Navigation } from "../src/components/Navigation"
import { Login } from "../src/pages/Login"
import { SignUp } from "../src/pages/SignUp"
import { Map } from "../src/pages/Map"
import { Chat } from "../src/pages/Chat"
import { Infobeginners } from "../src/pages/Infobeginners"
import { Cloudinary } from "../src/pages/Cloudinary"
import { useAppDispatch } from "../src/app/hooks"
import { useEffect } from "react";
import { getUserWithStoredToken } from "./store/user/thunks";


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/map" element={<Map />} />
        <Route path="/user" element={<Homepage />} />
        <Route path="/forum" element={<Chat />} />
        <Route path="/info" element={<Infobeginners />} />
        <Route path="/campings" element={<Campings />} />
        <Route path="/upload_photo" element={<Cloudinary />} />
      </Routes>
    </div>
  );
}

export default App;