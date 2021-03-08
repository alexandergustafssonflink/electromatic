import EventCard from "./../../components/EventCard/eventcard.js";
import BurgerMenu from "./../../components/BurgerMenu/burgermenu.js";
import NavMenu from "./../../components/NavMenu/navmenu.js";
// import Layout from "./../../components/Layout/layout.js";
import client from "../../contentful.js";
import React from "react";
import "./events.css";
import AOS from "aos";

function Events() {
  const [events, setEvents] = React.useState(null);
  React.useEffect(() => {
    client
      .getEntries({
        content_type: "event",
      })
      .then((entries) => {
        setEvents(entries.items);
      }, []);
  });

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <NavMenu />
      <BurgerMenu />
      <div className="all-events">
        <h1>All events</h1>
        <div className="events-full-list">
          {events &&
            events.map((e, i) => {
              return <EventCard props={e} key={i} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Events;
