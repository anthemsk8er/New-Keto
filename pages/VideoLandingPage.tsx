import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

const VIDEO_URL_1 = 'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/Video/landing2-top.mp4';
const PRODUCT_IMAGE_URL = 'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/Video/caps%20landing.png';
const WHATSAPP_LINK = 'https://wa.link/ventasketoburner';

const sliderImages = [
  'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/1%20recibido.jfif',
  'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/2%20recibido.jfif',
  'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/3%20recibido.jfif',
  'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/4%20recibido.jfif',
  'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/5%20recibido.jfif',
  'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/6%20recibido.jfif',
  'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/7%20recibido.jfif',
];

// FIX: Cast ReactPlayer to `any` to resolve a TypeScript error.
const AnyReactPlayer = ReactPlayer as any;

const bannerMessages = [
  "Pago seguro - Contraentrega",
  "Envíos a nivel nacional",
];

interface Store {
  name: string;
  status: 'DISPONIBLE' | 'AGOTADO';
  logo: string;
  link?: string;
}

const VideoLandingPage: React.FC = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const [sliderAnimationKey, setSliderAnimationKey] = useState(100);
  const [formData, setFormData] = useState({
    weight: '',
    age: '',
    name: '',
    whatsapp: '',
  });

  const stores: Store[] = [
    { name: 'Falabella', status: 'DISPONIBLE', logo: 'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/falabella.com.png', link: 'https://www.falabella.com.pe/falabella-pe/product/147509626/KETOBURNER-KetoPROMO-X2-Pack-Verano-+-Asesorias-+-RecetarioFIT/147509627' },
    { name: 'Inkafarma', status: 'AGOTADO', logo: 'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/inkafarma.png' },
    { name: 'Ripley', status: 'AGOTADO', logo: 'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/ripley.png' },
    { name: 'Mifarma', status: 'AGOTADO', logo: 'https://uylwgmvnlnnkkvjqirhx.supabase.co/storage/v1/object/public/products/ketoburnerus/mifarma.png' },
  ];

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex(prevIndex => (prevIndex + 1) % bannerMessages.length);
      setAnimationKey(prevKey => prevKey + 1);
    }, 3000); // Change text every 3 seconds

    const sliderInterval = setInterval(() => {
      setCurrentSliderIndex(prevIndex => (prevIndex + 1) % sliderImages.length);
      setSliderAnimationKey(prevKey => prevKey + 1); // For re-triggering animation
    }, 3000);

    return () => {
        clearInterval(bannerInterval);
        clearInterval(sliderInterval);
    };
  }, []);

  const handleRedirect = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const benefits = [
    'Quema grasas',
    'Elimina líquidos retenidos',
    'Reduce la ansiedad'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { weight, age, name, whatsapp } = formData;
    if (!weight || !age || !name || !whatsapp) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const phoneNumber = '51965210993'; // número actualizado
    const message = `¡Hola! Quiero más información sobre Keto Burner. Mis datos son:\n\n*Nombre:* ${name}\n*Edad:* ${age} años\n*Quiero perder:* ${weight} kg\n*Mi WhatsApp:* ${whatsapp}\n\n¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(url, '_blank');
  };

  const iosInputClasses = "w-full bg-[#2c2c2e] text-white rounded-xl py-3 px-4 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-200 border-0 text-base";
  const iosLabelClasses = "block text-zinc-400 text-sm font-medium mb-2";

  return (
    <div className="min-h-screen w-full bg-[#00004f] flex justify-center">
      <div className="w-full md:max-w-2xl overflow-y-auto">
        
        {/* Top Banner */}
        <div className="w-full bg-yellow-400 text-black text-center py-2 font-bold">
          <span key={animationKey} className="animate-fadeIn">
            {bannerMessages[currentBannerIndex]}
          </span>
        </div>

        {/* First Video Section */}
        <div
          className="relative w-full cursor-pointer overflow-hidden"
          onClick={handleRedirect}
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
             <AnyReactPlayer
                url={VIDEO_URL_1}
                playing={true}
                muted={true}
                loop={true}
                playsinline={true}
                controls={false}
                width="100%"
                height="auto"
                config={{ file: { attributes: { style: { width: '100%', height: '100%', objectFit: 'cover' } } } }}
             />
          </div>
    
           {/* Content */}
           <div className="relative z-20 flex flex-col justify-center text-left text-white p-6 pl-4 sm:p-8">
           
             <h2 className="text-md md:text-xl leading-[1.2] mb-2 font-semibold text-zinc-200">
               3 CÁPSULAS DIARIAS <br/>
              HACEN LA DIFERENCIA
             </h2>
            
             <h1 className="font-bebas text-[2rem] leading-none md:text-7xl mt-1 text-white uppercase tracking-narrow">
               Si estás buscando <br/>
                perder peso
             </h1>

             <ul className="mt-1 space-y-1">
               {benefits.map((benefit, index) => (
                 <li key={index} className="flex items-center gap-3">
                   <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
                   <span className="text-md md:text-lg">{benefit}</span>
                 </li>
               ))}
             </ul>
             <div className="mt-2 -ml-1">
                <img 
                    src={PRODUCT_IMAGE_URL} 
                    alt="Botellas de Keto Burner"
                    className="w-[200px] max-w-sm"
                />
            </div>
           </div>
        </div>

        {/* Button Section */}
        <div className="w-full p-4 bg-[#00004f] flex-col justify-center items-center">
           <button
             onClick={handleRedirect}
             className="w-full flex items-center justify-center gap-4 mb-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-lg shadow-lg animate-pulse-cta"
           >
             <WhatsAppIcon className="w-9 h-9 flex-shrink-0" />
             <div className="text-left text-sm leading-tight">
               <span className="block">Hablar con un asesor por whatsapp</span>
               <span className="block font-normal">Aprovecha el Contraentrega</span>
             </div>
           </button>
            
 
           
           
            {/* Store Availability Section */}
            <div className="grid grid-cols-4 gap-1 sm:gap-4 mt-2 w-full max-w-md mx-auto">
              {stores.map((store) => {
                const isAvailableWithLink = store.status === 'DISPONIBLE' && store.link;
                const Tag = isAvailableWithLink ? 'a' : 'div';
                const props = isAvailableWithLink 
                  ? { href: store.link, target: '_blank', rel: 'noopener noreferrer' } 
                  : {};

                return (
                  <Tag key={store.name} {...props} className="flex flex-col items-center justify-start gap-2">
                    <div className="w-full aspect-square flex items-center justify-center p-2 bg-black/20 rounded-md">
                      <img 
                        src={store.logo} 
                        alt={store.name}
                        className="h-[30px] max-h-[30px] max-w-full object-contain"
                      />
                    </div>
                    <span
                      className={`px-2 py-1 text-[10px] sm:text-xs font-bold rounded-md whitespace-nowrap ${
                        store.status === 'DISPONIBLE'
                          ? 'bg-indigo-700 text-yellow-300 animate-pulse-cta'
                          : 'bg-indigo-700 text-cyan-400'
                      }`}
                    >
                      {store.status}
                    </span>
                  </Tag>
                );
              })}
            </div>



        </div>
        
        {/* Social Proof Section */}
        <div className="w-full p-6 sm:p-8 bg-[#0a0a2e]">
          <div className="flex flex-row items-center gap-4">
            
            {/* Image Slider */}
            <div className="w-1/3 aspect-[3/4] rounded-2xl bg-purple-900/50 flex items-center justify-center overflow-hidden">
              <img
                key={sliderAnimationKey}
                src={sliderImages[currentSliderIndex]}
                alt="Cliente satisfecho con su pedido"
                className="w-full h-full object-cover animate-fadeIn"
              />
            </div>

            {/* Text Content */}
            <div className="w-2/3 text-left">
              <h2 className="text-white-900 font-bebas text-l md:text-4xl leading-tight tracking-wide">
                APROVECHA EL CONTRAENTREGA
              </h2>
              <h3 className="text-white-900 font-bebas text-2xl md:text-4xl leading-tight mt-1 tracking-wide">
                +10,000 PEDIDOS ENTREGADOS EN EL PERÚ
              </h3>
              <p className="text-zinc-300 text-xs mt-3">
                ENVÍOS SEGUROS POR SHALOM, ALICLIK Y OLVA COURIER
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <section className="w-full p-6 sm:p-8 bg-[#0a0a2e]">
          <div className="bg-indigo-950/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-md mx-auto shadow-2xl border border-purple-800/30">
            <div className="text-center mb-8">
              <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-wide">
                ¡Empieza tu Transformación!
              </h2>
              <p className="text-zinc-400 mt-2">
                Completa el formulario y una asesora te contactará por WhatsApp.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="weight" className={iosLabelClasses}>Peso a perder (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                    className={iosInputClasses}
                    placeholder="Ej: 10"
                  />
                </div>
                <div>
                  <label htmlFor="age" className={iosLabelClasses}>Tu Edad</label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    className={iosInputClasses}
                    placeholder="Ej: 35"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className={iosLabelClasses}>Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={iosInputClasses}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className={iosLabelClasses}>Número de WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className={iosInputClasses}
                  placeholder="Ej: 987654321"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
                <span className="text-base">Contactar Asesora</span>
              </button>
            </form>
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="w-full bg-[#00004f] py-8 text-center">
            <div className="container mx-auto px-4">
                <a 
                href="https://ketoburner.us" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white transition-colors text-base"
                >
                KetoBurner.us Distribuidores Oficiales de la Marca en Perú
                </a>
                <p className="mt-4 text-zinc-500 text-sm">
                &copy; 2025 - Keto Burner Perú
                </p>
            </div>
        </footer>

      </div>
    </div>
  );
};

export default VideoLandingPage;