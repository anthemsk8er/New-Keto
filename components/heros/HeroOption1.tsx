// FIX: Implemented component to resolve module errors.
import React from 'react';
import { CheckCircleIcon } from '../icons/CheckCircleIcon';
import Button from '../ui/Button';

const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public';

const HeroOption1: React.FC = () => {
  const benefits = [
    'Activa la cetosis rápidamente',
    'Aumenta la energía y el enfoque',
    'Controla el apetito y los antojos'
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="lg:col-span-6 lg:order-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              <span className="block">La Vía Rápida Hacia</span>
              <span className="block text-purple-400">la Pérdida de Peso</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-300">
              Con Keto Burner, tu cuerpo se convierte en una máquina de quemar grasa 24/7. Descubre cómo nuestra fórmula natural te ayuda a lograrlo sin esfuerzo.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <p className="ml-3 text-base text-zinc-200">{benefit}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button size="lg">Quiero Empezar Ahora</Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 lg:order-1 relative">
             <div className="relative mx-auto w-full max-w-md">
                 <img className="w-full" src={`${GITHUB_ASSETS_URL}/product-bottle.png`} alt="Botella de Keto Burner" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOption1;
