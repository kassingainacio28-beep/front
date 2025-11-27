import { CarCategory, ServiceItem, FaqItem, ContactInfo } from './types';
import { Clock, ShieldCheck, Gem, Briefcase, MapPin, Key } from 'lucide-react';

export const CONTACT_INFO: ContactInfo = {
  phone: "(+244) 922 000 888",
  whatsapp: "(+244) 922 000 888",
  email: "contato@rentacar@gmail.com",
  address: "Huíla, Lubango-Machiqueira",
  mapsLink: "https://maps.google.com/?q=Av.+Paulista,+1000",
  hours: "Seg - Sex: 08:00 - 20:00 | Sáb: 09:00 - 14:00"
};

export const CAR_CATEGORIES: CarCategory[] = [
  {
    id: 'grp-a',
    name: 'Grupo A - Econômico',
    description: 'Compacto, econômico e ágil. Ideal para o trânsito urbano e viagens curtas.',
    features: ['Ar-condicionado', 'Direção elétrica', '4 Portas', 'Airbag Duplo', 'ABS'],
    image: 'https://picsum.photos/seed/car1/800/600'
  },
  {
    id: 'grp-c',
    name: 'Grupo C - Intermediário',
    description: 'Mais conforto e espaço para sua família. Porta-malas generoso e motor potente.',
    features: ['Motor 1.6 ou superior', 'Multimídia', 'Câmbio Automático', 'Piloto Automático'],
    image: 'https://picsum.photos/seed/car2/800/600'
  },
  {
    id: 'grp-s',
    name: 'Grupo S - SUV',
    description: 'Altura, robustez e segurança. Perfeito para estrada e aventuras.',
    features: ['Motor Turbo', 'Controle de Tração', 'Porta-malas 400L+', 'Bancos de Couro'],
    image: 'https://picsum.photos/seed/car3/800/600'
  },
  {
    id: 'grp-l',
    name: 'Grupo L - Luxo',
    description: 'Sofisticação e tecnologia de ponta para quem não abre mão do melhor.',
    features: ['Teto Solar', 'Assistente de Faixa', 'Motor Premium', 'Acabamento Soft-touch'],
    image: 'https://picsum.photos/seed/car4/800/600'
  },
    {
    id: 'grp-p',
    name: 'Grupo P - Pick-up',
    description: 'Força bruta e capacidade de carga para trabalho ou lazer off-road.',
    features: ['4x4 Diesel', 'Cabine Dupla', 'Capota Marítima', 'Alta Capacidade de Carga'],
    image: 'https://picsum.photos/seed/car5/800/600'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Aluguel Diário',
    description: 'Flexibilidade total para sua rotina ou viagens de fim de semana.',
    icon: Clock
  },
  {
    id: 'srv-2',
    title: 'Assinatura Mensal',
    description: 'Tenha um carro sempre novo sem as dores de cabeça de ser dono.',
    icon: Key
  },
  {
    id: 'srv-3',
    title: 'Motorista Executivo',
    description: 'Serviço premium com motoristas treinados e bilíngues.',
    icon: Gem
  },
  {
    id: 'srv-4',
    title: 'Corporativo',
    description: 'Gestão de frota terceirizada para sua empresa focar no negócio.',
    icon: Briefcase
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Quais os requisitos para alugar?',
    answer: 'Ter no mínimo 21 anos, CNH válida emitida há mais de 2 anos e cartão de crédito em nome do titular.'
  },
  {
    id: 'faq-2',
    question: 'O seguro está incluso?',
    answer: 'Sim, todas as nossas locações incluem proteção básica contra colisão e terceiros. Proteções extras podem ser contratadas.'
  },
  {
    id: 'faq-3',
    question: 'Posso devolver em outra cidade?',
    answer: 'Sim, oferecemos o serviço de "One Way" mediante uma taxa de retorno calculada pela distância.'
  },
  {
    id: 'faq-4',
    question: 'Aceitam cartão de débito ou dinheiro?',
    answer: 'Para a garantia (caução), é necessário cartão de crédito. O pagamento da diária pode ser feito em débito ou dinheiro.'
  },
  {
    id: 'faq-5',
    question: 'Como funciona a política de combustível?',
    answer: 'Entregamos o carro com tanque cheio e ele deve ser devolvido da mesma forma. Caso contrário, será cobrado o reabastecimento.'
  }
];

export const COMPANY_INFO = {
  mission: "Proporcionar mobilidade com segurança, conforto e transparência, superando as expectativas dos clientes.",
  vision: "Ser referência nacional em qualidade de atendimento no mercado de locação de veículos até 2028.",
  values: ["Transparência", "Segurança em primeiro lugar", "Foco no Cliente", "Inovação", "Sustentabilidade"],
  history: "Fundada em 2015, a Prestige Drive nasceu da necessidade de um atendimento mais humano e menos burocrático no setor de locadoras. Começamos com apenas 10 veículos e hoje contamos com uma frota diversificada de mais de 500 carros, mantendo sempre o nosso DNA de excelência e proximidade com o cliente."
};