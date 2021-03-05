import EventCard from "./../../components/EventCard/eventcard.js";
import BurgerMenu from "./../../components/BurgerMenu/burgermenu.js";
import Layout from "./../../components/Layout/layout.js";
import client from "../../contentful.js";
import React from "react";
import "./events.css";

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

  return (
    <>
      <Layout />
      <BurgerMenu />
      <div className="all-events">
        <h1>All events</h1>
        <div className="events-full-list">
          {events &&
            events.map((e) => {
              return <EventCard props={e} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Events;
