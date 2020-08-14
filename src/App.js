import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
    <h1>Hello Vishnu programmer..........Let's build the Slack Clone</h1>
    {/* Header */}
    <Header/>
    <div className="app__body">
      <Sidebar/>
    {/* React-Router -> Chat screen*/}

    </div>
   
    </div>
  );
}

export default App;
