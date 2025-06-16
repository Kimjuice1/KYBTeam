import React from 'react';
import '../styles/Header.css';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header-wrapper">
            <div className="logo">자격증 포털</div>
            <form action='#'>
            {/*<div className="search-box">*/}
            {/*    <span className="search-label">통합검색</span>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        className="search-input"*/}
            {/*        placeholder="자격증 검색."*/}
            {/*    />*/}
            {/*    <button type="submit" className="search-btn">🔍</button>*/}
            {/*</div>*/}
            </form>
            <nav className="nav">
                <ul>
                    <li className='nav-dept'><Link to="/departments">학과리스트</Link></li>
                    <li className='nav-cert'><a href="#">자격증리스트</a></li>

                </ul>
            </nav>

        </header>
    );
};

export default Header;
