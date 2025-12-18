import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/solucoes', label: 'Soluções' },
    { path: '/sobre', label: 'Sobre' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHomePage
          ? 'bg-background/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="https://i.im.ge/2025/12/18/BuGjQ6.sunmind-1.png" alt="SunMind Tech Logo" className="w-auto h-24" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors text-white/80 hover:text-white relative group',
                  location.pathname === link.path && 'text-accent'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full',
                    location.pathname === link.path && 'w-full'
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex flex-1 justify-end">
            <Button variant={'solar'} size="sm">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link
              key="mobile-menu-button"
              to="#"
              className={cn(
                'p-2 rounded-lg transition-colors text-white hover:bg-white/10'
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden absolute left-0 right-0 top-20 bg-background shadow-lg transition-all duration-300 overflow-hidden',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'block py-2 text-foreground hover:text-accent transition-colors',
                  location.pathname === link.path && 'text-accent font-semibold'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
