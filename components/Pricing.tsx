// FIX: Implemented component to resolve module errors.
import React from 'react';
import Button from './ui/Button';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const GITHUB_ASSETS_URL = 'https://raw.githubusercontent.com/anthemsk8er/revoreitor-health-hub/main/public';

const pricingTiers = [
    {
        name: '1 Botella',
        price: 69,
        originalPrice: 99,
        description: 'Suministro para 30 días',
        image: `${GITHUB_ASSETS_URL}/product-bottle.png`,
        features: ['Ideal para probar', 'Envío estándar'],
        bestValue: false,
    },
    {
        name: '3 Botellas',
        price: 59,
        originalPrice: 89,
        description: 'Suministro para 90 días',
        image: `${GITHUB_ASSETS_URL}/product-bottle-3.png`,
        features: ['Ahorra un 15%', 'Envío GRATIS', 'Resultados a largo plazo'],
        bestValue: true,
    },
    {
        name: '6 Botellas',
        price: 49,
        originalPrice: 79,
        description: 'Suministro para 180 días',
        image: `${GITHUB_ASSETS_URL}/product-bottle-6.png`,
        features: ['Máximo Ahorro', 'Envío GRATIS', 'Compromiso total'],
        bestValue: false,
    },
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-16 sm:py-24 bg-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Elige tu Paquete y Ahorra Hoy
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-300">
                        Aprovecha nuestros descuentos por volumen y asegura tu transformación. ¡Envío gratis en paquetes seleccionados!
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {pricingTiers.map((tier) => (
                        <div key={tier.name} className={`rounded-2xl p-8 flex flex-col text-center bg-zinc-950 shadow-lg ${tier.bestValue ? 'border-2 border-purple-500 relative' : 'border border-zinc-800'}`}>
                            {tier.bestValue && (
                                <div className="absolute top-0 -translate-y-1/2 transform left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center px-4 py-1 text-sm font-semibold tracking-wider text-white uppercase bg-purple-600 rounded-full">
                                        Más Popular
                                    </span>
                                </div>
                            )}
                            <div className="flex-shrink-0">
                                <img src={tier.image} alt={tier.name} className="h-40 mx-auto" />
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">{tier.name}</h3>
                            <p className="mt-2 text-zinc-400">{tier.description}</p>
                            
                            <div className="my-8">
                                <span className="text-5xl font-extrabold text-white">${tier.price}</span>
                                <span className="text-base font-medium text-zinc-400">/ botella</span>
                                <p className="mt-2 text-zinc-500 line-through">Antes ${tier.originalPrice}</p>
                            </div>

                            <Button size="lg" className="w-full">Ordenar Ahora</Button>

                            <ul className="mt-8 space-y-4 text-left">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <CheckCircleIcon className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <p className="ml-3 text-zinc-300">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
