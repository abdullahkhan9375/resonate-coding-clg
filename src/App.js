import "./App.css"
import { useState } from "react";
import { Home } from "./components/Home";
import { Contacts } from "./components/Contacts";
import { Navbar } from "./components/Navbar";

function App() {
  const [activePage, setActivePage] = useState("home");
  return (
    <div className="centered-flex container--main">
        <Navbar handleSelectTab={setActivePage}/>
        {activePage === "home" ? <Home/> : <Contacts/>} 
    </div>
  );
}

export default App;
