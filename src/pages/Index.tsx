import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const packages = [
    { amount: 400, price: 250, badge: 'Популярно' },
    { amount: 800, price: 480, badge: null },
    { amount: 1700, price: 950, badge: 'Выгодно' },
    { amount: 4500, price: 2400, badge: null },
    { amount: 10000, price: 5100, badge: 'ХИТ' },
  ];

  const reviews = [
    { name: 'Александр', rating: 5, text: 'Быстрая доставка робуксов! Всё пришло за 4 дня, как и обещали.' },
    { name: 'Мария', rating: 5, text: 'Отличный сервис, уже второй раз покупаю. Поддержка отвечает быстро!' },
    { name: 'Дмитрий', rating: 5, text: 'Цены ниже чем в официальном магазине, всё безопасно. Рекомендую!' },
    { name: 'Анна', rating: 4, text: 'Всё хорошо, но пришлось ждать 6 дней. В целом доволен!' },
  ];

  const faqs = [
    {
      question: 'Как происходит доставка робуксов?',
      answer: 'После оплаты мы добавляем робуксы на ваш аккаунт в течение 5-6 дней. Вы получите уведомление на email.'
    },
    {
      question: 'Это безопасно для моего аккаунта?',
      answer: 'Да, мы используем официальные методы пополнения. Ваш аккаунт в полной безопасности.'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем банковские карты, электронные кошельки и криптовалюту.'
    },
    {
      question: 'Что делать, если робуксы не пришли?',
      answer: 'Свяжитесь с нашей поддержкой в Telegram или по email. Мы решим проблему в течение 24 часов.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-primary">
                <Icon name="Coins" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">RobuXshop</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('rules')} className="text-foreground hover:text-primary transition-colors">
                Правила
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </nav>

            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden" variant="ghost" size="icon">
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors text-left">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors text-left">
                Каталог
              </button>
              <button onClick={() => scrollToSection('rules')} className="text-foreground hover:text-primary transition-colors text-left">
                Правила
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors text-left">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors text-left">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors text-left">
                Контакты
              </button>
            </nav>
          )}
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                Покупай Robux выгодно
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Надёжный сервис по продаже робуксов с доставкой за 5-6 дней
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => scrollToSection('catalog')} size="lg" className="text-lg glow-primary">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить сейчас
                </Button>
                <Button onClick={() => scrollToSection('faq')} size="lg" variant="outline" className="text-lg">
                  <Icon name="HelpCircle" size={20} className="mr-2" />
                  Как это работает?
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5-6 дней</div>
                  <div className="text-sm text-muted-foreground">Доставка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Безопасно</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
              Каталог робуксов
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Выбери подходящий пакет и пополни баланс
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                  {pkg.badge && (
                    <Badge className="absolute top-4 right-4 bg-secondary glow-secondary">
                      {pkg.badge}
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow-primary">
                      <Icon name="Coins" size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-3xl text-center">{pkg.amount}</CardTitle>
                    <CardDescription className="text-center">Robux</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary mb-4">{pkg.price} ₽</div>
                    <Button className="w-full glow-primary">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="rules" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
              Правила и условия
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Важная информация перед покупкой
            </p>
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Сроки доставки</h3>
                    <p className="text-muted-foreground">
                      Робуксы поступают на ваш аккаунт в течение 5-6 дней после оплаты. Этот срок связан с особенностями системы Roblox.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="Shield" size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
                    <p className="text-muted-foreground">
                      Мы используем только официальные методы пополнения. Ваш аккаунт не будет заблокирован.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="XCircle" size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Возврат средств</h3>
                    <p className="text-muted-foreground">
                      Возврат возможен только в случае, если робуксы не поступили в течение 7 дней.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Требования к аккаунту</h3>
                    <p className="text-muted-foreground">
                      Ваш аккаунт Roblox должен быть активен и не иметь ограничений на получение робуксов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
              Вопросы и ответы
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Ответы на популярные вопросы
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="reviews" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
              Отзывы пользователей
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Что говорят наши клиенты
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
              О сервисе
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Кто мы и почему нам можно доверять
            </p>
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-muted-foreground">
                  RobuXshop — это надёжный сервис по продаже робуксов, который работает с 2020 года. Мы помогли тысячам игроков пополнить баланс в Roblox по выгодным ценам.
                </p>
                <p className="text-lg text-muted-foreground">
                  Наша команда использует только официальные методы пополнения, что гарантирует безопасность вашего аккаунта. Мы работаем напрямую с системой Roblox, поэтому процесс занимает 5-6 дней.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold mb-2">10000+</div>
                    <div className="text-muted-foreground">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold mb-2">5 лет</div>
                    <div className="text-muted-foreground">На рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="ThumbsUp" size={32} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold mb-2">99%</div>
                    <div className="text-muted-foreground">Положительных отзывов</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
              Контакты
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Свяжитесь с нами удобным способом
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-colors text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Send" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Telegram</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Быстрые ответы в мессенджере</p>
                  <Button className="w-full">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Написать
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Mail" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">support@robuxshop.ru</p>
                  <Button className="w-full" variant="outline">
                    <Icon name="Mail" size={18} className="mr-2" />
                    Написать
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="MessageSquare" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Онлайн-чат</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Ответим за 5 минут</p>
                  <Button className="w-full" variant="outline">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Открыть чат
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Coins" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">RobuXshop</span>
            </div>
            <div className="text-center text-muted-foreground">
              <p>© 2024 RobuXshop. Все права защищены.</p>
              <p className="text-sm mt-2">Мы не связаны с Roblox Corporation</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
