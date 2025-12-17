import { useState } from 'react';
import { MapPin, Mail, Phone, Send, Linkedin, Instagram, Target, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SobreHeroBackground from '@/components/SobreHeroBackground';
import ceoImage from '@/assets/ceo-jose-marcos.jpg';
import solarInstallation from '@/assets/solar-installation.jpg';
import { useToast } from '@/hooks/use-toast';

const Sobre = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em até 24 horas.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Capacitar integradores de energia solar com inteligência artificial de ponta, acelerando a transição para um futuro energético sustentável.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser a principal plataforma de IA para o setor de energia solar na América Latina, impactando positivamente milhões de famílias.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Inovação responsável, sustentabilidade em primeiro lugar, parceria genuína com clientes e excelência em cada interação.',
    },
  ];

  const timeline = [
    { year: '2021', event: 'Fundação da SunMind Tech em Goiânia' },
    { year: '2022', event: 'Lançamento do Revenue Engine Solar' },
    { year: '2023', event: '100+ integradores utilizando nossas soluções' },
    { year: '2024', event: 'Expansão nacional e lançamento do Control Room' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <SobreHeroBackground />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Sobre a <span className="text-accent">SunMind Tech</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Nascemos da paixão por tecnologia e sustentabilidade. Nossa missão é 
              democratizar o acesso à energia solar através de inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa <span className="text-gradient">História</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A SunMind Tech nasceu em 2021, em Goiânia, da visão de que a inteligência 
                artificial poderia revolucionar o setor de energia solar. Nosso fundador, 
                José Marcos, identificou que integradores solares perdiam oportunidades 
                valiosas por não conseguirem responder leads a tempo.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Hoje, ajudamos mais de 100 integradores a converter mais leads, automatizar 
                processos e crescer de forma sustentável. Nossa tecnologia já contribuiu 
                para a instalação de mais de 50MW em energia solar residencial e comercial.
              </p>
              
              {/* Timeline */}
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-accent font-bold text-lg min-w-[60px]">{item.year}</span>
                    <div className="w-3 h-3 bg-accent rounded-full" />
                    <span className="text-foreground">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={solarInstallation}
                alt="Instalação solar"
                className="relative rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div 
                key={item.title}
                className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[300px_1fr] gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl" />
                <img 
                  src={ceoImage}
                  alt="José Marcos - CEO SunMind Tech"
                  className="relative rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
              </div>
              
              <div>
                <span className="text-accent font-semibold">Fundador & CEO</span>
                <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">José Marcos</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Com mais de 15 anos de experiência em tecnologia e energia renovável, 
                  José Marcos fundou a SunMind Tech com a missão de tornar a energia solar 
                  acessível para todas as famílias brasileiras.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "Acreditamos que a combinação de inteligência artificial e energia solar 
                  é a chave para um futuro mais sustentável. Cada integrador que ajudamos 
                  a crescer representa milhares de painéis solares instalados e toneladas 
                  de CO₂ evitadas."
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-petrol-dark transition-colors text-accent"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-petrol-dark transition-colors text-accent"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-petrol-dark text-primary-foreground" id="contato">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Entre em <span className="text-accent">Contato</span>
              </h2>
              <p className="text-primary-foreground/80 mb-10 leading-relaxed">
                Estamos prontos para ajudar seu negócio solar a crescer. 
                Entre em contato e descubra como podemos transformar sua operação.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Localização</h4>
                    <p className="text-primary-foreground/70">Goiânia, GO - Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-primary-foreground/70">contato@sunmindtech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-primary-foreground/70">+55 (62) 99999-9999</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 h-48 bg-petrol rounded-2xl flex items-center justify-center border border-primary-foreground/10">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-primary-foreground/50 text-sm">Goiânia, GO</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-petrol p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-primary-foreground/70 mb-2 block">Nome *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                      className="bg-petrol-dark border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-primary-foreground/70 mb-2 block">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                      className="bg-petrol-dark border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-primary-foreground/70 mb-2 block">Telefone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className="bg-petrol-dark border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-primary-foreground/70 mb-2 block">Empresa</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nome da empresa"
                      className="bg-petrol-dark border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-primary-foreground/70 mb-2 block">Mensagem *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Como podemos ajudar?"
                    required
                    rows={4}
                    className="bg-petrol-dark border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none"
                  />
                </div>
                
                <Button type="submit" variant="solar" size="lg" className="w-full">
                  Enviar Mensagem
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
