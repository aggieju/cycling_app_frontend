import './App.css';
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../src/pages/Homepage"
import { Welcomepage } from "../src/pages/Welcomepage"
import { Navigation } from "../src/components/Navigation"
import { Login } from "../src/pages/Login"
import { useAppDispatch } from "../src/app/hooks"
import { useEffect } from "react";
import { getUserWithStoredToken } from "./store/user/thunks";


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;