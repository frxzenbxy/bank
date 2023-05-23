import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Chat from "./components/Chat";
import React from "react";

function App() {
  return (
      <>
          <Header />
          <div className="flex justify-content-center  text-8xl" >
            <h1>
                Your choice - <br/>
                is our <br/>
                deposit card</h1>
          </div>
          <Chat/>
      </>
  );
}

export default App;
