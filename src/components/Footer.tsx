import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <span className="text-xl font-heading font-bold text-gradient">RobuxShop</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Надёжный сервис покупки робуксов для Roblox. Работаем с 2022 года.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://vk.com/robuxshop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <Icon name="Users" size={18} />
              </a>
              <a 
                href="https://t.me/robuxshop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <Icon name="Send" size={18} />
              </a>
              <a 
                href="https://discord.gg/robuxshop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <Icon name="MessageCircle" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('catalog')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Каталог
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Отзывы
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  О сервисе
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Правила и условия
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacts')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Контакты
                </button>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Mail" size={16} className="text-primary" />
                support@robuxshop.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Send" size={16} className="text-primary" />
                @robuxshop_support
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Clock" size={16} className="text-primary" />
                24/7 онлайн
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RobuxShop. Все права защищены.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              Мы не аффилированы с Roblox Corporation. Roblox — зарегистрированная торговая марка Roblox Corporation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
