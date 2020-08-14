import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat"
import Login from "./Login"
import { useStateValue } from "./Stateprovider";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  const [{user},dispatch] = useStateValue();



  return (
    <div className="App">
    <Router>
      {!user?(

      <Login/>
      ):(
        <>
      <Header/>
    <div className="app__body">
      <Sidebar/>
      <Switch>
        <Route path="/room/:roomId">
          <Chat/>
        </Route>
      </Switch>
    </div>
    </>
      )}
    
    </Router>
  </div>
  );
}

export default App;
