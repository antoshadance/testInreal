import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css"

export default function Header() {
    return(
        <div className="header">
            <nav className="headerInner">
                <Link className="logo" to={"/"}>INREAL — ANOTHER REALITY</Link>
                <div className="headerItems">
                    <Link className="headerItem" to={"/"}>item 1</Link>
                    <Link className="headerItem" to={"/"}>item 2</Link>
                    <Link className="headerItem" to={"/"}>item 3</Link>
                </div>
            </nav>
        </div>
    )
}
