// FIX: Implemented component to resolve module errors.
import React from 'react';

const steps = [
  {
    id: 1,
    name: 'Toma Tu Dosis Diaria',
    description: 'Simplemente toma 2 cápsulas de Keto Burner al día con un vaso de agua. Recomendamos tomarlo por la mañana para empezar el día con energía.',
  },
  {
    id: 2,
    name: 'Disfruta de sus Beneficios',
    description: 'Siente cómo tu cuerpo empieza a utilizar la grasa como energía, dándote más vitalidad, reduciendo el apetito y mejorando tu enfoque mental.',
  },
  {
    id: 3,
    name: 'Alcanza Tus Metas',
    description: 'Con un uso constante, Keto Burner te ayuda a alcanzar tus objetivos de pérdida de peso más rápido, permitiéndote disfrutar de tu nuevo cuerpo y estilo de vida.',
  },
];

const HowToUse: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Fácil de Incorporar en Tu Rutina
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-300">
            Lograr tus metas nunca ha sido tan sencillo. Solo sigue estos 3 simples pasos.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.id} className="pt-6">
                <div className="flow-root bg-zinc-950 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                        <span className="text-white font-bold text-xl">{`0${step.id}`}</span>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{step.name}</h3>
                    <p className="mt-5 text-base text-zinc-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
