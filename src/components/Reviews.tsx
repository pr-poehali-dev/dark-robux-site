import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    id: 1,
    name: 'Александр',
    avatar: 'АЛ',
    rating: 5,
    date: '15 ноября 2024',
    text: 'Отличный сервис! Робуксы пришли через 6 дней, всё честно как обещали. Цены намного выгоднее чем официальные.',
    robux: 1700
  },
  {
    id: 2,
    name: 'Мария',
    avatar: 'МС',
    rating: 5,
    date: '12 ноября 2024',
    text: 'Покупаю здесь уже третий раз. Всё быстро, безопасно, поддержка отвечает моментально. Рекомендую!',
    robux: 800
  },
  {
    id: 3,
    name: 'Дмитрий',
    avatar: 'ДК',
    rating: 5,
    date: '10 ноября 2024',
    text: 'Сначала сомневался, но решил попробовать. Всё пришло вовремя, аккаунт в безопасности. Буду покупать ещё!',
    robux: 4500
  },
  {
    id: 4,
    name: 'Анна',
    avatar: 'АВ',
    rating: 5,
    date: '8 ноября 2024',
    text: 'Лучший сервис для покупки робуксов! Покупала для ребёнка, всё прошло гладко. Спасибо за честность!',
    robux: 400
  },
  {
    id: 5,
    name: 'Максим',
    avatar: 'МП',
    rating: 5,
    date: '5 ноября 2024',
    text: 'Очень доволен! Экономия огромная по сравнению с официальным магазином. Доставка заняла 5 дней.',
    robux: 10000
  },
  {
    id: 6,
    name: 'Елена',
    avatar: 'ЕМ',
    rating: 5,
    date: '2 ноября 2024',
    text: 'Всё отлично! Заказывала для сына, робуксы пришли быстро. Очень выгодные цены, спасибо!',
    robux: 1700
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Отзывы <span className="text-gradient">Клиентов</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 10,000 довольных клиентов уже получили свои робуксы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading font-semibold">{review.name}</h4>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  {review.text}
                </p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="Package" size={14} className="text-primary" />
                  <span>Купил {review.robux.toLocaleString()} Robux</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-gradient">4.9</div>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold">Отличный рейтинг</div>
              <div className="text-sm text-muted-foreground">На основе 10,000+ отзывов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
