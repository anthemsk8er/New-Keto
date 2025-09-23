// FIX: Implemented component to resolve module errors.
import React from 'react';
import Button from './ui/Button';

const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-zinc-900 rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="relative pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">¿Listo para cambiar tu vida?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-zinc-300">
                No esperes más para conseguir el cuerpo que siempre has deseado. Con nuestra garantía de satisfacción, no tienes nada que perder, excepto esos kilos de más.
              </p>
              <div className="mt-8">
                <Button size="lg">
                    Reclama tu Botella con Descuento
                </Button>
              </div>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src={`${GITHUB_ASSETS_URL}/product-bottle-3.png`}
              alt="Tres botellas de Keto Burner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
