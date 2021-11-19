import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const IntroMoviesBooks = ({ nextRoom }) => {
  const booksRef = useRef();

  useLayoutEffect(() => {
    if (booksRef) {
      const sections = booksRef.current.querySelectorAll('section');
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

  return (
    <article className="intro-movies-books">
      <h2 id="room5">Movies & Books</h2>

      <div ref={booksRef} className="horizontal-scroll-wrapper">
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img loading="lazy" src="/img/books/IMG_3181-removebg-preview.png" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3182-removebg-preview.png" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3183-removebg-preview.png" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3184-removebg-preview.png" width="433" height="577" alt="" />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img loading="lazy" src="/img/books/IMG_3185-removebg-preview.png" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3186-removebg-preview.png" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3187-removebg-preview.png" width="433" height="577" alt="" />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img loading="lazy" src="/img/books/IMG_3188-removebg-preview.png" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3189-removebg-preview.png" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3191-removebg-preview.png" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3192-removebg-preview.png" width="433" height="577" alt="" />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img loading="lazy" src="/img/books/IMG_3193.jpeg" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3194-removebg-preview.png" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3195-removebg-preview.png" width="433" height="577" alt="" />
            </li>
            <li>
              <img loading="lazy" src="/img/books/IMG_3197-removebg-preview.png" width="433" height="577" alt="" />
            </li>
          </ul>
        </section>
      </div>

      {/*<button type="button" className="next-room no-sticky" onClick={nextRoom} style={{ marginTop: '3.5rem' }}>*/}
      {/*  Next*/}
      {/*</button>  */}
      <a
        href="https://personal-seed-1362cbuwt-marcellop.vercel.app/"
        target="_blank"
        className="button next-room no-sticky"
        style={{ marginTop: '3.5rem' }}
        rel="noreferrer"
      >
        Next
      </a>
    </article>
  );
};

export default IntroMoviesBooks;
