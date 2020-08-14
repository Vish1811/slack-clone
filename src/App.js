import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <div className="app__body">
      <Sidebar/>
      <Switch>
        <Route path="/room/:roomId">
          {/*<Chat/>*/}
          <Chat/>

        </Route>

      </Switch>

      {/* React-Router -> Chat screen*/}
    </div>
    </Router>
  </div>
  );
}

export default App;
