import React, { useRef, useEffect } from 'react';
import './marquee.css';

function Marquee() {
  const pTag1Ref = useRef(null);
  const textArr1 = 'Welcome! This is dataMindHub Welcome! This is dataMindHub Welcome! This is dataMindHub Welcome! This is dataMindHub Welcome!';
  let count1 = 0;

  useEffect(() => {
    const pTag1 = pTag1Ref.current;

    function marqueeText(count, element, direction) {
      if (count > element.scrollWidth / 2) {
        element.style.transform = `translate3d(0, 0, 0)`;
        count = 0;
      }
      element.style.transform = `translate3d(${direction * count*0.5}px, 0, 0)`;

      return count;
    }

    function animate() {
      count1++;

      count1 = marqueeText(count1, pTag1, -1);

      window.requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div>
      <div className="cover">
        <p ref={pTag1Ref} className="first-parallel">
          {textArr1}
        </p>
      </div>
    </div>
  );
}

export default Marquee;