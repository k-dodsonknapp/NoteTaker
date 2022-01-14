import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import "./profileButton.css"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <div className="navbar-div">
        <div className="banner-text">
          <h2>Note Takker: A place to take notes</h2>
          <p></p>
        </div>
        <div className="navLinkss">
          <Link to='/notes'>All Notes</Link>
          <Link to='/add'>Add Note</Link>
        </div>
        <button id="profile-btn" onClick={openMenu}> Hi {sessionUser.username}!!!
          <i className="fas-fa-user-circle" />
        </button>

        {showMenu && (
          <ul className="profile-dropdown">
            <div className="some-class">
              <li>username: {user.username}</li>
              <li>email: {user.email}</li>
              <li>
                <button className="logout" onClick={logout}>Log Out</button>
              </li>
            </div>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
