// FIX: Implemented component to resolve module errors.
import React from 'react';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { UsersIcon } from './icons/UsersIcon';
import { GiftIcon } from './icons/GiftIcon';

const bonuses = [
    {
        name: 'Guía de Nutrición Keto',
        description: 'Un e-book completo con recetas deliciosas y fáciles para acelerar tus resultados.',
        value: 47,
        icon: BookOpenIcon,
    },
    {
        name: 'Acceso a Comunidad VIP',
        description: 'Únete a nuestro grupo exclusivo para recibir apoyo, motivación y consejos de expertos.',
        value: 97,
        icon: UsersIcon,
    },
    {
        name: 'Plan de Entrenamiento en Casa',
        description: 'Rutinas efectivas que puedes hacer en casa para tonificar tu cuerpo mientras quemas grasa.',
        value: 67,
        icon: GiftIcon,
    }
];

const Bonuses: React.FC = () => {
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Ordena Hoy y Recibe 3 Bonos GRATIS
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-300">
                        Valorados en $211, estos regalos exclusivos están diseñados para maximizar tus resultados.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {bonuses.map(bonus => (
                        <div key={bonus.name} className="p-6 rounded-lg bg-zinc-900 text-center flex flex-col items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white">
                                    <bonus.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-white">{bonus.name}</h3>
                            <p className="mt-2 text-zinc-400 flex-grow">{bonus.description}</p>
                            <div className="mt-4 font-semibold text-purple-400">
                                Valor: ${bonus.value} <span className="text-white">GRATIS</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Bonuses;
