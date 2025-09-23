
// FIX: Implemented component to resolve module errors.
import React from 'react';

const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public';

const About: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="relative">
            <img 
              className="rounded-lg shadow-xl w-full" 
              src={`${GITHUB_ASSETS_URL}/woman-smiling.jpg`}
              alt="Mujer sonriendo" 
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              ¿Qué es Keto Burner y Cómo Funciona?
            </h2>
            <p className="mt-4 text-xl text-zinc-300">
              Keto Burner es un suplemento dietético avanzado diseñado para ayudar a tu cuerpo a entrar en el estado de cetosis, donde quema grasa como combustible en lugar de carbohidratos.
            </p>
            <p className="mt-4 text-zinc-300">
              Nuestra fórmula única no solo acelera la quema de grasa, sino que también aumenta tus niveles de energía, mejora la claridad mental y ayuda a controlar el apetito, haciendo que tu viaje de pérdida de peso sea más fácil y efectivo.
            </p>
            <p className="mt-4 text-zinc-300">
              Con Keto Burner, puedes alcanzar tus objetivos de fitness más rápido y disfrutar de una vida más saludable y enérgica sin los efectos secundarios de las dietas extremas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
