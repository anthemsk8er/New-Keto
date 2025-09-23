// FIX: Implemented component to resolve module errors.
import React from 'react';
import { FireIcon } from './icons/FireIcon';
import { ZapIcon } from './icons/ZapIcon';
import { BrainIcon } from './icons/BrainIcon';
import { HeartIcon } from './icons/HeartIcon';

const benefits = [
  {
    name: 'Quema Grasa Acelerada',
    description: 'Entra en cetosis más rápido y convierte tu cuerpo en una máquina de quemar grasa las 24 horas del día.',
    icon: FireIcon,
  },
  {
    name: 'Aumento de Energía',
    description: 'Experimenta niveles de energía constantes durante todo el día, sin los altibajos del azúcar.',
    icon: ZapIcon,
  },
  {
    name: 'Claridad Mental Mejorada',
    description: 'Disfruta de un enfoque más nítido y una mayor concentración para dominar tus tareas diarias.',
    icon: BrainIcon,
  },
  {
    name: 'Salud y Bienestar',
    description: 'Nuestra fórmula natural apoya tu bienestar general, ayudándote a sentirte y lucir increíble.',
    icon: HeartIcon,
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Transforma Tu Cuerpo y Mente
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-300">
            Keto Burner no es solo para perder peso. Es para desbloquear una versión más saludable y enérgica de ti.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="flex flex-col items-center text-center p-6 rounded-lg bg-zinc-900">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-white">{benefit.name}</h3>
                <p className="mt-2 text-base text-zinc-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
