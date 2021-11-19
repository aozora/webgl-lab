import React, { useLayoutEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const IntroJapan = ({ nextRoom }) => {
  const videoRef = useRef();
  const mangaRef = useRef();
  const ghibliRef = useRef();

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

  useLayoutEffect(() => {
    if (mangaRef) {
      const sections = mangaRef.current.querySelectorAll('section');
      sections.forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 1
            }
          }
        );
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (ghibliRef) {
      const tileRows = ghibliRef.current.querySelectorAll('.tiles__wrap .tiles__line');

      tileRows.forEach((tileRow, index) => {
        // const [y, yEnd] =
        //   index % 2 ? ['100%', (tileRow.scrollHeight - tileRow.offsetHeight) * -1] : [tileRow.scrollHeight * -1, 0];

        gsap.fromTo(
          tileRow,
          { y: 0 },
          {
            y: index % 2 ? '10%' : '-10%',
            scrollTrigger: {
              trigger: ghibliRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true
            }
          }
        );
      });
    }
  }, []);

  return (
    <article className="intro-japan">
      <h2 id="room4" ref={ref}>
        Japan
      </h2>

      <figure className="video-full-container">
        <video ref={videoRef} autoPlay={false} loop={false} muted={true} controls={false}>
          <source src="/video/earth-to-japan.mp4" type="video/mp4" />
        </video>
      </figure>

      <h3>Manga</h3>
      <div ref={mangaRef} className="horizontal-scroll-wrapper">
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img loading="lazy" src="/img/manga/IMG_3168-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/manga/IMG_3166-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/manga/IMG_3167-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/manga/IMG_3165-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img loading="lazy" src="/img/manga/IMG_3169-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/manga/IMG_3170-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/manga/IMG_3171-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img loading="lazy" src="/img/manga/IMG_3172-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/manga/IMG_3173-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/manga/IMG_3174-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/manga/IMG_3175-removebg-preview.jpeg" width="433" height="577" alt="" />
            </li>
          </ul>
        </section>
      </div>

      <h3>Studio Ghibli</h3>
      <section ref={ghibliRef} className="tiles tiles--columns-rotated tiles--darker">
        <div className="tiles__wrap">
          <div className="tiles__line is-inview">
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/marnie.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/kaguya.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/wind.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/poppy.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/arietty.jpg)' }} />
          </div>

          <div className="tiles__line is-inview">
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/ponyo.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/earthsea.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/howl.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/cat.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/spirited.jpg)' }} />
          </div>

          <div className="tiles__line is-inview">
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/yamadas.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/mononoke.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/whisper.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/omoide.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/ocean.jpg)' }} />
          </div>

          <div className="tiles__line is-inview">
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/grave.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/totoro.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/kiki.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/porco.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/pompoko.jpg)' }} />
          </div>

          <div className="tiles__line is-inview">
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/laputa.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/nausicaa.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/mononoke.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/marnie.jpg)' }} />
            <div className="tiles__line-img" style={{ backgroundImage: 'url(/img/studio-ghibli/porco.jpg)' }} />
          </div>
        </div>
      </section>

      <button type="button" className="next-room no-sticky" onClick={nextRoom} style={{ marginTop: '3.5rem' }}>
        Next
      </button>
    </article>
  );
};

export default IntroJapan;
