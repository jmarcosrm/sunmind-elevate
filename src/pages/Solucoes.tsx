import { useState } from 'react';
import { Zap, Bot, BarChart3, CheckCircle, ChevronDown, Settings, Plug, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolucoesHeroBackground from '@/components/SolucoesHeroBackground';
import solarInstallation from '@/assets/solar-installation.jpg';
import dashboardRevenue from '@/assets/dashboard-revenue.jpg';
import dashboardOps from '@/assets/dashboard-ops.jpg';
import dashboardControl from '@/assets/dashboard-control.jpg';
import dxTechLogo from '@/assets/dx-tech-logo.png';

const dashboardImages: Record<string, string> = {
  'revenue-engine': dashboardRevenue,
  'custom-ops': dashboardOps,
  'control-room': dashboardControl,
};

const Solucoes = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const solutions = [
    {
      id: 'revenue-engine',
      icon: Zap,
      title: 'Revenue Engine Solar',
      subtitle: 'Conversão Acelerada por IA',
      description: 'Sistema de resposta inteligente que conecta você ao lead em até 5 segundos. Nossa IA qualifica, engaja e agenda automaticamente.',
      features: [
        'Resposta automática em menos de 5 segundos',
        'Qualificação inteligente de leads por scoring',
        'Agendamento automático de visitas técnicas',
        'Integração com WhatsApp Business e email',
        'Análise preditiva de fechamento',
      ],
      roi: '+30% taxa de conversão',
      integrations: ['WhatsApp', 'CRM', 'Google Calendar', 'Pipedrive'],
    },
    {
      id: 'custom-ops',
      icon: Bot,
      title: 'Custom Ops',
      subtitle: 'Automação Operacional Inteligente',
      description: 'Agentes de IA que trabalham 24/7 para automatizar seus processos administrativos e comerciais mais complexos.',
      features: [
        'Follow-up automático multicanal',
        'Geração de propostas personalizadas',
        'Processamento de documentos com OCR',
        'Respostas automáticas a dúvidas frequentes',
        'Relatórios de performance em tempo real',
      ],
      roi: '-60% tempo operacional',
      integrations: ['ERP', 'Google Docs', 'Slack', 'Teams'],
    },
    {
      id: 'control-room',
      icon: BarChart3,
      title: 'Control Room',
      subtitle: 'Central de Comando e Previsões',
      description: 'Dashboards executivos com visão 360° do seu negócio. Previsões de receita e insights acionáveis para decisões estratégicas.',
      features: [
        'Dashboard em tempo real personalizado',
        'Previsão de receita com 95% de precisão',
        'Alertas inteligentes de oportunidades',
        'Análise de performance por vendedor',
        'Métricas de ROI por canal de aquisição',
      ],
      roi: '95% precisão em previsões',
      integrations: ['Power BI', 'Google Data Studio', 'Excel'],
    },
  ];

  const faqs = [
    {
      question: 'Como a IA da SunMind Tech funciona na prática?',
      answer: 'Nossa IA utiliza modelos de linguagem avançados combinados com dados específicos do setor solar. Ela aprende continuamente com suas interações, propostas e conversões, tornando-se mais precisa ao longo do tempo. A implementação é plug-and-play: conectamos aos seus sistemas existentes e em 48h você já está operando.',
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'A maioria dos clientes vê melhorias significativas nas primeiras 2 semanas. Em média, nossos clientes reportam um aumento de 30% na taxa de conversão nos primeiros 90 dias. Oferecemos garantia de ROI: se você não ver resultados em 90 dias, devolvemos seu investimento.',
    },
    {
      question: 'A SunMind Tech integra com meu CRM atual?',
      answer: 'Sim! Temos integrações nativas com os principais CRMs do mercado (Pipedrive, HubSpot, Salesforce, RD Station) e também com sistemas específicos do setor solar. Se você usa um sistema personalizado, nossa equipe técnica desenvolve a integração sem custo adicional.',
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Absolutamente. Seguimos as melhores práticas de segurança da informação e somos compliance com LGPD. Seus dados são criptografados em trânsito e em repouso, e você mantém total propriedade sobre suas informações. Realizamos auditorias de segurança trimestrais.',
    },
    {
      question: 'Qual o investimento necessário?',
      answer: 'Oferecemos planos flexíveis que se adaptam ao tamanho da sua operação, começando a partir de R$ 997/mês. O ROI médio dos nossos clientes é de 8x o valor investido. Agende uma demonstração para receber uma proposta personalizada baseada no seu volume de leads.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <SolucoesHeroBackground />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Soluções de <span className="text-accent">IA</span> para Energia Solar
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Três pilares tecnológicos projetados para transformar a forma como 
              integradores solares captam, convertem e gerenciam clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Detail */}
      {solutions.map((solution, index) => (
        <section 
          key={solution.id}
          id={solution.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <span className="text-accent text-sm font-semibold">{solution.roi}</span>
                    <h2 className="text-3xl font-bold text-foreground">{solution.title}</h2>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-4 mb-8">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-3">Integrações disponíveis:</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.integrations.map((integration) => (
                      <span 
                        key={integration}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="solar" size="lg">
                  Conhecer {solution.title}
                </Button>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <img 
                    src={dashboardImages[solution.id]}
                    alt={`Dashboard ${solution.title}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-petrol-dark/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Integration Section */}
      <section className="py-24 bg-petrol-dark text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Plug className="w-12 h-12 text-accent mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Integração <span className="text-accent">Plug-and-Play</span>
              </h2>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Nossa tecnologia foi desenhada para se conectar ao seu ecossistema atual 
                sem fricção. Em menos de 48 horas, você estará operando com todo o poder 
                da nossa IA.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Settings, label: 'Setup em 48h' },
                  { icon: Plug, label: '+50 integrações' },
                  { icon: Users, label: 'Suporte dedicado' },
                  { icon: Shield, label: '100% seguro' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-petrol p-4 rounded-xl">
                    <item.icon className="w-5 h-5 text-accent" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={solarInstallation}
                alt="Instalação solar"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Parceria Estratégica</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Tecnologia de <span className="text-gradient">Ponta</span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-petrol/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-center">
                {/* DX Tech Logo/Seal */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-petrol-dark to-petrol flex items-center justify-center p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center p-4">
                      <img 
                        src={dxTechLogo}
                        alt="DX Tech Solutions"
                        className="w-full h-auto object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-muted-foreground font-medium">Parceiro Oficial</span>
                  </div>
                </div>

                {/* Partnership Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">Parceria DX Tech Solutions</h3>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      Tecnologia
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A SunMind Tech tem parceria estratégica com a <strong className="text-foreground">DX Tech Solutions</strong>, 
                    referência em arquitetura de sistemas enxutos e automação inteligente. Essa colaboração 
                    nos permite entregar soluções de IA ainda mais robustas, com infraestrutura de 
                    <strong className="text-foreground"> máquinas de vendas 24/7</strong> e 
                    <strong className="text-foreground"> agentes de IA</strong> que eliminam trabalho manual.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-secondary rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-accent">24/7</p>
                      <p className="text-xs text-muted-foreground">Operação Contínua</p>
                    </div>
                    <div className="bg-secondary rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-accent">+50</p>
                      <p className="text-xs text-muted-foreground">Integrações</p>
                    </div>
                    <div className="bg-secondary rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-accent">99.9%</p>
                      <p className="text-xs text-muted-foreground">Uptime Garantido</p>
                    </div>
                  </div>

                  <a 
                    href="https://www.dxtechsolutions.com.br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
                  >
                    Conheça a DX Tech
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perguntas <span className="text-gradient">Frequentes</span>
              </h2>
              <p className="text-muted-foreground">
                Tudo o que você precisa saber sobre nossas soluções de IA
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-accent shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pronto para transformar sua operação?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
            Agende uma demonstração gratuita e veja na prática como a SunMind Tech 
            pode acelerar seus resultados.
          </p>
          <Button variant="solar" size="xl">
            Agendar Demonstração Gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solucoes;
