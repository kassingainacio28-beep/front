import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, CarFront, MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <CarFront className="text-primary" size={28} />
              Prestige<span className="text-primary">Drive</span>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              Sua parceira de confiança nas estradas. Oferecemos veículos modernos, 
              segurança e o melhor atendimento do mercado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/frota" className="hover:text-primary transition-colors">Nossa Frota</Link></li>
              <li><Link to="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Dúvidas Frequentes</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="hover:text-white">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Horário</h3>
            <p className="text-sm text-gray-400 mb-2">Estamos prontos para te atender:</p>
            <div className="text-sm font-medium text-white border-l-2 border-primary pl-3">
               <p className="mb-1">Seg - Sex: 08:00 - 20:00</p>
               <p>Sáb: 09:00 - 14:00</p>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nzola Studio. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;