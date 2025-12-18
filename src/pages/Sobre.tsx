import { Link } from 'react-router-dom';
import { Cpu, BarChart3, Zap, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SobreHeroBackground from '@/components/SobreHeroBackground';
import dxTechLogo from '@/assets/dx-tech-logo.png';

const Sobre = () => {
  const thoughtLeaders = [
    {
      icon: Cpu,
      title: 'Automação Inteligente',
      description: 'Eliminamos tarefas manuais para que sua equipe foque no que realmente importa: vender e instalar.',
    },
    {
      icon: BarChart3,
      title: 'Decisões Baseadas em Dados',
      description: 'Transformamos intuição em certeza com dashboards que revelam o caminho para o crescimento.',
    },
    {
      icon: Zap,
      title: 'Foco em Performance',
      description: 'Nossas soluções são projetadas para um único objetivo: aumentar sua taxa de conversão e receita.',
    },
    {
      icon: Rocket,
      title: 'Receita Previsível',
      description: 'Construímos um funil de vendas robusto que gera resultados consistentes, mês após mês.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <SobreHeroBackground />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Escalando o Mercado Solar com <span className="text-accent">Inteligência e Previsibilidade</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Somos o motor de crescimento para integradores solares que buscam dominar o mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossa Origem: <span className="text-accent">Uma Resposta à Aceleração do Mercado</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p>
                A SunMind Tech nasceu em 2024, a partir da observação direta do crescimento acelerado do mercado de energia solar no Brasil. Enquanto a demanda aumentava, percebemos que grande parte das empresas não estava preparada para escalar vendas, atender leads com velocidade e manter controle operacional.
              </p>
              <p>
                Buscamos então métodos validados nos Estados Unidos — onde o mercado solar é altamente competitivo e orientado por dados — e adaptamos essas estratégias para a realidade brasileira.
              </p>
              <p>
                O resultado foi a criação de um ecossistema próprio que une automação, inteligência artificial e processos comerciais bem definidos, transformando operações desorganizadas em máquinas de vendas previsíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Criamos máquinas de vendas para o mercado solar.
            </h2>
            <p className="text-xl text-muted-foreground mt-6">
              Unimos inteligência artificial, automação e dados para eliminar gargalos, acelerar respostas e aumentar conversões.
            </p>
          </div>
        </div>
      </section>

      {/* How We Think */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Como Pensamos: <span className="text-accent">Os Pilares do Crescimento Escalável</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {thoughtLeaders.map((item) => (
              <div key={item.title} className="bg-card p-8 rounded-2xl border border-transparent hover:border-accent/50 transition-all">
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

      {/* Partnership Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Parceria Estratégica</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Tecnologia de <span className="text-accent">Ponta</span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-center">
                {/* DX Tech Logo/Seal */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-secondary to-card flex items-center justify-center p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center p-5">
                      <img 
                        src={dxTechLogo}
                        alt="DX Tech Solutions"
                        className="w-full h-auto object-contain"
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
                    <div className="bg-card rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-accent">24/7</p>
                      <p className="text-xs text-muted-foreground">Operação Contínua</p>
                    </div>
                    <div className="bg-card rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-accent">+50</p>
                      <p className="text-xs text-muted-foreground">Integrações</p>
                    </div>
                    <div className="bg-card rounded-xl p-4 text-center">
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

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Conheça nosso ecossistema de crescimento.
          </h2>
          <Button asChild variant="solar" size="xl">
            <Link to="/solucoes">Ver Soluções</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
