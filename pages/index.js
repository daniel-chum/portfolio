import { useRef, useState } from "react";
import LandingPage from "../components/LandingPage";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import cn from "classnames"

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
    <>
      <LandingPage scrolled={scrolled} scrollDown={scrollDown} />
      <section
        ref={sectionRef}
        className={cn( 'relative bg-white font-open-sans overflow-y-scroll transition transform ease-in-out duration-1000 h-screen', { " -translate-y-full": scrolled } )}
        onWheel={scrollUp}
        onTouchStart={scrollUp}
        onTouchMove={scrollUp}
        id="section"
      >
        <Introduction />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default MainPage;
