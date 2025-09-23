// FIX: Implemented component to resolve module errors.
import React from 'react';
import Button from '../ui/Button';

const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public';

const HeroOption3: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                    <span className="block text-purple-400">Simple.</span>
                    <span className="block">Efectivo.</span>
                    <span className="block">Natural.</span>
                </h1>
                <p className="mt-6 text-lg text-zinc-300">
                    Keto Burner: La fórmula definitiva para la pérdida de peso que se adapta a tu vida.
                </p>
                <div className="mt-10">
                    <Button size="lg">Comprar Ahora y Ahorrar</Button>
                </div>
            </div>
        </div>
      </div>
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
        <img 
            className="w-full h-full object-cover object-center" 
            src={`${GITHUB_ASSETS_URL}/woman-smiling.jpg`}
            alt="Mujer feliz con los resultados de Keto Burner" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroOption3;
