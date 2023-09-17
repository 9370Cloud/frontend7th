import './CodeUi.css'
import React, { useEffect, useRef, useState } from 'react';



function CodeUi(){

    const aboutMe = {
        name: '승혁 김',
        job: '백수',
        contact: {
          email: '개인 프라이버시임',
          website: '여기임'
        }
      };

      const [isVisible, setIsVisible] = useState(false);
      const codeRef = useRef(null);

      useEffect(() => {
        const handleScroll = () => {
          const codeElement = codeRef.current;
    
          if (codeElement) {
            const rect = codeElement.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
              // 요소가 화면에 보이는 범위 내에 있을 때
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          }
        };
    
        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return( <div className={`card ${isVisible ? 'visible' : ''}`} ref={codeRef}>
    <div className="card-back">
      <div className="line-numbers">
        {Array.from({ length: 9 }, (_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
      </div>
      <code>
        <span className="variable">const </span>
        <span className="function">aboutMe </span>
        <span className="operator">= </span>
        <span>{'{'}</span>
        <div className="indent">
          <span className="property">name</span>
          <span className="operator">: </span>
          <span className="string">'{aboutMe.name}'</span>
          <span>,</span>
        </div>
        <div className="indent">
          <span className="property">job</span>
          <span className="operator">: </span>
          <span className="string">'{aboutMe.job}'</span>
          <span>,</span>
        </div>
        <div className="indent">
          <span className="property">contact</span>
          <span className="operator">: </span>
          <span>{'{'}</span>
          <div className="indent">
            <span className="property">email</span>
            <span className="operator">: </span>
            <span className="string">'{aboutMe.contact.email}'</span>
            <span>,</span>
          </div>
          <div className="indent">
            <span className="property">website</span>
            <span className="operator">: </span>
            <span className="string">'{aboutMe.contact.website}'</span>
          </div>
          <span>{'}'}</span>
        </div>
        <span>{'}'}</span>
      </code>
    </div>
  </div>)
}

export default CodeUi