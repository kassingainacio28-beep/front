import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4 text-primary">
            <HelpCircle size={48} />
          </div>
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Dúvidas Frequentes</h1>
          <p className="text-gray-600">
            Separamos as perguntas mais comuns para te ajudar. Caso sua dúvida não esteja aqui, entre em contato conosco.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`border rounded-lg transition-colors duration-200 ${openIndex === index ? 'border-primary bg-orange-50/30' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-navy-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;