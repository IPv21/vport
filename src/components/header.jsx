import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

export default function Header() {
    const location = useLocation();
  
    return (
        <>
            <div className="header-content">

                <div className='navit'>  
                    <nav>
                        <ul>
                            <li className="navButtons">
                                <Link to="/" className={location.pathname === '/landing' ? 'active' : ''}>
                                    Home
                                </Link>
                            </li>

                            <li className="navButtons">
                                <Link to="/theman" className={location.pathname === '/theman' ? 'active' : ''}>
                                    The Man...
                                </Link>
                            </li>

                            <li className="navButtons">
                                <Link to="/theworks" className={location.pathname === '/theworks' ? 'active' : ''}>
                                    The Works....
                                </Link>
                            </li>

                            <li className="navButtons">
                                <Link to="/thecall" className={location.pathname === '/thecall' ? 'active' : ''}>
                                    The Call...
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
