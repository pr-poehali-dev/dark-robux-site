import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const packages = [
  {
    id: 1,
    robux: 400,
    price: 299,
    popular: false,
    discount: null,
    icon: '⭐'
  },
  {
    id: 2,
    robux: 800,
    price: 549,
    popular: true,
    discount: '10%',
    icon: '🔥'
  },
  {
    id: 3,
    robux: 1700,
    price: 1099,
    popular: false,
    discount: '15%',
    icon: '💫'
  },
  {
    id: 4,
    robux: 4500,
    price: 2799,
    popular: false,
    discount: '20%',
    icon: '👑'
  },
  {
    id: 5,
    robux: 10000,
    price: 5999,
    popular: false,
    discount: '25%',
    icon: '💎'
  },
  {
    id: 6,
    robux: 22500,
    price: 12999,
    popular: false,
    discount: '30%',
    icon: '🚀'
  }
];

const Catalog = () => {
  const handlePurchase = (robux: number, price: number) => {
    alert(`Покупка ${robux} Robux за ${price}₽. Функция оформления заказа будет добавлена позже!`);
  };

  return (
    <section id="catalog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Каталог <span className="text-gradient">Пакетов</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий пакет робуксов. Чем больше покупаете — тем выгоднее цена!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={`relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl ${
                pkg.popular ? 'border-primary border-2 glow-purple' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                    Популярный
                  </Badge>
                </div>
              )}

              {pkg.discount && (
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                    Скидка {pkg.discount}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pt-8">
                <div className="text-5xl mb-4">{pkg.icon}</div>
                <CardTitle className="text-3xl font-heading font-bold">
                  {pkg.robux.toLocaleString()} R$
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Robux для вашего аккаунта
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-heading font-bold text-gradient">
                  {pkg.price}₽
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Доставка 5-6 дней</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Shield" size={16} className="text-secondary" />
                    <span>Гарантия безопасности</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="RefreshCw" size={16} className="text-primary" />
                    <span>Возврат средств</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full glow-purple" 
                  size="lg"
                  onClick={() => handlePurchase(pkg.robux, pkg.price)}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Icon name="ShoppingCart" size={18} />
                  <span className="ml-2">Купить сейчас</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            💳 Принимаем все популярные способы оплаты: карты, электронные кошельки, криптовалюта
          </p>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
