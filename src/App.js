import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Middle from "./components/Middle";
import Home from "./components/home";
import Details from "./components/Details";
import Add from "./components/Add";
import Login from "./components/Login";
import Register from "./components/Register";
import './index.css';

function App() {
    return (
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    );
}

export default App;