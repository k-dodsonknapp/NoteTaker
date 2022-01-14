import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import DemoUser from '../DemoUser';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <div className='navbar'>
                <div>
                    <NavLink to="/login">Log In</NavLink>
                </div>
                <div>
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
                <div>
                    <DemoUser />
                </div>

            </div>
        );
    }

    return (
        <ul className='navlinks'>
            <li className='navigation-li'>
                <NavLink exact to="/">Home</NavLink>
                <div className='loginSignup'>
                    {isLoaded && sessionLinks}
                </div>
            </li>
        </ul>
    );
}

export default Navigation;
