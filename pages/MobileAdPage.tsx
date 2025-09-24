import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { PlayIcon } from '../components/icons/PlayIcon';
import { WavyDivider } from '../components/ui/WavyDivider';
import { EyeIcon } from '../components/icons/EyeIcon';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

// URLs de assets para replicar el diseño
const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public';
const KETO_ASSETS_URL = 'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/medallas.png';

const VIDEO_URL = 'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/Video/video%20kb%20intro.mp4';
const PRODUCT_IMAGE_URL = `https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/KETO%20LANDING%20BENEFICIOS.png`;

const socialProofMessages = [
  "+150 personas empezaron tratamiento los últimos 15 días",
  "+2600 personas mejoraron su peso y salud con Keto Burner",
  "+6 años en el mercado con productos y servicios de calidad"
];

// FIX: Cast ReactPlayer to `any` to resolve a TypeScript error. This is a workaround
// for what appears to be an issue with the library's type definitions in this project's environment.
const AnyReactPlayer = ReactPlayer as any;

const MobileAdPage: React.FC = () => {
  const [viewerCount, setViewerCount] = useState(12);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [key, setKey] = useState(0); // Key to re-trigger animation
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    // Random viewer count effect
    const min = 2;
    const max = 25;
    const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
    setViewerCount(randomCount);

    // Carousel effect for social proof messages
    const carouselInterval = setInterval(() => {
      setKey(prevKey => prevKey + 1); // Update key to restart animation
      setCurrentMessageIndex(prevIndex => (prevIndex + 1) % socialProofMessages.length);
    }, 3500);

    // Timer for the modal
    const modalTimer = setTimeout(() => {
      setIsModalOpen(true);
    }, 4000); // 4 seconds

    return () => {
      clearInterval(carouselInterval);
      clearTimeout(modalTimer);
    };
  }, []);

  const handleCtaClick = () => {
    //1. CLICK EN LINK DE WHATSAPP
    const walink = 'https://wa.link/ventasketoburner' ;
    window.open(walink, '_blank')
  };


  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-gradient-to-r from-indigo-950 via-indigo-600 to-violet-600">

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center text-center">
        
{/* Marquee Section */}
        <section className="w-full bg-yellow-400 py-2 mt-0 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Content block 1 */}
            <div className="flex-shrink-0 flex items-center">
                <span className="text-black font-bold text-sm md:text-lg mx-4">
                  🔥 PAGO CONTRAENTREGA
                </span>
                <span className="text-purple-700 text-xl mx-4">
                  •
                </span>
                <span className="text-black font-bold text-md md:text-lg mx-4">
                  ASESORÍA GRATUITA
                </span>
                <span className="text-purple-700 text-xl mx-4">
                  •
                </span>
                <span className="text-black font-bold text-md md:text-lg mx-4">
                  OFERTAS POR TIEMPO LIMITADO
                </span>
            </div>
            {/* Content block 2 (for seamless loop) */}
            <div className="flex-shrink-0 flex items-center" aria-hidden="true">
                <span className="text-black font-bold text-md md:text-lg mx-4">
                  🔥 PAGO CONTRAENTREGA
                </span>
                <span className="text-purple-700 text-xl mx-4">
                  •
                </span>
                <span className="text-black font-bold text-md md:text-lg mx-4">
                  ASESORÍA GRATUITA
                </span>
                <span className="text-purple-700 text-xl mx-4">
                  •
                </span>
                <span className="text-black font-bold text-md md:text-lg mx-4">
                  OFERTAS POR TIEMPO LIMITADO
                </span>
            </div>
          </div>
        </section>

        {/* Header Section */}
        <section className="w-full py-8 pb-3 pt-4 px-2">
          <h1 className="font-bebas text-4xl md:text-6xl text-white-900 tracking-narrow">
            ¿ESTÁS BUSCANDO PERDER PESO?
          </h1>
          <h2 className="font-bebas text-[1.3rem] md:text-2xl text-white-600 mt-2 tracking-narrow">
            ASESORÍAS SEMANALES PARA ACOMPAÑARTE EN TU MEJORÍA
          </h2>
        </section>

        {/* Video Section */}
        <section className="w-full relative px-4">
           <div className="w-full aspect-video overflow-hidden rounded-lg shadow-xl relative">
              <AnyReactPlayer
                  url={VIDEO_URL}
                  playing={true}
                  muted={false}
                  volume={1}
                  playsinline={true}
                  controls={true}
                  width="100%"
                  height="100%"
              />
           </div>
        </section>

        {/* Social Proof - Viewer Count */}
        <div className="w-full flex items-center justify-center gap-2 mt-3 text-zinc-400 text-xs sm:text-sm">
          <EyeIcon className="w-4 h-4" />
          <span>
            <strong>{viewerCount}</strong> personas están viendo el video
          </span>
        </div>
        
        

        {/* CTA Button Section CTA*/}
        <section className="w-full py-6 pt-2 pb-2 px-4 flex flex-col items-center gap-4">
           <button
             onClick={handleCtaClick}
             className="w-full max-w-lg mx-auto flex items-center justify-center gap-4 bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-4 rounded-lg shadow-lg animate-pulse-cta"
           >
             <WhatsAppIcon className="w-9 h-9 flex-shrink-0 text-white" />
             <div className="text-left text-sm leading-tight">
               <span className="block">Hablar con un asesor por whatsapp</span>
               <span className="block font-normal">Aprovecha el Contraentrega</span>
               <span className="block font-normal text-xs">Recibe tu pedido entre 24 a 72 hrs</span>
             </div>
           </button>
        </section>
        
        {/* Social Proof & Product Section */}
        <section className="relative w-full pb-8 px-4 flex flex-col items-center">
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
        

{/* Marquee Section 2*/}
        <section className="w-full bg-yellow-400 py-2 mt-0 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Content block 1 */}
            <div className="flex-shrink-0 flex items-center">
                <span className="text-black font-bold text-sm md:text-lg mx-4">
                  🔥 PAGO CONTRAENTREGA
                </span>
                <span className="text-purple-700 text-xl mx-4">
                  •
                </span>
                <span className="text-black font-bold text-md md:text-lg mx-4">
                  ASESORÍA GRATUITA
                </span>
                <span className="text-purple-700 text-xl mx-4">
                  •
                </span>
                <span className="text-black font-bold text-md md:text-lg mx-4">
                  OFERTAS POR TIEMPO LIMITADO
                </span>
            </div>
            {/* Content block 2 (for seamless loop) */}
            <div className="flex-shrink-0 flex items-center" aria-hidden="true">
                <span className="text-black font-bold text-md md:text-lg mx-4">
                  🔥 PAGO CONTRAENTREGA
                </span>
                <span className="text-purple-700 text-xl mx-4">
                  •
                </span>
                <span className="text-black font-bold text-md md:text-lg mx-4">
                  ASESORÍA GRATUITA
                </span>
                <span className="text-purple-700 text-xl mx-4">
                  •
                </span>
                <span className="text-black font-bold text-md md:text-lg mx-4">
                  OFERTAS POR TIEMPO LIMITADO
                </span>
            </div>
          </div>
        </section>


        {/* Footer with Badges */}
        <footer className="relative w-full bg-stone-100 pt-4 pb-8 px-4 text-center">
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

      {/* Promotional Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-end">
          <div className="relative bg-white rounded-t-2xl p-6 pt-8 w-full text-center text-zinc-900 shadow-2xl animate-slideInFromBottom">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-800 p-1"
              aria-label="Cerrar modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-4xl sm:text-5xl font-bebas text-zinc-900 tracking-wide mb-4">
              ¡OFERTA EXCLUSIVA!
            </h3>
            <p className="mb-8 text-zinc-600 text-lg">
              Obtén mejores descuentos en nuestro canal de WhatsApp.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-lg transition-transform hover:scale-105 shadow-lg text-lg"
            >
              Aprovechar los descuentos
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileAdPage;