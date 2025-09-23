// FIX: Implemented component to resolve module errors.
import React from 'react';

const logos = [
  'forbes.svg',
  'techcrunch.svg',
  'the-new-york-times.svg',
  'cnn.svg',
  'usa-today.svg',
];
const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public/logos';


const Logos: React.FC = () => {
  return (
    <div className="py-8 bg-zinc-900 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold uppercase text-zinc-400 tracking-wider">
          Como se ve en
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo} className="col-span-1 flex justify-center">
              <img
                className="h-10"
                src={`${GITHUB_ASSETS_URL}/${logo}`}
                alt={logo.split('.')[0]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;
