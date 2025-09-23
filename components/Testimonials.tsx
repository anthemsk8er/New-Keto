// FIX: Implemented component to resolve module errors.
import React from 'react';
import { StarIcon } from './icons/StarIcon';

const testimonials = [
  {
    name: 'Laura V.',
    title: 'Cliente Verificado',
    quote: '¡He perdido 10 kilos en 2 meses! Keto Burner me dio la energía que necesitaba para mantenerme activa y suprimió mis antojos de azúcar. ¡Lo recomiendo totalmente!',
    avatar: 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public/avatars/avatar-1.jpg',
  },
  {
    name: 'Carlos M.',
    title: 'Cliente Verificado',
    quote: 'Era escéptico al principio, pero los resultados hablan por sí solos. Tengo más energía para mis entrenamientos y finalmente estoy viendo la definición muscular que quería. Gran producto.',
    avatar: 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public/avatars/avatar-2.jpg',
  },
  {
    name: 'Sofía R.',
    title: 'Cliente Verificado',
    quote: 'Lo mejor de Keto Burner es la claridad mental. Me siento más enfocada en el trabajo y con energía todo el día. La pérdida de peso ha sido un bono increíble.',
    avatar: 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public/avatars/avatar-3.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Lo que Dicen Nuestros Clientes Satisfechos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-300">
            Miles de personas ya han transformado sus vidas con Keto Burner.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-zinc-900 rounded-lg shadow-lg p-8 flex flex-col">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mt-6 text-zinc-300 flex-grow">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <footer className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">{testimonial.name}</div>
                    <div className="text-base text-purple-400">{testimonial.title}</div>
                  </div>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
