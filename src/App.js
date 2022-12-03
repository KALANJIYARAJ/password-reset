// import logo from "./logo.svg";
import "./App.css";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import "./fontawesome-free/css/all.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import CreateAc from "./Login/CreateAc";
import Forget from "./Login/Forget";
import Welcome from "./Welcome";
import ResetPassword from "./Login/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/accout" element={<CreateAc />}></Route>
        <Route path="/forgot" element={<Forget />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/reset/:userId" element={<ResetPassword/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
