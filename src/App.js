import "./App.css"
import { useState } from "react";
import { Home } from "./components/Home";
import { Contacts } from "./components/Contacts";
import { Navbar } from "./components/Navbar";

const contact =
{
  id: 7,
  name: "Cat",
  username: "Cat123",
  email: "email.com",
  address:
  {
    street: "street",
    suite: "suite",
    city: "howemouth",
    zipcode: "566",
  },
  geo:
  {
    lat: "",
    lng: "",
  },
  phone: "phone",
  website: "website",
  company: {
    name: "name",
    catchPhrase: "catch",
    bs: "gen"
  },
};

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
