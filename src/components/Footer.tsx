import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="https://i.im.ge/2025/12/18/BuGjQ6.sunmind-1.png" alt="SunMind Tech Logo" className="w-auto h-24" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando o setor solar com inteligência artificial. Soluções que iluminam e escalam seu negócio.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-accent hover:text-background transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-accent hover:text-background transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', path: '/' },
                { label: 'Soluções', path: '/solucoes' },
                { label: 'Sobre Nós', path: '/sobre' },
                { label: 'Blog', path: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3">
              {[
                'Revenue Engine Solar',
                'Custom Ops',
                'Control Room',
                'Integrações',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/solucoes"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>Goiânia, GO - Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="shrink-0" />
                <span>+55 (62) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="shrink-0" />
                <span>contato@sunmindtech.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 SunMind Tech. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-accent transition-colors">
              Política de Privacidade
            </Link>
            <Link to="#" className="hover:text-accent transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
