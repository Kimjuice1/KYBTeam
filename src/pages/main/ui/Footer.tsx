import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <div className="bottom-nav">
            <a href="#">
                <span className="icon">🧾</span>
                <span className="label">자격증리스트</span>
            </a>
            <Link to="/departments">
                <span className="icon">🏫</span>
                <span className="label">학과리스트</span>
            </Link>
        </div>
    );
};

export default Footer;
