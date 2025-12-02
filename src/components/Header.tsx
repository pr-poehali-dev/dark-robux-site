import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-purple">
              <span className="text-2xl">💎</span>
            </div>
            <span className="text-xl font-heading font-bold text-gradient">RobuxShop</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О сервисе
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <Button onClick={() => scrollToSection('catalog')} className="hidden md:flex glow-purple">
            <Icon name="ShoppingCart" size={18} />
            <span className="ml-2">Купить</span>
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </button>
            <button onClick={() => scrollToSection('reviews')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              О сервисе
            </button>
            <button onClick={() => scrollToSection('contacts')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('catalog')} className="w-full mt-4 glow-purple">
              <Icon name="ShoppingCart" size={18} />
              <span className="ml-2">Купить</span>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
