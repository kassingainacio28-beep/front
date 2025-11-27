import React from 'react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Nossos Serviços</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais do que aluguel de carros, oferecemos soluções completas de mobilidade 
            adaptadas para você ou sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all bg-gray-50">
              <div className="shrink-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                  <service.icon size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-sm text-gray-500 italic">
                  * Consulte condições específicas e disponibilidade para este serviço.
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Precisa de uma solução personalizada?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Seja para grandes frotas corporativas ou eventos especiais, nós montamos o pacote ideal para sua necessidade.
            </p>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Falar com Consultor <ArrowRight size={20} />
            </a>
          </div>
          {/* Decorative circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;