import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
// import './LoginDemo.css';


function DemoUser() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleDemo = (e) => {
        e.preventDefault();

        const credential = 'demo@user.io';
        const password = 'password';

        return dispatch(sessionActions.login({ credential, password }))
    };



    return (
        <div className='login-demo-container'>
            <Link type="submit" id='login-demo-button' to={""} onClick={handleDemo}>DEMO USER</Link>
        </div>
    );
}

export default DemoUser;