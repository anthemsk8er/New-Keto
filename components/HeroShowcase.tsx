// FIX: Implemented component to resolve module errors.
import React from 'react';
import { PlayCircleIcon } from './icons/PlayCircleIcon';
import Button from './ui/Button';

const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public';

const HeroShowcase: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={`${GITHUB_ASSETS_URL}/hero-background.jpg`}
          alt="Background"
        />
        <div className="absolute inset-0 bg-zinc-950 opacity-80" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              <span className="block">Desbloquea Tu Potencial</span>
              <span className="block text-purple-400">Quema Grasa</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-300 max-w-md mx-auto lg:mx-0">
              Nuestra fórmula avanzada de Keto Burner está diseñada para ayudarte a alcanzar la cetosis más rápido y quemar grasa como combustible principal.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">Comprar Ahora</Button>
              <Button size="lg" variant="secondary">
                Ver Video
                <PlayCircleIcon className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                className="w-full rounded-2xl shadow-2xl"
                src={`${GITHUB_ASSETS_URL}/product-showcase.jpg`}
                alt="Product Showcase"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="text-white hover:text-purple-400 transition-transform hover:scale-110">
                  <PlayCircleIcon className="w-24 h-24" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroShowcase;
