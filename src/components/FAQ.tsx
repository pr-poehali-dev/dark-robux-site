import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: 'Как происходит доставка робуксов?',
    answer: 'После оплаты заказа мы добавляем робуксы на ваш аккаунт Roblox через официальную систему групповых выплат. Это полностью безопасный метод, который не нарушает правила Roblox. Доставка занимает 5-6 дней из-за технических особенностей платформы.'
  },
  {
    question: 'Почему доставка занимает 5-6 дней?',
    answer: 'Roblox имеет встроенную систему безопасности, которая задерживает все групповые выплаты на 5-6 дней. Это стандартная практика платформы для защиты от мошенничества. Мы не можем ускорить этот процесс, так как это ограничение самой платформы Roblox.'
  },
  {
    question: 'Это безопасно для моего аккаунта?',
    answer: 'Абсолютно безопасно! Мы используем только официальные методы Roblox для передачи робуксов. Ваш аккаунт не подвергается никакому риску блокировки. Мы работаем уже более 2 лет и обслужили более 10,000 клиентов без единого случая бана.'
  },
  {
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем банковские карты (Visa, Mastercard, МИР), электронные кошельки (ЮMoney, QIWI, WebMoney), переводы по СБП, а также криптовалюту (Bitcoin, Ethereum, USDT). Все платежи проходят через защищённые платёжные системы.'
  },
  {
    question: 'Что делать, если робуксы не пришли?',
    answer: 'Если после 7 дней робуксы не поступили на ваш аккаунт, немедленно свяжитесь с нашей службой поддержки через Telegram, Discord или email. Мы проверим статус заказа и решим проблему в течение 24 часов. Также предоставим полный возврат средств, если проблему невозможно решить.'
  },
  {
    question: 'Могу ли я вернуть деньги?',
    answer: 'Да, мы предоставляем гарантию возврата средств. Если в течение 7 дней робуксы не поступили на ваш аккаунт, мы вернём полную сумму без каких-либо вопросов. Возврат обрабатывается в течение 1-3 рабочих дней.'
  },
  {
    question: 'Нужно ли предоставлять пароль от аккаунта?',
    answer: 'Нет! Мы НИКОГДА не просим ваш пароль. Для доставки робуксов нам нужно только ваше имя пользователя в Roblox. Остерегайтесь мошенников, которые просят пароль — это нарушение безопасности.'
  },
  {
    question: 'Есть ли скидки при больших покупках?',
    answer: 'Да! Чем больше робуксов вы покупаете за раз, тем выгоднее цена за единицу. Наши самые большие пакеты (10,000+ робуксов) имеют скидку до 30% по сравнению с маленькими пакетами. Также следите за нашими акциями в Telegram-канале.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Вопросы и <span className="text-gradient">Ответы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о покупке робуксов
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Не нашли ответ на свой вопрос?</p>
          <a 
            href="#contacts" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Свяжитесь с нами →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
