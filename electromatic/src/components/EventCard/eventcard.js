import React from "react";
import "./eventcard.css";

const EventCard = ({ props }) => {
  return (
    <div className="event-card" data-aos="fade-up">
      <div className="event-img-container">
        <img
          className="event-img"
          src={props.fields.image.fields.file.url}
          alt="event-img"
        />
      </div>
      <h3>{props && props.fields.title} </h3>
      <p>{props && props.fields.shortDescription}</p>
      <div className="event-bottom">
        <a href={props && "/events/" + props.fields.slug}>
          <button className="secondary-btn">More info </button>{" "}
        </a>
        <a href={props && props.fields.eventLink}>
          <button className="primary-btn">Watch now </button>
        </a>
      </div>
    </div>
  );
};

export default EventCard;

// const EventCard = (props) => {
//   return (
//     <div class="event-card">
//       <img class="event-img" src="mars.jpg" />
//       <h3>{props.title} </h3>
//       <p>{props.shortDescription}</p>
//       <div class="event-bottom">
//         <Link to={props.slug}>
//           <button class="secondary-btn">More info </button>{" "}
//         </Link>
//         <Link to={props.eventLink}>
//           <button class="primary-btn">Watch now </button>
//         </Link>
//       </div>
//     </div>
//   );
// };
