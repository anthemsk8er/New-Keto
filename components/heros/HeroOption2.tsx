// FIX: Implemented component to resolve module errors.
import React from 'react';
import Button from '../ui/Button';

const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public';

const HeroOption2: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              <span className="block">Tu Transformación Comienza</span>
              <span className="block text-purple-400">con una Decisión</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-300">
              Deja de soñar con el cuerpo que quieres y empieza a construirlo hoy. Keto Burner es el aliado que necesitas para quemar grasa de forma eficiente y sostenible.
            </p>
            <div className="mt-10">
              <Button size="lg">Reclama tu Oferta Especial</Button>
            </div>
            <div className="mt-12 relative mx-auto w-full max-w-lg">
                 <img className="w-full" src={`${GITHUB_ASSETS_URL}/product-bottle-3.png`} alt="Tres botellas de Keto Burner" />
             </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOption2;
