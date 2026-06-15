import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'pt-BR': {
    translation: {
      navHome: 'Início',
      navAbout: 'Sobre',
      navProducts: 'Produtos',
      navExperience: 'Experiência',
      navSkills: 'Skills',
      navContact: 'Contato',
      heroRole: 'Senior Software Engineer | Full Stack Developer',
      aboutTitle: 'Sobre Mim',
      productsTitle: 'Meus Produtos',
      productsDesc: 'Soluções desenvolvidas através da <span class="font-bold text-white">Tascor Software</span> para resolver problemas reais com tecnologia.',
      promoDesc: 'Plataforma completa de <strong>automação e publicação</strong>. Otimize e escale a sua criação de conteúdo e processos de marketing de forma inteligente.',
      viewProductBtn: 'Ver Produto',
      experienceTitle: 'Experiência Profissional',
      skillsTitle: 'Tecnologias & Skills',
      educationTitle: 'Formação Acadêmica',
      contactTitle: 'Entre em Contato',
      contactText: 'Se você busca um colaborador experiente, dedicado e que está sempre disposto a aprender novas tecnologias para resolver problemas complexos, não hesite em me contatar. Estou pronto para agregar valor ao seu time!',
      footerRights: '© 2024 Bruno Correia. Todos os direitos reservados.',
      privacyPolicy: 'Política de Privacidade',
      termsOfUse: 'Termos de Uso',
      backToPortfolio: '← Voltar ao Portfólio'
    }
  },
  en: {
    translation: {
      navHome: 'Home',
      navAbout: 'About',
      navProducts: 'Products',
      navExperience: 'Experience',
      navSkills: 'Skills',
      navContact: 'Contact',
      heroRole: 'Senior Software Engineer | Full Stack Developer',
      aboutTitle: 'About Me',
      productsTitle: 'My Products',
      productsDesc: 'Solutions developed through <span class="font-bold text-white">Tascor Software</span> to solve real-world problems with technology.',
      promoDesc: 'Complete <strong>automation and publishing</strong> platform. Optimize and scale your content creation and marketing processes intelligently.',
      viewProductBtn: 'View Product',
      experienceTitle: 'Professional Experience',
      skillsTitle: 'Technologies & Skills',
      educationTitle: 'Education',
      contactTitle: 'Get in Touch',
      contactText: 'If you are looking for an experienced, dedicated collaborator who is always willing to learn new technologies to solve complex problems, don\'t hesitate to contact me. I am ready to add value to your team!',
      footerRights: '© 2024 Bruno Correia. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      backToPortfolio: '← Back to Portfolio'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('preferredLang') || 'pt-BR',
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
