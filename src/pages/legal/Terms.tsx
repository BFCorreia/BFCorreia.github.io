import { LegalPageLayout } from '../../components/layout/LegalPageLayout';

export const Terms = () => {
  return (
    <LegalPageLayout title="Termos de Uso">
      <div className="space-y-6">
        <p><strong>Última atualização:</strong> 14 de novembro de 2024</p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">1. Aceitação dos Termos</h2>
        <p>
          Ao acessar e usar este site, você aceita e concorda em cumprir estes
          termos de uso e todas as leis e regulamentos aplicáveis. Se você não
          concordar com algum destes termos, está proibido de usar ou acessar
          este site.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">2. Uso do Site</h2>
        <p>
          Este site é destinado para fins informativos e profissionais, servindo
          como portfólio digital de Bruno Correia. Você concorda em:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Não usar o site para fins ilegais ou não autorizados</li>
          <li>
            Não tentar acessar áreas não autorizadas do site ou sistemas
            relacionados
          </li>
          <li>Não interferir ou interromper o funcionamento do site</li>
          <li>
            Não reproduzir, duplicar ou copiar conteúdo sem autorização prévia
          </li>
          <li>
            Não utilizar o site de forma que possa danificar, desabilitar ou
            prejudicar o servidor ou redes conectadas
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">3. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo deste site, incluindo mas não limitado a texto,
          gráficos, logos, imagens, código-fonte e design, é propriedade de
          Bruno Correia e protegido por leis de direitos autorais e propriedade
          intelectual do Brasil e internacionais.
        </p>
        <p>
          É proibida a reprodução, distribuição ou uso comercial de qualquer
          conteúdo sem autorização expressa por escrito.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">4. Isenção de Responsabilidade</h2>
        <p>
          Este site é fornecido "como está" e "conforme disponível", sem
          garantias de qualquer tipo, expressas ou implícitas. Não garantimos
          que:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>O site estará sempre disponível ou livre de erros</li>
          <li>
            Os resultados obtidos através do uso do site serão precisos ou
            confiáveis
          </li>
          <li>Quaisquer defeitos no site serão corrigidos</li>
        </ul>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">5. Limitação de Responsabilidade</h2>
        <p>
          Em nenhuma circunstância Bruno Correia será responsável por quaisquer
          danos diretos, indiretos, incidentais, especiais ou consequenciais
          resultantes do uso ou incapacidade de usar este site.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">6. Links para Sites de Terceiros</h2>
        <p>
          Este site pode conter links para sites de terceiros, incluindo perfis
          em redes sociais profissionais. Estes links são fornecidos apenas para
          sua conveniência. Não temos controle sobre o conteúdo desses sites e
          não somos responsáveis por suas práticas ou conteúdo.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">7. Privacidade</h2>
        <p>
          O uso deste site também é regido por nossa Política de Privacidade.
          Por favor, revise nossa <a href="/legal/privacy" className="text-accent hover:underline">Política de Privacidade</a> para entender nossas práticas.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">8. Modificações dos Termos</h2>
        <p>
          Reservamo-nos o direito de modificar estes termos a qualquer momento
          sem aviso prévio. As alterações entrarão em vigor imediatamente após a
          publicação no site. É sua responsabilidade revisar estes termos
          periodicamente.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">9. Lei Aplicável</h2>
        <p>
          Estes termos serão regidos e interpretados de acordo com as leis do
          Brasil. Qualquer disputa relacionada a estes termos será submetida à
          jurisdição exclusiva dos tribunais brasileiros.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">10. Rescisão</h2>
        <p>
          Podemos rescindir ou suspender seu acesso ao site imediatamente, sem
          aviso prévio, se você violar qualquer um destes termos.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">11. Contato</h2>
        <p>
          Para questões sobre estes termos de uso, dúvidas ou sugestões, entre
          em contato através do e-mail:
        </p>
        <p><strong>brunocorreiasf@gmail.com</strong></p>

        <h2 className="font-display text-2xl font-bold mt-8 mb-4 text-[#EDEDED]">12. Disposições Gerais</h2>
        <p>
          Se qualquer disposição destes termos for considerada inválida ou
          inexequível, as disposições restantes continuarão em pleno vigor e
          efeito. A falha em fazer valer qualquer direito ou disposição destes
          termos não constituirá uma renúncia a tal direito ou disposição.
        </p>
      </div>
    </LegalPageLayout>
  );
};
