import React from 'react';
import { CAR_CATEGORIES, CONTACT_INFO } from '../constants';
import { Check, MessageCircle } from 'lucide-react';

const FleetPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Nossa Frota</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossas categorias de veículos. Todos os modelos são equipados com ar-condicionado, 
            direção assistida e som. Entre em contato para verificar a disponibilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAR_CATEGORIES.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{car.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{car.description}</p>
                
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Destaques:</h4>
                  <ul className="space-y-2">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                   <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Olá, gostaria de saber a disponibilidade do ${car.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-navy-800 hover:bg-primary text-white py-3 rounded-lg transition-colors font-medium"
                   >
                     <MessageCircle size={18} />
                     Consultar Disponibilidade
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetPage;