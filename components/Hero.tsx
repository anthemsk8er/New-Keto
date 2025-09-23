import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import Button from './ui/Button';

// NOTA: Estas URLs de video son placeholders y deberían ser reemplazadas por archivos de video reales.
const GITHUB_VIDEO_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public/videos';
const DESKTOP_VIDEO_URL = `${GITHUB_VIDEO_URL}/hero-desktop.mp4`;
const MOBILE_VIDEO_URL = `${GITHUB_VIDEO_URL}/hero-mobile.mp4`;


const Hero: React.FC = () => {
  const benefits = [
    'Potente quemador de grasa',
    'Elimina líquidos retenidos',
    'Reduce la ansiedad y el apetito'
  ];

  return (
    <section className="relative flex items-center justify-center h-screen text-white overflow-hidden">
      {/* Contenedor del Video de Fondo */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* Video de Escritorio (Horizontal) */}
        <video
          className="hidden lg:block w-full h-full object-cover"
          src={DESKTOP_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Video Móvil (Vertical) */}
        <video
          className="block lg:hidden w-full h-full object-cover"
          src={MOBILE_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      
      {/* Superposición Oscura */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
          <span className="block">Transforma Tu Cuerpo</span>
          <span className="block text-purple-400">Energiza Tu Vida</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto drop-shadow-md">
          Con Cápsulas Keto Burner, convierte tu cuerpo en una máquina de quemar grasa. Descubre el poder de nuestra fórmula natural.
        </p>
        <ul className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-purple-400 mr-2" />
              <span className="text-base text-zinc-100">{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button size="lg">
            Quiero Empezar Mi Transformación
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
