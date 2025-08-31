import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 to-sky-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-earth-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Mountain" className="text-earth-500" size={32} />
              <h1 className="text-2xl font-heading font-bold text-earth-800">ДОЛИНА ПРИВИДЕНИЙ</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#tours" className="text-earth-600 hover:text-earth-800 transition-colors">Туры</a>
              <a href="#prices" className="text-earth-600 hover:text-earth-800 transition-colors">Цены</a>
              <a href="#gallery" className="text-earth-600 hover:text-earth-800 transition-colors">Галерея</a>
              <a href="#reviews" className="text-earth-600 hover:text-earth-800 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-earth-600 hover:text-earth-800 transition-colors">Контакты</a>
            </div>
            <Button className="bg-earth-500 hover:bg-earth-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/img/49eba0c3-339e-4f36-9955-345bb6b2b6d5.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6">
            ДЖИП ТУРЫ
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Исследуйте мистические пейзажи Долины Привидений на настоящих внедорожниках
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-earth-500 hover:bg-earth-600 text-white px-8 py-4 text-lg">
              <Icon name="MapPin" size={20} className="mr-2" />
              Выбрать тур
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-earth-800 px-8 py-4 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-earth-800 mb-4">
              Наши туры
            </h2>
            <p className="text-xl text-earth-600 max-w-2xl mx-auto">
              Выберите приключение по душе - от коротких экскурсий до многодневных экспедиций
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="h-48 bg-gradient-to-r from-earth-400 to-sky-400"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-forest-500">Популярный</Badge>
                  <div className="flex items-center text-earth-600">
                    <Icon name="Clock" size={16} className="mr-1" />
                    <span className="text-sm">4 часа</span>
                  </div>
                </div>
                <CardTitle className="text-xl">Классический тур</CardTitle>
                <CardDescription>
                  Знакомство с основными достопримечательностями Долины Привидений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-earth-600">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-forest-500" />
                    Обзорная экскурсия
                  </div>
                  <div className="flex items-center text-sm text-earth-600">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-forest-500" />
                    Фотостопы в красивых местах
                  </div>
                  <div className="flex items-center text-sm text-earth-600">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-forest-500" />
                    Легкий треккинг
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-earth-800">от 2500₽</span>
                  <Button className="bg-earth-500 hover:bg-earth-600">Забронировать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="h-48 bg-gradient-to-r from-sky-400 to-forest-400"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-sky-500">Экстрим</Badge>
                  <div className="flex items-center text-earth-600">
                    <Icon name="Clock" size={16} className="mr-1" />
                    <span className="text-sm">6 часов</span>
                  </div>
                </div>
                <CardTitle className="text-xl">Экстрим-сафари</CardTitle>
                <CardDescription>
                  Для любителей острых ощущений - самые сложные маршруты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-earth-600">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-forest-500" />
                    Экстремальные маршруты
                  </div>
                  <div className="flex items-center text-sm text-earth-600">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-forest-500" />
                    Скалолазание
                  </div>
                  <div className="flex items-center text-sm text-earth-600">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-forest-500" />
                    Обед на природе
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-earth-800">от 4500₽</span>
                  <Button className="bg-earth-500 hover:bg-earth-600">Забронировать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="h-48 bg-gradient-to-r from-forest-400 to-earth-400"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-earth-500">VIP</Badge>
                  <div className="flex items-center text-earth-600">
                    <Icon name="Clock" size={16} className="mr-1" />
                    <span className="text-sm">8 часов</span>
                  </div>
                </div>
                <CardTitle className="text-xl">VIP-экспедиция</CardTitle>
                <CardDescription>
                  Премиальный тур с максимальным комфортом и сервисом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-earth-600">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-forest-500" />
                    Индивидуальный гид
                  </div>
                  <div className="flex items-center text-sm text-earth-600">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-forest-500" />
                    Премиум автомобили
                  </div>
                  <div className="flex items-center text-sm text-earth-600">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-forest-500" />
                    Ресторанный обед
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-earth-800">от 8500₽</span>
                  <Button className="bg-earth-500 hover:bg-earth-600">Забронировать</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transfer Info Section */}
      <section className="py-20 bg-earth-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-earth-800 mb-4">
              Трансфер и точки сбора
            </h2>
            <p className="text-xl text-earth-600 max-w-2xl mx-auto">
              Удобная логистика для вашего комфорта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="MapPin" className="mr-3 text-earth-500" size={24} />
                  Точки сбора
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Clock" className="mr-3 mt-1 text-forest-500" size={16} />
                  <div>
                    <h4 className="font-semibold">Центральная площадь</h4>
                    <p className="text-earth-600">Ежедневно в 08:00, 12:00, 16:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="mr-3 mt-1 text-forest-500" size={16} />
                  <div>
                    <h4 className="font-semibold">Гостиница "Горы"</h4>
                    <p className="text-earth-600">Ежедневно в 08:30, 12:30, 16:30</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="mr-3 mt-1 text-forest-500" size={16} />
                  <div>
                    <h4 className="font-semibold">Автовокзал</h4>
                    <p className="text-earth-600">Ежедневно в 09:00, 13:00, 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Car" className="mr-3 text-earth-500" size={24} />
                  Услуги трансфера
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-earth-100 rounded-lg">
                  <span>Индивидуальный трансфер</span>
                  <Badge>от 500₽</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-earth-100 rounded-lg">
                  <span>Групповой трансфер</span>
                  <Badge>от 200₽</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-earth-100 rounded-lg">
                  <span>Трансфер из аэропорта</span>
                  <Badge>от 800₽</Badge>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-earth-500 hover:bg-earth-600">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать трансфер
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-earth-800 mb-4">
              Галерея
            </h2>
            <p className="text-xl text-earth-600">Фотографии наших незабываемых туров</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-8">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src="/img/34849553-4900-4cc4-893a-82a40a70bf98.jpg" 
                  alt="Долина Привидений" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/img/7ee1829b-051e-41ff-bbee-355b915c2f98.jpg" 
                  alt="Туристы в туре" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/img/49eba0c3-339e-4f36-9955-345bb6b2b6d5.jpg" 
                  alt="Джип тур" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-r from-earth-400 to-sky-400">
              </div>
            </div>
            <div className="space-y-8">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-r from-forest-400 to-earth-400">
              </div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-r from-sky-400 to-forest-400">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-earth-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-earth-800 mb-4">
              Отзывы туристов
            </h2>
            <p className="text-xl text-earth-600">Что говорят наши гости</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-earth-700 mb-4">
                  "Невероятные впечатления! Гид был очень профессиональным, маршрут интересный. 
                  Обязательно вернемся с друзьями!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-earth-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Анна Петрова</p>
                    <p className="text-sm text-earth-500">Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-earth-700 mb-4">
                  "Экстрим-тур превзошел все ожидания! Адреналин зашкаливал, 
                  а виды просто захватывают дух. Спасибо команде!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-sky-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Дмитрий Козлов</p>
                    <p className="text-sm text-earth-500">Санкт-Петербург</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-earth-700 mb-4">
                  "VIP-тур стоил каждой копейки. Сервис на высшем уровне, 
                  комфорт и незабываемые эмоции. Рекомендую!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-forest-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Елена Васильева</p>
                    <p className="text-sm text-earth-500">Екатеринбург</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-earth-800 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-earth-600">Готовы ответить на ваши вопросы</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-4 text-earth-500" size={20} />
                  <div>
                    <p className="font-semibold">+7 (999) 123-45-67</p>
                    <p className="text-earth-600 text-sm">Ежедневно с 8:00 до 20:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-4 text-earth-500" size={20} />
                  <div>
                    <p className="font-semibold">info@ghostvalleytours.ru</p>
                    <p className="text-earth-600 text-sm">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="MapPin" className="mr-4 text-earth-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Офис продаж</p>
                    <p className="text-earth-600">ул. Горная, 15, офис 23</p>
                    <p className="text-earth-600 text-sm">Пн-Вс: 9:00-18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">Забронировать тур</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Дата тура" type="date" />
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option>Выберите тур</option>
                      <option>Классический тур</option>
                      <option>Экстрим-сафари</option>
                      <option>VIP-экспедиция</option>
                    </select>
                  </div>
                  <Textarea placeholder="Дополнительные пожелания" />
                  <Button className="w-full bg-earth-500 hover:bg-earth-600 text-white">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Mountain" className="text-earth-400" size={28} />
                <h3 className="text-xl font-heading font-bold">Долина Привидений</h3>
              </div>
              <p className="text-earth-300">
                Лучшие джип туры по самым красивым местам региона. 
                Безопасность, комфорт, незабываемые впечатления.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Туры</h4>
              <ul className="space-y-2 text-earth-300">
                <li>Классический тур</li>
                <li></li>
                <li></li>
                <li>Групповые туры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-earth-300">
                <li>Трансфер</li>
                <li>Размещение</li>
                <li></li>
                <li>Фотосъемка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" className="text-earth-400 hover:text-white cursor-pointer transition-colors" size={24} />
                <Icon name="Facebook" className="text-earth-400 hover:text-white cursor-pointer transition-colors" size={24} />
                <Icon name="Youtube" className="text-earth-400 hover:text-white cursor-pointer transition-colors" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-earth-700 mt-8 pt-8 text-center text-earth-400">
            <p>&copy; 2024 Долина Привидений. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;