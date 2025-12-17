import { Zap, Bot, BarChart3, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';
import solarInstallation from '@/assets/solar-installation.jpg';
const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const products = [{
    icon: Zap,
    title: 'Revenue Engine Solar',
    description: 'Resposta automática a leads em menos de 5 segundos. Aumente sua conversão com IA que qualifica e engaja prospects 24/7.',
    highlight: '+30% conversão'
  }, {
    icon: Bot,
    title: 'Custom Ops',
    description: 'Agentes de IA que automatizam processos administrativos, desde follow-ups até geração de propostas personalizadas.',
    highlight: '-60% tempo operacional'
  }, {
    icon: BarChart3,
    title: 'Control Room',
    description: 'Dashboards em tempo real com previsões de receita e insights acionáveis para escalar seu negócio solar.',
    highlight: 'Previsibilidade total'
  }];
  const benefits = ['Previsibilidade de receita com IA preditiva', '≥30% de aumento na taxa de conversão', 'Integração plug-and-play com seu CRM', 'Suporte dedicado e onboarding em 48h', 'ROI garantido em até 90 dias'];
  const testimonials = [{
    quote: 'A SunMind transformou completamente nossa operação. Em 3 meses, aumentamos nossa conversão em 42% e reduzimos o tempo de resposta para menos de 1 minuto.',
    author: 'Carlos Silva',
    role: 'CEO, SolarTech Goiás',
    metric: '+42% conversão'
  }, {
    quote: 'A automação dos processos administrativos nos permitiu focar no que realmente importa: fechar novos contratos. Hoje processamos 3x mais leads.',
    author: 'Ana Martins',
    role: 'Diretora Comercial, EcoSol Brasil',
    metric: '3x mais leads'
  }, {
    quote: 'O Control Room nos dá uma visão clara do futuro. Conseguimos prever nossa receita com 95% de precisão e planejar expansões com confiança.',
    author: 'Roberto Mendes',
    role: 'Fundador, Energia Limpa GO',
    metric: '95% precisão'
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-petrol-dark">
        <AnimatedHeroBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-petrol-dark/50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-sm font-medium">IA especializada para o setor solar</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up opacity-0 delay-100" style={{
            animationFillMode: 'forwards'
          }}>
              Inteligência que{' '}
              <span className="text-gradient">ilumina</span> e{' '}
              <span className="text-gradient">escala</span>{' '}
              seu negócio solar
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0 delay-200" style={{
            animationFillMode: 'forwards'
          }}>
              Transforme leads em clientes com resposta em até 5 segundos. 
              Nossa IA automatiza sua operação comercial e multiplica suas conversões.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-300" style={{
            animationFillMode: 'forwards'
          }}>
              <Button variant="hero" size="lg">
                Solicite uma Demonstração
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="hero-outline" size="lg">
                Ver Soluções
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossas <span className="text-gradient">Soluções</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Três pilares de tecnologia desenhados especificamente para integradores de energia solar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => <div key={product.title} className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-solar-yellow-light rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <product.icon className="w-7 h-7 text-accent" />
                </div>
                
                <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                  {product.highlight}
                </span>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <Link to="/solucoes" className="inline-flex items-center gap-2 text-accent font-semibold mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais <ArrowRight size={16} />
                </Link>
              </div>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Por que escolher a{' '}
                <span className="text-gradient">SunMind Tech?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Somos especialistas em inteligência artificial para o setor solar. 
                Nossa tecnologia foi desenvolvida por quem entende as dores e oportunidades 
                do mercado de energia renovável.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>)}
              </ul>
              
              <Button variant="solar" size="lg" className="mt-8">
                Agende uma Conversa
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
              <img src={solarInstallation} alt="Instalação de painéis solares" className="relative rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-petrol-dark text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados que <span className="text-accent">Falam</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Veja como integradores solares estão transformando seus negócios com a SunMind Tech
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-petrol rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/20" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <span className="inline-block bg-accent text-petrol-dark font-bold px-4 py-2 rounded-full text-lg">
                    {testimonials[activeTestimonial].metric}
                  </span>
                </div>
                
                <blockquote className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                
                <div className="text-center">
                  <p className="font-semibold text-lg">{testimonials[activeTestimonial].author}</p>
                  <p className="text-primary-foreground/60">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full bg-petrol flex items-center justify-center hover:bg-accent hover:text-petrol-dark transition-colors">
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => <button key={index} onClick={() => setActiveTestimonial(index)} className={`w-2 h-2 rounded-full transition-all ${index === activeTestimonial ? 'w-8 bg-accent' : 'bg-primary-foreground/30'}`} />)}
              </div>
              
              <button onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)} className="w-10 h-10 rounded-full bg-petrol flex items-center justify-center hover:bg-accent hover:text-petrol-dark transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para <span className="text-gradient">escalar</span> seu negócio solar?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Agende uma demonstração gratuita e descubra como a SunMind Tech 
              pode multiplicar seus resultados em semanas.
            </p>
            <Button variant="solar" size="xl">
              Solicite sua Demonstração Gratuita
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;