import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              О <span className="text-gradient">Сервисе</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              RobuxShop — надёжный сервис покупки робуксов для Roblox
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎮</div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-3">Кто мы такие?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Мы — команда энтузиастов Roblox, которая помогает игрокам получать робуксы 
                      по честным ценам. Работаем с 2022 года и за это время обслужили более 10,000 
                      довольных клиентов. Наша миссия — сделать покупку робуксов доступной и безопасной 
                      для всех игроков.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⏱️</div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-3">Почему 5-6 дней доставка?</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Мы используем официальную систему групповых выплат Roblox, которая является 
                      самым безопасным способом передачи робуксов. Roblox автоматически задерживает 
                      все групповые выплаты на 5-6 дней — это встроенная защита платформы от 
                      мошенничества, на которую мы не можем повлиять.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Почему мы не можем ускорить процесс:</strong> Это 
                      техническое ограничение самой платформы Roblox, а не нашего сервиса. Любой сервис, 
                      который обещает мгновенную доставку, использует небезопасные методы, которые могут 
                      привести к бану вашего аккаунта.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="Shield" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-heading font-bold text-lg">100% Безопасность</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Используем только официальные методы Roblox. Ваш аккаунт полностью защищён 
                    от блокировки.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon name="HeadphonesIcon" size={24} className="text-secondary" />
                    </div>
                    <h4 className="font-heading font-bold text-lg">24/7 Поддержка</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Наша команда всегда готова помочь. Отвечаем в течение нескольких минут 
                    в любое время суток.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="RefreshCw" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-heading font-bold text-lg">Гарантия возврата</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Если робуксы не поступят в течение 7 дней, мы вернём деньги без вопросов.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon name="TrendingDown" size={24} className="text-secondary" />
                    </div>
                    <h4 className="font-heading font-bold text-lg">Лучшие цены</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Наши цены на 40-60% ниже официальных. Чем больше покупаете — тем выгоднее.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-heading font-bold mb-3">Правила и условия</h3>
                <div className="text-muted-foreground space-y-2 max-w-2xl mx-auto text-left">
                  <p>• Доставка робуксов происходит в течение 5-6 дней через официальную систему Roblox</p>
                  <p>• Мы никогда не запрашиваем ваш пароль от аккаунта Roblox</p>
                  <p>• Возврат средств возможен, если робуксы не поступили в течение 7 дней</p>
                  <p>• Один аккаунт может получать робуксы не чаще одного раза в 7 дней</p>
                  <p>• При оплате вы соглашаетесь с нашими условиями обслуживания</p>
                  <p>• Мы не несём ответственности за ошибки в указанном имени пользователя</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
