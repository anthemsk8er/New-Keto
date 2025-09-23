
import React from 'react';

export const BrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 1.43.9 2.68 2.15 3.19a4.5 4.5 0 0 0 0 4.62A4.5 4.5 0 0 0 12 22a4.5 4.5 0 0 0 4.5-4.5c0-1.43-.9-2.68-2.15-3.19a4.5 4.5 0 0 0 0-4.62A4.5 4.5 0 0 0 12 2Z"></path>
        <path d="M12 2v20"></path><path d="M2 12h20"></path>
        <path d="M12 2a7.5 7.5 0 0 1 7.5 7.5"></path>
        <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5"></path>
        <path d="M12 22a7.5 7.5 0 0 0 7.5-7.5"></path>
        <path d="M12 22a7.5 7.5 0 0 1-7.5-7.5"></path>
    </svg>
);
