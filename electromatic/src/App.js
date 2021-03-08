// import logo from "./logo.svg";
import "./App.css";
// import NavMenu from "./components/NavMenu/navmenu.js";
// import EventCard from "./components/EventCard/eventcard.js";
// import EmailForm from "./components/EmailForm/emailform.js";
// import Layout from "./components/Layout/layout.js";
import { Router } from "@reach/router";
import Home from "./home.js";
import Events from "./pages/events/events.js";
import SingleEvent from "./pages/singleevent/singleevent.js";
import "./resources/aos.js";

function App() {
  return (
    <>
      <Router>
        <Home path="/" />
        <Events path="events" />
        <SingleEvent path="events/:eventName" />
      </Router>
    </>
  );
}

export default App;
