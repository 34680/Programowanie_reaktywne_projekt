import React from "react";
import "./Header.css";
import Login from "./Login";

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img className="logo" src="https://sklep.biofeedback.info.pl/images/movie.png"/>
                <h3>Film</h3>
            </div>
            <div className="header_center">
                <ul className="list">
                    <li><a href="/Popular">Popular</a></li>
                    <li><a href="/Top">Top</a></li>
                </ul>
            </div>
            <div className="header_right">
            <ul className="list">
                <li><a href="/Login">LogIn</a></li>
                <li><a href="/Register">SignUp</a></li>
                </ul>
            </div>
            <div className="header right">
            </div>
        </div>
    )
}

export default Header