import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';

class Navbar extends Component {
    render() {
        return (
            <>
            <nav className = "grey darken-4">
                <div className = "container">
                    <div className = "nav-wrapper">
                        <Link to = '/' className = "brand-logo">
                        CV
                        </Link>
                        <Link to = '/' data-target = "side-nva" className = "sidenav-trigger">
                            <i className = 'material-icons'>menu</i>
                        </Link>
                        <ul className = 'right hide-on-med-and-down'>
                            <li>
                                <Link to='/'>
                                    <i className='fas fa-home'></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/skills'>
                                    <i className='fas fa-copy'></i> Skills
                                </Link>
                            </li>
                            <li>
                                <Link to='/experiences'>
                                    <i className='fas fa-id-badge'></i> Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to='/education'>
                                    <i className='fas fa-graduation-cap'></i> Education
                                </Link>
                            </li>
                            <li>
                                <Link to='/portfolois'>
                                    <i className='fas fa-address-card'></i> Portfolios
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
        );
    }
}

export default Navbar;