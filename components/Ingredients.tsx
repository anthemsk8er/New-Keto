
import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public';

const ingredients = [
    { name: 'Fruto Dragón', description: 'Potente diurético y desinflamatorio natural que ayuda a eliminar la retención de líquidos.' },
    { name: 'Diente de León', description: 'Contribuye a oxidar las grasas acumuladas y mejora la digestión de las mismas.' },
    { name: 'Alcachofa', description: 'Actúa como un prebiótico, mejorando la flora intestinal y brindando una sensación de saciedad.' },
    { name: 'Hojas de Stevia', description: 'Ayudan a controlar el apetito y la ansiedad al proporcionar una duradera sensación de llenura.' },
];

const Ingredients: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Impulsado por Ingredientes Naturales
            </h2>
            <p className="mt-4 text-xl text-zinc-300">
              Nuestra fórmula está hecha con una mezcla patentada de ingredientes totalmente naturales diseñados para ser seguros y efectivos.
            </p>
            <ul className="mt-8 space-y-5">
                {ingredients.map(item => (
                    <li key={item.name} className="flex items-start">
                        <div className="flex-shrink-0">
                           <CheckCircleIcon className="h-7 w-7 text-purple-400"/>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-medium text-white">{item.name}</h4>
                            <p className="text-zinc-400">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
          <div className="mt-10 lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto rounded-lg shadow-xl"
              src={`${GITHUB_ASSETS_URL}/ingredients.jpg`}
              alt="Ingredientes Naturales"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
