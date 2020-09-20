import React, { useRef, useState } from "react";
import Introduction from "./components/Introduction";
import Abstract from "./components/Abstract";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function MainPage() {
  const [scrolled, setScrolled] = useState(0);
  const [swipeY, setSwipeY] = useState(null);

  const sectionRef = useRef();

  const scrollDown = (e) => {
    if (e.type === "touchstart") {
      setSwipeY(e.touches[0].clientY);
    }

    if (e.type === "touchmove") {
      if (swipeY - e.touches[0].clientY > 45) {
        setScrolled(1);
      }
    }

    if (e.type === "click") {
      e.preventDefault();
      setScrolled(1);
    }

    if ((scrolled === 0) & (e.deltaY > 0)) {
      setScrolled(1);
    }
  };

  const scrollUp = (e) => {
    if (e.type === "touchstart") {
      setSwipeY(e.touches[0].clientY);
    }

    if (e.type === "touchmove") {
      if (
        (scrolled === 1) &
        (sectionRef.current.scrollTop === 0) &
        (swipeY - e.touches[0].clientY < -45)
      ) {
        setScrolled(0);
      }
    }

    if (
      (scrolled === 1) &
      (sectionRef.current.scrollTop === 0) &
      (e.deltaY < 0)
    ) {
      setScrolled(0);
    }
  };

  return (
    <div id="container">
      <Introduction scrolled={scrolled} scrollDown={scrollDown} />
      <section
        ref={sectionRef}
        className={scrolled === 1 ? "moveup" : null}
        onWheel={scrollUp}
        onTouchStart={scrollUp}
        onTouchMove={scrollUp}
        id="section"
      >
        <Abstract />
        <Skills />
        <Contact />
        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
}

export default MainPage;
