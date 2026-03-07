// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Translations Data (Sourced from CV and customized for UI)
const uiTranslations = {
    'pt-BR': {
        navHome: 'Início',
        navAbout: 'Sobre',
        navExperience: 'Experiência',
        navSkills: 'Skills',
        navContact: 'Contato',
        heroRole: 'Senior Software Engineer | Full Stack Developer',
        aboutTitle: 'Sobre Mim',
        experienceTitle: 'Experiência Profissional',
        skillsTitle: 'Tecnologias & Skills',
        educationTitle: 'Formação Acadêmica',
        contactTitle: 'Entre em Contato',
        contactText: 'Se você busca um colaborador experiente, dedicado e que está sempre disposto a aprender novas tecnologias para resolver problemas complexos, não hesite em me contatar. Estou pronto para agregar valor ao seu time!',
        footerRights: '© 2024 Bruno Correia. Todos os direitos reservados.',
        privacyPolicy: 'Política de Privacidade',
        termsOfUse: 'Termos de Uso'
    },
    'en': {
        navHome: 'Home',
        navAbout: 'About',
        navExperience: 'Experience',
        navSkills: 'Skills',
        navContact: 'Contact',
        heroRole: 'Senior Software Engineer | Full Stack Developer',
        aboutTitle: 'About Me',
        experienceTitle: 'Professional Experience',
        skillsTitle: 'Technologies & Skills',
        educationTitle: 'Education',
        contactTitle: 'Get in Touch',
        contactText: 'If you are looking for an experienced, dedicated collaborator who is always willing to learn new technologies to solve complex problems, don\'t hesitate to contact me. I am ready to add value to your team!',
        footerRights: '© 2024 Bruno Correia. All rights reserved.',
        privacyPolicy: 'Privacy Policy',
        termsOfUse: 'Terms of Use'
    }
};

let currentLang = localStorage.getItem('preferredLang') || 'pt-BR';

function updateContent() {
    // Update UI elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (uiTranslations[currentLang][key]) {
            el.innerHTML = uiTranslations[currentLang][key];
        }
    });

    // Update dynamically rendered sections using cvData
    renderAbout();
    renderHeroSkills();
    renderExperience();
    renderSkills();
    renderEducation();
}

function renderAbout() {
    const aboutContainer = document.querySelector('#about .tech-card');
    if (!aboutContainer) return;
    
    // Custom "Senior Learner" about text based on CV but enhanced
    const ptAbout = `
        <p class="text-lg text-gray-300 leading-relaxed mb-6">
            ${cvData.content.summary['pt-BR']}
        </p>
        <p class="text-lg text-gray-300 leading-relaxed mb-6">
            Sou apaixonado por resolver problemas complexos e otimizar sistemas. Meu foco está em criar soluções escaláveis e performantes, sempre mantendo um mindset de aprendizado contínuo para dominar novas tendências como IA e arquiteturas modernas.
        </p>
        <p class="text-lg text-gray-300 leading-relaxed">
            Busco constantemente o equilíbrio entre a experiência técnica sólida e a curiosidade necessária para inovar, garantindo que cada projeto entregue o máximo valor aos usuários e ao negócio.
        </p>
    `;
    const enAbout = `
        <p class="text-lg text-gray-300 leading-relaxed mb-6">
            ${cvData.content.summary['en']}
        </p>
        <p class="text-lg text-gray-300 leading-relaxed mb-6">
            I am passionate about solving complex problems and optimizing systems. My focus is on creating scalable and high-performance solutions, always maintaining a continuous learning mindset to master new trends like AI and modern architectures.
        </p>
        <p class="text-lg text-gray-300 leading-relaxed">
            I constantly seek the balance between solid technical experience and the curiosity needed to innovate, ensuring that each project delivers maximum value to users and the business.
        </p>
    `;
    
    aboutContainer.innerHTML = currentLang === 'pt-BR' ? ptAbout : enAbout;
}

function renderHeroSkills() {
    const container = document.getElementById('hero-skills');
    if (!container) return;
    
    const skills = ['Java', 'TypeScript', 'Spring Boot', 'NestJS', 'AWS', 'IA', 'Docker'];
    container.innerHTML = skills.map(skill => `
        <span class="skill-badge px-4 py-2 bg-slate-800 rounded-full text-sm border border-slate-700">${skill}</span>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;

    container.innerHTML = cvData.content.experience.map(exp => `
        <div class="experience-item mb-12">
            <div class="experience-dot"></div>
            <div class="tech-card glass-effect rounded-xl p-6">
                <div class="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-indigo-400">${exp.company}</h3>
                        <p class="text-indigo-200 font-medium">${exp.role[currentLang]}</p>
                    </div>
                    <span class="text-sm text-gray-400 mt-2 md:mt-0">${exp.period[currentLang]}</span>
                </div>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    ${exp.achievements[currentLang].map(ach => `<li>${ach}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    container.innerHTML = cvData.content.skills.map(skillGroup => `
        <div class="tech-card glass-effect rounded-xl p-6">
            <h3 class="text-xl font-semibold mb-4 text-indigo-400">${skillGroup.label[currentLang]}</h3>
            <div class="flex flex-wrap gap-2">
                ${skillGroup.items.split(',').map(item => `
                    <span class="skill-badge px-3 py-1 bg-slate-800 rounded-full text-sm border border-slate-700">${item.trim()}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-content');
    if (!container) return;

    const edu = cvData.content.education;
    container.innerHTML = `
        <div class="tech-card glass-effect rounded-xl p-6">
            <h3 class="text-xl font-bold text-indigo-400">${edu.institution}</h3>
            <p class="text-gray-200">${edu.degree[currentLang]}</p>
            <p class="text-sm text-gray-400 mt-2">${edu.date[currentLang]}</p>
        </div>
    `;
}

// Language Switch Event Listeners
document.getElementById('lang-pt').addEventListener('click', () => {
    currentLang = 'pt-BR';
    localStorage.setItem('preferredLang', currentLang);
    updateLangUI();
    updateContent();
});

document.getElementById('lang-en').addEventListener('click', () => {
    currentLang = 'en';
    localStorage.setItem('preferredLang', currentLang);
    updateLangUI();
    updateContent();
});

function updateLangUI() {
    if (currentLang === 'pt-BR') {
        document.getElementById('lang-pt').classList.add('bg-indigo-600', 'text-white');
        document.getElementById('lang-pt').classList.remove('text-gray-400', 'hover:text-white');
        document.getElementById('lang-en').classList.remove('bg-indigo-600', 'text-white');
        document.getElementById('lang-en').classList.add('text-gray-400', 'hover:text-white');
    } else {
        document.getElementById('lang-en').classList.add('bg-indigo-600', 'text-white');
        document.getElementById('lang-en').classList.remove('text-gray-400', 'hover:text-white');
        document.getElementById('lang-pt').classList.remove('bg-indigo-600', 'text-white');
        document.getElementById('lang-pt').classList.add('text-gray-400', 'hover:text-white');
    }
}

// Initialize content
document.addEventListener('DOMContentLoaded', () => {
    updateLangUI();
    updateContent();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
