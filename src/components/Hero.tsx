import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="text-6xl mb-4 animate-scale-in">💎</div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-gradient leading-tight">
            Покупай Robux
            <br />
            Быстро и Безопасно
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Лучшие цены на робуксы для Roblox. Автоматическая доставка в течение 5-6 дней. 
            Гарантия возврата средств.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToCatalog}
              className="text-lg px-8 py-6 glow-purple hover:scale-105 transition-transform"
            >
              <Icon name="ShoppingCart" size={24} />
              <span className="ml-2">Выбрать пакет</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-2 hover:bg-primary/10"
            >
              <Icon name="Info" size={24} />
              <span className="ml-2">Узнать больше</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all hover:scale-105">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-heading font-semibold text-lg mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">Автоматический вывод через 5-6 дней</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary transition-all hover:scale-105">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-heading font-semibold text-lg mb-2">100% Безопасно</h3>
              <p className="text-sm text-muted-foreground">Защита аккаунта гарантирована</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all hover:scale-105">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-heading font-semibold text-lg mb-2">Выгодные цены</h3>
              <p className="text-sm text-muted-foreground">Лучшие курсы на рынке</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
