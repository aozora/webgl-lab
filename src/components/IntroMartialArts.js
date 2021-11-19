import React, { useLayoutEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const IntroMartialArts = ({ nextRoom }) => {
  const videoRef = useRef();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 1000
  });

  useLayoutEffect(() => {
    if (inView) {
      videoRef.current.play();
    }
  }, [inView]);

  return (
    <article className="intro-martials">
      <h2 id="room3" ref={ref}>
        Martial Arts
      </h2>

      <figure className="video-full-container">
        <video ref={videoRef} autoPlay={false} loop={true} muted={true} controls={false}>
          <source src="/video/jackie-chan-trimmed.mp4" type="video/mp4" />
        </video>
      </figure>

      <div style={{ display: 'flex' }}>
        <button type="button" className="next-room no-sticky" onClick={nextRoom} style={{ marginTop: '2rem' }}>
          Next
        </button>
      </div>
    </article>
  );
};

export default IntroMartialArts;
