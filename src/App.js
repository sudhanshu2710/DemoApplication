import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Welcome } from "./component/Welcome";
import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
