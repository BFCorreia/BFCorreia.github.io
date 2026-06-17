import { LegalPageLayout } from '../../components/layout/LegalPageLayout';

export const Privacy = () => {
  return (
    <LegalPageLayout title="Política de Privacidade">
      <div className="space-y-6">
        <p><strong>Última atualização:</strong> 14 de novembro de 2024</p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">1. Informações que Coletamos</h2>
        <p>
          Este site é um portfólio pessoal estático e não coleta automaticamente
          informações pessoais dos visitantes. Quando você entra em contato por
          e-mail, as informações fornecidas serão usadas exclusivamente para
          responder à sua mensagem.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">2. Uso de Informações</h2>
        <p>
          As informações de contato fornecidas voluntariamente serão utilizadas
          apenas para:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Responder a consultas e solicitações</li>
          <li>Comunicação relacionada a oportunidades profissionais</li>
          <li>Discussões sobre projetos e colaborações</li>
        </ul>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">3. Compartilhamento de Informações</h2>
        <p>
          Não compartilhamos, vendemos ou alugamos suas informações pessoais a
          terceiros. Suas informações são mantidas em sigilo e utilizadas
          exclusivamente para os fins descritos nesta política.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">4. Cookies e Tecnologias de Rastreamento</h2>
        <p>
          Este site não utiliza cookies ou tecnologias de rastreamento. Não
          coletamos dados de navegação ou comportamento dos visitantes.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">5. Links Externos</h2>
        <p>
          Este site contém links para perfis em plataformas externas (LinkedIn,
          GitHub). Não somos responsáveis pelas práticas de privacidade dessas
          plataformas. Recomendamos que você leia as políticas de privacidade de
          cada site que visitar.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">6. Segurança das Informações</h2>
        <p>
          Embora este site não colete dados automaticamente, tomamos medidas
          razoáveis para proteger qualquer informação que você compartilhe
          conosco voluntariamente através de comunicação direta.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">7. Direitos dos Usuários</h2>
        <p>Você tem o direito de:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Solicitar a exclusão de qualquer informação pessoal que tenha
            compartilhado conosco
          </li>
          <li>
            Solicitar informações sobre quais dados pessoais possuímos sobre
            você
          </li>
          <li>
            Retirar o consentimento para uso de suas informações a qualquer
            momento
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">8. Alterações nesta Política</h2>
        <p>
          Reservamo-nos o direito de atualizar esta Política de Privacidade
          periodicamente. Quaisquer alterações serão publicadas nesta página com
          uma data de atualização revisada.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">9. Legislação Aplicável</h2>
        <p>
          Esta política está em conformidade com a Lei Geral de Proteção de
          Dados (LGPD - Lei nº 13.709/2018) do Brasil.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">10. Contato</h2>
        <p>
          Para questões sobre esta política de privacidade, dúvidas ou
          solicitações relacionadas aos seus dados pessoais, entre em contato
          através do e-mail:
        </p>
        <p><strong>brunocorreiasf@gmail.com</strong></p>
      </div>
    </LegalPageLayout>
  );
};
