
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-zinc-400">
          <p className="max-w-3xl mx-auto">
            Las declaraciones hechas en nuestros sitios web no han sido evaluadas por la FDA (Administración de Alimentos y Medicamentos de EE. UU.). Este producto no está destinado a diagnosticar, curar o prevenir ninguna enfermedad. La información proporcionada por este sitio web o esta empresa no sustituye una consulta cara a cara con su médico y no debe interpretarse como un consejo médico individual.
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-zinc-400 hover:text-white text-sm">Política de Privacidad</a>
          <a href="#" className="text-zinc-400 hover:text-white text-sm">Términos de Servicio</a>
          <a href="#" className="text-zinc-400 hover:text-white text-sm">Contáctanos</a>
        </div>
        <div className="mt-8 text-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Keto Burner. Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;