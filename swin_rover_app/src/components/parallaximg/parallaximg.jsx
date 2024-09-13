import * as React from 'react';
import { useEffect, useRef } from 'react';
import './parallaximg.css';

function ParallaxImg({ img_src, text, text_italic }) {
  const parallaxRef = useRef(null);

  const handleScroll = () => {
    if (parallaxRef.current) {
      let offset = 30 + ((window.scrollY / window.innerHeight) * 40);
      if (offset < 30) {
        offset = 30;
      }
      if (offset > 100) {
        offset = 100;
      }

      parallaxRef.current.animate(
        {
          backgroundPosition: `50% ${offset}%`,
        },
        { duration: 750, fill: 'forwards' }
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="parallax-img"
      style={{ backgroundImage: `url(${img_src})` }}
    >
      <h1>
        {text}
        <i>{text_italic}</i>
      </h1>
    </div>
  );
}

export default ParallaxImg;
