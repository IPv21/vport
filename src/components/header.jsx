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
                                <Link id="home" to="/" className={location.pathname === '/landing' ? 'active' : ''}>
                                    Home
                                </Link>
                            </li>

                            <li className="navButtons">
                                <Link id="man" to="/theman" className={location.pathname === '/theman' ? 'active' : ''}>
                                    The Man...
                                </Link>
                            </li>

                            <li className="navButtons">
                                <Link id="works" to="/theworks" className={location.pathname === '/theworks' ? 'active' : ''}>
                                    The Works....
                                </Link>
                            </li>

                            <li id="call" className="navButtons">
                                <Link id="call" to="/thecall" className={location.pathname === '/thecall' ? 'active' : ''}>
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
