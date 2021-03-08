// import Layout from "./../../components/Layout/layout.js";
// import { Router, Link } from "@reach/router";
import client from "../../contentful.js";
import React from "react";
import "./singleevent.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BurgerMenu from "./../../components/BurgerMenu/burgermenu.js";
import NavMenu from "./../../components/NavMenu/navmenu.js";

function SingleEvent(props) {
  const [event, setEvent] = React.useState(null);
  React.useEffect(() => {
    client
      .getEntries({
        content_type: "event",
        "fields.slug": props.eventName,
      })
      .then((entries) => {
        setEvent(entries.items[0]);
      }, []);
  });
  if (event) {
  }

  return (
    <>
      <NavMenu />
      <BurgerMenu />
      <div className="single-event-card">
        <div className="single-event-img-container">
          <img
            className="single-event-img"
            src={event && event.fields.image.fields.file.url}
            alt="event-img"
          />
        </div>
        <h1>{event && event.fields.title} </h1>
        <div className="long-description">
          {event && documentToReactComponents(event.fields.longDescription)}
        </div>
        <div class="single-event-lower-section">
          <a href={event && event.fields.eventLink}>
            <button className="primary-btn">Watch now </button>
          </a>
        </div>
        <img
          className="bottom-img"
          // src="../frontpage-bottom.png"
          src="../Triangles.svg"
          alt="bottom-img"
        />
      </div>
    </>
  );
}

export default SingleEvent;
