import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  robux: number;
  price: number;
}

const OrderModal = ({ isOpen, onClose, robux, price }: OrderModalProps) => {
  const [robloxUsername, setRobloxUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!robloxUsername.trim() || !email.trim()) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      toast({
        title: 'Заказ оформлен!',
        description: `Инструкции по оплате отправлены на ${email}`,
      });
      setIsProcessing(false);
      setRobloxUsername('');
      setEmail('');
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">Оформление заказа</DialogTitle>
          <DialogDescription>
            Заполните форму для покупки {robux.toLocaleString()} Robux
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="robloxUsername">Ваш никнейм в Roblox</Label>
            <Input
              id="robloxUsername"
              placeholder="Введите никнейм"
              value={robloxUsername}
              onChange={(e) => setRobloxUsername(e.target.value)}
              disabled={isProcessing}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email для связи</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isProcessing}
            />
          </div>

          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Количество Robux:</span>
              <span className="font-semibold text-lg">{robux.toLocaleString()} R$</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">К оплате:</span>
              <span className="font-bold text-2xl text-gradient">{price}₽</span>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
            <div className="flex items-start gap-3">
              <Icon name="CreditCard" size={20} className="text-primary mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-sm mb-2">Реквизиты для оплаты:</p>
                <div className="bg-background/50 rounded p-2 font-mono text-sm break-all">
                  2202 2081 9249 5605
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  После оплаты отправьте чек на email или в Telegram
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Icon name="Clock" size={16} className="text-primary mt-0.5" />
              <span>Робуксы поступят на ваш аккаунт в течение 5-6 дней</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Icon name="Shield" size={16} className="text-primary mt-0.5" />
              <span>Мы используем только безопасные методы пополнения</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
              disabled={isProcessing}
            >
              Отмена
            </Button>
            <Button
              type="submit"
              className="flex-1 glow-primary"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                  Обработка...
                </>
              ) : (
                <>
                  <Icon name="Check" size={18} className="mr-2" />
                  Оформить заказ
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
