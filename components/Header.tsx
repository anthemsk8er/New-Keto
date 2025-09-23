// FIX: Implemented component to resolve module errors.
import React from 'react';
import Button from './ui/Button';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';

interface HeaderProps {
  onNavigateToPromo: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateToPromo }) => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/70 backdrop-blur-lg border-b border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-white">Keto <span className="text-purple-400">Burner</span></span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
                <Button onClick={onNavigateToPromo} variant="secondary">
                  Ver Promoción
                </Button>
                <Button>
                    <ShoppingCartIcon className="h-5 w-5 mr-2" />
                    <span>Ordenar Ahora</span>
                </Button>
            </div>
            <div className="md:hidden">
                <Button onClick={onNavigateToPromo} size="sm">
                  Ver Promo
                </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
