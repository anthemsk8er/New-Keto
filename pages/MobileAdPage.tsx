import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { PlayIcon } from '../components/icons/PlayIcon';
import { WavyDivider } from '../components/ui/WavyDivider';
import { EyeIcon } from '../components/icons/EyeIcon';

// URLs de assets para replicar el diseño
const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public';
const KETO_ASSETS_URL = 'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/medallas.png';

const VIDEO_URL = 'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/Video/video%20kb%20intro.mp4';
const VIDEO_THUMBNAIL_URL = `https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/videothumbnail.jpg`;
const PRODUCT_IMAGE_URL = `https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/imagenbeneficios+.png`;

const socialProofMessages = [
  "+150 personas empezaron tratamiento los últimos 15 días",
  "+2600 personas mejoraron su peso y salud con Keto Burner",
  "+6 años en el mercado con productos y servicios de calidad"
];

// Lista de asesores de WhatsApp con nombre y número
const whatsappAdvisors = [
  { name: 'Daniela', number: '51904339929' },
  { name: 'Gabriela', number: '51907331366' },
  { name: 'Fernanda', number: '51904682240' },
  { name: 'Matías', number: '51978207916' },
  { name: 'Georginna', number: '51933201671' },
  { name: 'Rosa', number: '51933536284' }
];

const MobileAdPage: React.FC = () => {
  const [viewerCount, setViewerCount] = useState(12);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [key, setKey] = useState(0); // Key to re-trigger animation
  const [currentAdvisorIndex, setCurrentAdvisorIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    // Random viewer count effect
    const min = 2;
    const max = 25;
    const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
    setViewerCount(randomCount);

    // Carousel effect for social proof messages
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1); // Update key to restart animation
      setCurrentMessageIndex(prevIndex => (prevIndex + 1) % socialProofMessages.length);
    }, 3500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleCtaClick = () => {
    // 1. Seleccionar el asesor actual de forma secuencial
    const selectedAdvisor = whatsappAdvisors[currentAdvisorIndex];

    // 2. Actualizar el índice para el próximo clic, en un ciclo
    setCurrentAdvisorIndex((prevIndex) => (prevIndex + 1) % whatsappAdvisors.length);

    // 3. Crear el mensaje personalizado con el nombre del asesor
    const message = `Hola ${selectedAdvisor.name}, me interesa perder peso, por favor me gustaría que me asesoren y saber cuál sería el tratamiento para mi.`;
    const encodedMessage = encodeURIComponent(message);

    // 4. Construir y abrir la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${selectedAdvisor.number}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center text-center">
        
        {/* Header Section */}
        <section className="w-full py-8 pb-3 pt-12 px-2">
          <h1 className="font-bebas text-5xl md:text-6xl text-cyan-300 tracking-narrow">
            ¡ESTA VEZ SIN EXCUSAS!
          </h1>
          <h2 className="font-bebas text-[1.3rem] md:text-2xl text-cyan-300 mt-2 tracking-narrow">
            ASESORÍAS SEMANALES PARA ACOMPAÑARTE EN TU MEJORÍA
          </h2>
        </section>

        {/* Video Section */}
        <section className="w-full relative px-4">
           <div className="w-full aspect-video overflow-hidden rounded-lg shadow-xl relative">
              {!isPlaying ? (
                  <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                      <img src={VIDEO_THUMBNAIL_URL} alt="Video Thumbnail" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-red-600 w-24 h-24 md:w-32 md:h-32 transform transition hover:scale-110 opacity-90 hover:opacity-100">
                              <PlayIcon />
                          </div>
                      </div>
                  </div>
              ) : (
                  <ReactPlayer
                      url={VIDEO_URL}
                      playing={true}
                      controls={true}
                      width="100%"
                      height="100%"
                  />
              )}
           </div>
        </section>

        {/* Social Proof - Viewer Count */}
        <div className="w-full flex items-center justify-center gap-2 mt-2 text-zinc-400 text-xs sm:text-sm">
          <EyeIcon className="w-4 h-4" />
          <span>
            <strong>{viewerCount}</strong> personas están viendo el video
          </span>
        </div>
        
        {/* CTA Buttons Section */}
        <section className="w-full py-6 pb-2 px-4 flex flex-col items-center gap-4">
          <button 
            onClick={handleCtaClick}
            className="w-full max-w-md bg-purple-700 text-cyan-300 font-bebas p-4 rounded-lg shadow-lg border-b-4 border-purple-900/80 transform transition hover:scale-105 active:border-b-2 animate-fadeInUp animation-fill-backwards animate-pulse-slow"
          >
            <div className="flex flex-col items-center justify-center leading-tight">
              <span className="text-2xl md:text-3xl">QUIERO PERDER PESO, HABLAR CON UN ASESOR</span>
              <span className="text-xl md:text-2xl mt-1">APROVECHA EL CONTRAENTREGA</span>
              <span className="text-base md:text-lg mt-1">HASTA 40% DE DESCUENTO EN PROMOCIONES SELECCIONADAS</span>
            </div>
          </button>
        </section>
        
        {/* Social Proof & Product Section */}
        <section className="relative w-full pb-4 px-4 flex flex-col items-center">
            {/* Social Proof Carousel */}
            <div className="flex items-center gap-4 bg-zinc-800/80 p-3 rounded-xl mb-6 w-full max-w-sm">
                <div className="flex-shrink-0">
                    <img loading="lazy" className="w-32 h-auto" src={`https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/perfiles.png`} alt="Perfiles de clientes"/>
                </div>
                <div className="text-white text-sm text-left font-semibold flex-1  h-12 flex items-center overflow-hidden">
                   <p key={key} className="animate-slideInFromRight">
                      {socialProofMessages[currentMessageIndex]}
                   </p>
                </div>
            </div>

            {/* Product Image */}
           <img loading="lazy" src={PRODUCT_IMAGE_URL} alt="Productos Keto Burner con beneficios" className="w-full max-w-lg mx-auto" />
        </section>
        
        {/* Footer with Badges */}
        <footer className="relative w-full bg-stone-100 pt-16 pb-8 px-4 text-center">
            <WavyDivider />
            <div className="flex justify-center items-center mb-3">
                <img loading="lazy" src={`${KETO_ASSETS_URL}`} alt="Insignias de calidad" className="h-16 md:h-20"/>
            </div>
            <a href="https://ketoburner.us" target="_blank" rel="noopener noreferrer" className="font-bebas text-2xl text-black hover:underline mt-2 block">
                KETOBURNER.US - Distribuidores Oficiales de la marca en Perú
             </a>
             <a href="https://kbsuplementos.com/#productos/gomitas-para-dormir" target="_blank" rel="noopener noreferrer" className="font-bebas text-base text-black hover:underline mt-2 block">
                ¿Estás buscando dormir mejor?
             </a>
        </footer>

      </main>
    </div>
  );
};

export default MobileAdPage;