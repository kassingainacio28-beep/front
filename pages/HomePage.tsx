import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2000&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Alugue seu carro com quem entende de <span className="text-primary">estrada</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Frota renovada, sem burocracia e com a segurança que sua viagem merece. 
              Experimente a liberdade de dirigir um Prestige.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-colors"
              >
                Falar com Atendimento
              </a>
              <a 
                 href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                 className="bg-transparent border-2 border-white hover:bg-white hover:text-navy-900 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-colors"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-orange-100 p-4 rounded-full mb-4 text-primary">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy-900">Segurança Total</h3>
              <p className="text-gray-600">Todos os veículos revisados periodicamente e com seguro incluso no pacote básico.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-orange-100 p-4 rounded-full mb-4 text-primary">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy-900">Atendimento Ágil</h3>
              <p className="text-gray-600">Processo de retirada e devolução simplificado. Menos papel, mais estrada.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-orange-100 p-4 rounded-full mb-4 text-primary">
                <ThumbsUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy-900">Sem Burocracia</h3>
              <p className="text-gray-600">Alugue sem fiador, com opções flexíveis de pagamento e transparência total.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Fleet CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Escolha o modelo ideal para o seu destino</h2>
              <p className="text-gray-600 mb-6">
                Do econômico para o dia a dia ao SUV robusto para viagens em família. 
                Nossa frota atende todas as necessidades com conforto e estilo.
              </p>
              <Link 
                to="/frota" 
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-primaryHover hover:underline text-lg"
              >
                Ver Frota Completa <ArrowRight size={20} />
              </Link>
            </div>
            <div className="md:w-1/2">
               <img 
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop" 
                alt="Frota de Carros" 
                className="rounded-lg shadow-xl"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;