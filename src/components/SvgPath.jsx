import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Bunny from './Bunny';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


function SvgPath({children}) {

    const containerRef = useRef(null);
  const bunnRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const bunny = bunnRef.current;
    const content = contentRef.current;

    gsap.to(bunny, {
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        
      },
      ease: `CustomEase.create("custom", "M0,0 C0.29,0 0.294,0.018 0.365,0.103 0.434,0.186 0.568,0.22 0.6,0.36 0.62,0.45 0.716,0.493 0.819,0.541 0.969,0.611 0.932,0.763 1,0.98 ")`,
      scrollTrigger: {
        trigger: containerRef.current,
        pinnedContainer: "#main",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
      },

      
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef}  >
        <svg className='absolute left-24 ' id='main' width="1366" height="6624" viewBox="0 0 1466 6924" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id='path' d="M3.00005 2.50027C3.00005 2.50027 830.364 2.50027 1360.5 2.50027C1361.41 1.28967 1442.5 -9.00001 1429 67.5003V453C1429 453 1429 547.5 1360.5 549.5H849.5H66.0001C66.0001 549.5 3.00005 549.5 3.00005 670.5C3.00005 791.5 3.00005 1056 3.00005 1056C3.00005 1056 -11.4999 1211.5 66.0001 1211.5C143.5 1211.5 1210 1211.5 1334 1211.5C1458 1211.5 1429 1341.5 1429 1341.5V2042.5C1429 2042.5 1429 2142 1334 2142C1239 2142 146.5 2142 66.0001 2142C-14.5 2142 3.00005 2271.5 3.00005 2271.5V3024.5C3.00005 3024.5 15.9999 3098 118 3098C220 3098 508 3098 624.5 3098C741 3098 732.5 3236.5 732.5 3236.5C732.5 3236.5 732.5 3886.5 732.5 3950.5C732.5 4014.5 559.5 4011.5 559.5 4011.5C559.5 4011.5 233 4011.5 118 4011.5C3.00004 4011.5 3.00005 4115 3.00005 4115C3.00005 4115 3.00005 4602 3.00005 4687.5C3.00005 4773 118 4765 118 4765C118 4765 1218 4765 1334 4765C1450 4765 1463 4888.5 1463 4888.5V5758.5C1463 5758.5 1467 6493.5 1463 6617C1459 6740.5 1364 6742 1364 6742C1271.05 6742 1138.01 6742 1081 6742C989.001 6742 988 6811 988 6811V6923.5" stroke="black"/>

            <image ref={bunnRef} href="/images/bunny.png" className='z-40' width="70" height="70" />
        </svg>
        <div ref={contentRef} className=' relative '>
            {children}
        </div>
    </div>
  )
}

export default SvgPath
