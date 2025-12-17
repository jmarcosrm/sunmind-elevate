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
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-accent rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-2 border-2 border-petrol-dark rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-petrol-dark rounded-full" />
              <div className="absolute top-1/2 right-1 w-3 h-0.5 bg-petrol-dark" />
            </div>
            <span
              className={cn(
                'text-xl font-bold transition-colors',
                isScrolled || !isHomePage ? 'text-primary' : 'text-primary-foreground'
              )}
            >
              SunMind<span className="text-accent">Tech</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors relative group',
                  isScrolled || !isHomePage
                    ? 'text-foreground hover:text-accent'
                    : 'text-primary-foreground/90 hover:text-primary-foreground',
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
            <Button variant={isScrolled || !isHomePage ? 'solar' : 'hero'} size="sm">
              Solicite uma Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              isScrolled || !isHomePage
                ? 'text-foreground hover:bg-muted'
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            <Button variant="solar" className="w-full">
              Solicite uma Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
