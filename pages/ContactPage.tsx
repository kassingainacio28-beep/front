import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Copy, ExternalLink, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTACT_INFO.address);
    alert('Endereço copiado para a área de transferência!');
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-navy-900 mb-12 text-center">Fale Conosco</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info Card */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Endereço</h3>
                    <p className="text-gray-600 mb-2">{CONTACT_INFO.address}</p>
                    <div className="flex gap-3 text-sm">
                      <button 
                        onClick={copyAddress}
                        className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors"
                      >
                        <Copy size={14} /> Copiar
                      </button>
                      <a 
                        href={CONTACT_INFO.mapsLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={14} /> Abrir no Maps
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Telefones</h3>
                    <p className="text-gray-600 block"><a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="hover:text-primary">{CONTACT_INFO.phone}</a></p>
                    <p className="text-gray-600 block"><a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} className="hover:text-primary">WhatsApp: {CONTACT_INFO.whatsapp}</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">E-mail</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-primary transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Horário de Atendimento</h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {CONTACT_INFO.hours.replace('|', '\n')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-xl overflow-hidden shadow-inner relative">
                <iframe 
                  title="Google Maps"
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870295!2d-46.65219368502231!3d-23.56385298468165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
                ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Envie uma Mensagem</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Sucesso!</strong>
                <span className="block sm:inline"> Sua mensagem foi enviada. Entraremos em contato em breve.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Como podemos te ajudar?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-primary hover:bg-primaryHover text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : (
                    <>
                      Enviar Mensagem <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;