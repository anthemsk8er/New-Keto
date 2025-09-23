import React from 'react';

export const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
      clipRule="evenodd"
    />
    <path d="M11.25,8.887 C10.329,8.317,9,8.85,9,9.887 L9,15.113 C9,16.15,10.329,16.683,11.25,16.113 L16.853,13.00 C17.774,12.43,17.774,11.57,16.853,11.00 Z" fill="#FFFFFF" />
  </svg>
);