export const cvData = {
  settings: {
    defaultLang: 'pt-BR'
  },
  translations: {
    'pt-BR': {
      summaryTitle: 'Resumo Profissional',
      skillsTitle: 'Competências Técnicas',
      experienceTitle: 'Experiência Profissional',
      educationTitle: 'Formação Acadêmica',
      present: 'Presente',
      completed: 'Concluído em',
      downloadPDF: 'Baixar PDF'
    },
    'en': {
      summaryTitle: 'Professional Summary',
      skillsTitle: 'Technical Skills',
      experienceTitle: 'Professional Experience',
      educationTitle: 'Education',
      present: 'Present',
      completed: 'Completed in',
      downloadPDF: 'Download PDF'
    }
  },
  content: {
    name: 'Bruno Correia',
    location: {
      'pt-BR': 'Fortaleza, Ceará',
      'en': 'Fortaleza, Ceará, Brazil'
    },
    phone: '(88) 99719-1352',
    email: 'brunocorreiasf@gmail.com',
    linkedin: 'linkedin.com/in/correia-bruno',
    github: 'github.com/BrunoSilva-Correia',
    summary: {
      'pt-BR': 'Software Engineer Sênior com 5+ anos de experiência em arquitetura de microsserviços e desenvolvimento Fullstack. Especialista em Java (Spring Boot) e Node.js (NestJS), com histórico comprovado de otimização de performance de banco de dados (redução de 70% em tempo de query) e implementação de soluções de IA. Bacharel em Engenharia de Computação.',
      'en': 'Senior Software Engineer with 5+ years of experience in microservices architecture and Fullstack development. Specialist in Java (Spring Boot) and Node.js (NestJS), with a proven track record of database performance optimization (70% reduction in query time) and implementation of AI solutions. Bachelor\'s in Computer Engineering.'
    },
    skills: [
      {
        label: { 'pt-BR': 'Linguagens', 'en': 'Languages' },
        items: 'Java, TypeScript, JavaScript, Python, SQL'
      },
      {
        label: { 'pt-BR': 'Backend', 'en': 'Backend' },
        items: 'Spring Boot, NestJS, Node.js, REST APIs, Microservices, RPA'
      },
      {
        label: { 'pt-BR': 'Frontend & Mobile', 'en': 'Frontend & Mobile' },
        items: 'Vue.js, React, Next.js, React Native'
      },
      {
        label: { 'pt-BR': 'Dados', 'en': 'Data' },
        items: 'PostgreSQL, MongoDB, Oracle, NoSQL, Kafka, Otimização SQL'
      },
      {
        label: { 'pt-BR': 'DevOps & Cloud', 'en': 'DevOps & Cloud' },
        items: 'AWS (SQS), Docker, Git, CI/CD, Design System'
      }
    ],
    experience: [
      {
        company: 'Conta Azul',
        role: { 'pt-BR': 'Fullstack Software Engineer', 'en': 'Fullstack Software Engineer' },
        period: { 'pt-BR': 'Ago 2024 – Presente', 'en': 'Aug 2024 – Present' },
        achievements: {
          'pt-BR': [
            'Liderei a refatoração de consultas SQL complexas, resultando em uma redução de <strong>70% no tempo de execução</strong> através de índices estratégicos.',
            'Gerenciei débito técnico realizando o <em>sunset</em> de código legado, removendo 20+ componentes e simplificando a base de código em <strong>30%</strong>.',
            'Implementei arquitetura orientada a eventos na <strong>AWS</strong>, utilizando <strong>SQS</strong> para garantir processamento assíncrono escalável entre sistemas de vendas e faturamento.',
            'Desenvolvi microsserviços em Java/Spring Boot e interfaces reativas com Vue.js, focando em validações robustas e performance.'
          ],
          'en': [
            'Led the refactoring of complex SQL queries, resulting in a <strong>70% reduction in execution time</strong> through strategic indexing.',
            'Managed technical debt by performing the <em>sunset</em> of legacy code, removing 20+ components and simplifying the codebase by <strong>30%</strong>.',
            'Implemented event-driven architecture on <strong>AWS</strong>, using <strong>SQS</strong> to ensure scalable asynchronous processing between sales and billing systems.',
            'Developed microservices in Java/Spring Boot and reactive interfaces with Vue.js, focusing on robust validations and performance.'
          ]
        }
      },
      {
        company: 'Funcional Health Tech',
        role: { 'pt-BR': 'Senior Software Developer', 'en': 'Senior Software Developer' },
        period: { 'pt-BR': 'Abr 2024 – Ago 2024', 'en': 'Apr 2024 – Aug 2024' },
        achievements: {
          'pt-BR': [
            'Desenvolvi e implementei recurso estratégico utilizando <strong>Inteligência Artificial (IA)</strong> para leitura automatizada de notas fiscais, otimizando a validação de reembolsos.',
            'Reduzi erros manuais e tempo de processamento operacional através da automação de cruzamento de dados de elegibilidade.',
            'Atuou no desenvolvimento Fullstack com React Native (Mobile) e NestJS (Backend).'
          ],
          'en': [
            'Developed and implemented a strategic feature using <strong>Artificial Intelligence (AI)</strong> for automated invoice reading, optimizing refund validation.',
            'Reduced manual errors and operational processing time through automation of eligibility data crossing.',
            'Acted in Fullstack development with React Native (Mobile) and NestJS (Backend).'
          ]
        }
      },
      {
        company: 'Normalabs',
        role: { 'pt-BR': 'Senior Software Engineer', 'en': 'Senior Software Engineer' },
        period: { 'pt-BR': 'Jan 2021 – Fev 2024', 'en': 'Jan 2021 – Feb 2024' },
        achievements: {
          'pt-BR': [
            '<strong>Senior Software Engineer (Fev 2022 - Fev 2024):</strong> Liderei a equipe de Backend, definindo arquitetura escalável e adotando metodologias ágeis (Scrum/Kanban) para garantir entregas consistentes.',
            '<strong>Back-end Developer (Jan 2021 - Fev 2022):</strong> Atuou na concepção e manutenção de aplicações voltadas para o crescimento sustentável do negócio.'
          ],
          'en': [
            '<strong>Senior Software Engineer (Feb 2022 - Feb 2024):</strong> Led the Backend team, defining scalable architecture and adopting agile methodologies (Scrum/Kanban) to ensure consistent deliveries.',
            '<strong>Back-end Developer (Jan 2021 - Feb 2022):</strong> Acted in the conception and maintenance of applications focused on sustainable business growth.'
          ]
        }
      },
      {
        company: 'Grupo Normatel',
        role: { 'pt-BR': 'Desenvolvedor', 'en': 'Developer' },
        period: { 'pt-BR': 'Ago 2020 – Dez 2020', 'en': 'Aug 2020 – Dec 2020' },
        achievements: {
          'pt-BR': [
            'Realizei manutenção de sistemas legados e implementação de novas funcionalidades em ambiente de produção.'
          ],
          'en': [
            'Performed maintenance on legacy systems and implemented new features in a production environment.'
          ]
        }
      }
    ],
    education: {
      institution: 'Instituto Federal do Ceará (IFCE)',
      degree: { 'pt-BR': 'Bacharelado em Engenharia de Computação', 'en': 'Bachelor of Computer Engineering' },
      date: { 'pt-BR': '2024', 'en': '2024' }
    }
  }
};
