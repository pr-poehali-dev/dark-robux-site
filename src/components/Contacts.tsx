import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Свяжитесь с <span className="text-gradient">Нами</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы всегда на связи и готовы помочь. Выберите удобный способ связи
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Send" size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Telegram</h3>
              <p className="text-sm text-muted-foreground mb-4">Самый быстрый способ связи</p>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://t.me/robuxshop_support" target="_blank" rel="noopener noreferrer">
                  Написать в Telegram
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="MessageCircle" size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Discord</h3>
              <p className="text-sm text-muted-foreground mb-4">Общайтесь с командой</p>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://discord.gg/robuxshop" target="_blank" rel="noopener noreferrer">
                  Присоединиться
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-4">Для официальных запросов</p>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:support@robuxshop.com">
                  Написать письмо
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                    <Icon name="Clock" size={24} className="text-primary" />
                    Время работы
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Поддержка: 24/7
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Обработка заказов: 24/7
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Среднее время ответа: 5-10 минут
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                    <Icon name="Globe" size={24} className="text-secondary" />
                    Социальные сети
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="https://vk.com/robuxshop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon name="Users" size={16} />
                      Наше сообщество ВКонтакте
                    </a>
                    <a 
                      href="https://youtube.com/@robuxshop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon name="Youtube" size={16} />
                      YouTube канал с гайдами
                    </a>
                    <a 
                      href="https://instagram.com/robuxshop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon name="Instagram" size={16} />
                      Instagram с новостями
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Icon name="MessageSquare" size={20} className="text-primary" />
            <span className="text-sm font-medium">
              Отвечаем на все сообщения в течение 24 часов
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
