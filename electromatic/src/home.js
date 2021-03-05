import "./App.css";
// import NavMenu from "./components/NavMenu/navmenu.js";
import BurgerMenu from "./components/BurgerMenu/burgermenu.js";
import EventCard from "./components/EventCard/eventcard.js";
import EmailForm from "./components/EmailForm/emailform.js";
import Layout from "./components/Layout/layout.js";
import React, { useRef } from "react";
import client from "./contentful.js";
import { useIntersection } from "react-use";
import gsap from "gsap";

function Home() {
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

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const connectSectionRef = useRef(null);

  const homeIntersection = useIntersection(homeSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  const aboutTextIntersection = useIntersection(aboutSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const eventsIntersection = useIntersection(eventsSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  const connectIntersection = useIntersection(connectSectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
    });
  };

  // const fadeIn2 = (element) => {
  //   gsap.to(element, 5, {
  //     opacity: 1,
  //     y: 0,
  //     duration: 7.5,
  //     ease: "power4.out",
  //   });
  // };

  const fadeInFromRight = (element) => {
    gsap.to(element, {
      duration: 2.5,
      opacity: 1,
      x: 0,
      ease: "power4.out",
    });
  };

  const fadeOutFromRight = (element) => {
    gsap.to(element, {
      duration: 2.5,
      opacity: 0,
      x: 100,
      ease: "power4.out",
    });
  };
  const fadeOut = (element) => {
    gsap.to(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
    });
  };

  if (homeIntersection) {
    if (homeIntersection.isIntersecting) {
      fadeIn(".front-quote");
      fadeIn(".author-name");
    } else {
      fadeOut(".front-quote");
      fadeOut(".author-name");
    }
  }

  if (aboutTextIntersection) {
    if (aboutTextIntersection.isIntersecting) {
      fadeIn(".fadeIn");
      fadeInFromRight(".about-lower-img");
    } else {
      fadeOut(".fadeIn");
      fadeOutFromRight(".about-lower-img");
    }
  }

  if (eventsIntersection) {
    if (eventsIntersection.isIntersecting) {
      fadeIn(".event-list");
    } else {
      fadeOut(".event-list");
    }
  }

  if (connectIntersection) {
    if (connectIntersection.isIntersecting) {
      fadeIn(".connect-img");
    } else {
      fadeOut(".connect-img");
    }
  }

  return (
    <>
      <Layout />
      <BurgerMenu />
      <section id="home" ref={homeSectionRef}>
        <img className="top-img" src="desktop-top.webp" alt="top-img" />
        <h1>Electromatic</h1>
        <p className="front-quote">
          Electric power is ever present in unlimited quantaties and can drive
          the worlds machinery without the need of coal, oil, gas or any of
          common fuels{" "}
        </p>
        <p className="author-name"> -Nicola Tesla </p>
        <img
          className="bottom-img"
          src="frontpage-bottom.png"
          alt="bottom-img"
        />
      </section>
      <section id="events" ref={eventsSectionRef}>
        <h1>Latest events</h1>
        <div className="event-list">
          {events &&
            events.map((e, i) => {
              return <EventCard props={e} key={i} />;
            })}
        </div>
        <div className="events-bottom">
          <a href="/events">
            <button className="all-events-btn"> All events</button>
          </a>
        </div>
      </section>
      <section id="about" ref={aboutSectionRef}>
        <h1>About</h1>
        <p className="fadeIn">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <img
          className="about-lower-img"
          src="about-lower.png"
          alt="about-lower-img"
        />
      </section>
      <section id="connect" ref={connectSectionRef}>
        <h1>Connect</h1>
        <p className="connect-text">
          {" "}
          Trust us with your email and we’ll use it only when you want us to.{" "}
        </p>
        <EmailForm />
        <img className="connect-img" src="connect-img.png" alt="arrow" />
      </section>
    </>
  );
}

export default Home;
