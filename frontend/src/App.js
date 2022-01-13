// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllNotes from './components/AllNotes'
import OneNote from "./components/OneNote";
import AddOneNote from "./components/AddNoteForm";
import EditNote from "./components/EditNote";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/notes">
            <AllNotes />
          </Route>
          <Route exact path="/notes/:noteId">
            <OneNote />
          </Route>
          <Route exact path='/add'>
            <AddOneNote />
          </Route>
          <Route exact path='/:noteId/edit'>
            <EditNote />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
