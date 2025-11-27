import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Award, Users, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-navy-900 mb-6">Sobre a Prestige Drive</h1>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
               <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {COMPANY_INFO.history}
               </p>
               <p className="text-lg text-gray-700 leading-relaxed">
                 Nosso compromisso vai além da entrega das chaves. Queremos garantir que cada quilômetro
                 rodado seja uma experiência positiva, segura e memorável.
               </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop" 
                alt="Escritório da empresa" 
                className="rounded-xl shadow-lg w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* MVV Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary">
              <div className="mb-4 text-navy-900"><Target size={40} /></div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Missão</h3>
              <p className="text-gray-600">{COMPANY_INFO.mission}</p>
           </div>
           <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-navy-800">
              <div className="mb-4 text-navy-900"><Users size={40} /></div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Visão</h3>
              <p className="text-gray-600">{COMPANY_INFO.vision}</p>
           </div>
           <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary">
              <div className="mb-4 text-navy-900"><Award size={40} /></div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Valores</h3>
              <ul className="space-y-2">
                {COMPANY_INFO.values.map((val, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {val}
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* Stats Section */}
        <div className="bg-navy-900 text-white rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                   <div className="text-4xl font-bold text-primary mb-2">8+</div>
                   <div className="text-sm text-gray-300 uppercase tracking-wider">Anos de História</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-primary mb-2">500+</div>
                   <div className="text-sm text-gray-300 uppercase tracking-wider">Veículos na Frota</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-primary mb-2">15k+</div>
                   <div className="text-sm text-gray-300 uppercase tracking-wider">Clientes Atendidos</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-primary mb-2">24h</div>
                   <div className="text-sm text-gray-300 uppercase tracking-wider">Suporte e Assistência</div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;