/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PolicySection, FaqItem } from './types';

export const APP_NAME = "Macro AI";
export const APP_CO_FOUNDER = "Macro AI Ltda.";
export const LAST_UPDATE = "31 de maio de 2026";
export const SUPPORT_EMAIL = "privacidade@macroai.com.br";

export const POLICY_SECTIONS: PolicySection[] = [
  {
    id: "introducao",
    title: "1. Introdução e Escopo",
    icon: "ShieldCheck",
    content: `Bem-vindo à Política de Privacidade do **Macro AI**. Nós temos o compromisso de proteger as suas informações pessoais e os seus direitos de privacidade. Esta política se aplica a todos os dados coletados através do nosso site, aplicativo móvel e qualquer serviço relacionado (coletivamente referidos como o **"Aplicativo"** ou **"Macro AI"**).

O Macro AI é uma plataforma inteligente que ajuda usuários a gerenciar sua alimentação, calcular macronutrientes personalizados e monitorar hábitos saudáveis com base em inteligência artificial. Esta política explica de forma clara quais dados nós coletamos, como eles são processados, por que os utilizamos, e como você pode gerenciar sua privacidade.`
  },
  {
    id: "coleta-dados",
    title: "2. Quais Dados Nós Coletamos?",
    icon: "Database",
    content: `Coletamos dados para fornecer recursos melhores a todos os nossos usuários, desde estimativas nutricionais básicas até cálculos complexos de macronutrientes adaptados pelo nosso motor de IA.

**a) Dados fornecidos diretamente por você:**
* **Informações de Conta:** Nome de usuário, endereço de e-mail e foto do perfil quando você se registra.
* **Dados Fisiológicos:** Idade, gênero biológico, peso, altura, nível de atividade física e metas pessoais (emagrecimento, ganho de massa, manutenção).
* **Dados de Dieta:** Alimentos consumidos, horários das refeições, histórico de hidratação e anotações nutricionais.

**b) Dados coletados automaticamente (Dados de Dispositivo e Uso):**
* **Atividade de Uso:** Ações realizadas dentro do aplicativo, telas visualizadas, cliques, termos pesquisados e tempo de sessão.
* **Identificadores Técnicos:** Endereço IP, tipo de dispositivo móvel, sistema operacional (Android/iOS), identificador de publicidade do dispositivo (IDFA para iOS e GAID para Android) e localização aproximada (nível de cidade).`
  },
  {
    id: "google-adsense",
    title: "3. Google AdSense, Cookies e Anúncios",
    icon: "Coins",
    content: `Para manter o Macro AI gratuito e acessível a todos os usuários, veiculamos anúncios fornecidos por parceiros de publicidade de terceiros, incluindo o **Google AdSense**.

**a) Diretrizes Importantes do Google AdSense:**
* **Fornecedores de Terceiros:** O Google, como fornecedor de terceiros, utiliza cookies e identificadores de dispositivos para veicular anúncios neste aplicativo.
* **Cookie DoubleClick (DART):** O uso do cookie DoubleClick pelo Google permite que ele e seus parceiros exibam anúncios para você com base nas suas visitas ao Macro AI e/ou a outros sites ou aplicativos na Internet.
* **Controle do Usuário:** Você pode desativar o uso de anúncios personalizados acessando as [Configurações de Anúncios do Google](https://adssettings.google.com/) ou modificando as configurações do seu dispositivo móvel.
* **Parceiros Adicionais:** Outros fornecedores e redes de anúncios terceiros também podem usar cookies para medir a eficácia dos anúncios e personalizar conteúdos publicitários.

**b) Como Gerenciar Cookies de Anúncios:**
Você pode gerenciar as suas preferências diretamente no nosso painel de gerenciamento de cookies presente no rodapé desta página ou visitando o site [www.aboutads.info](https://www.aboutads.info/) para optar por não receber anúncios personalizados de terceiros.`
  },
  {
    id: "uso-dados",
    title: "4. Como Usamos os Seus Dados?",
    icon: "Cpu",
    content: `Os dados sobre sua alimentação e histórico corporal alimentam nossa Inteligência Artificial para gerar respostas personalizadas e não são vendidos a terceiros sob nenhuma circunstância. Utilizamos seus dados para:

* **Personalização de IA:** Calcular e recalcular diariamente as suas metas de água, proteínas, carboidratos e gorduras com base nos dados que você insere.
* **Aperfeiçoamento Técnico:** Identificar bugs, otimizar interfaces do aplicativo e melhorar os algoritmos de recomendação alimentar.
* **Comunicação:** Responder às suas solicitações de suporte, enviar novidades sobre recursos do aplicativo ou alertas importantes sobre sua conta.
* **Publicidade Direcionada:** Exibir publicidade relevante não personalizada ou personalizada (caso você consinta) com base no Google AdSense.`
  },
  {
    id: "lgpd-gdpr",
    title: "5. Direitos do Usuário (LGPD & GDPR)",
    icon: "Activity",
    content: `Seja você um usuário no Brasil (protegido pela **LGPD**) ou na União Europeia (protegido pelo **GDPR**), nós garantimos o controle total dos seus dados. Seus direitos de privacidade incluem:

* **Confirmação e Acesso:** Obter a confirmação de que estamos tratando seus dados e solicitar uma cópia dos dados que possuímos sobre você.
* **Retificação:** Solicitar a correção de dados incompletos, inexatos ou desatualizados.
* **Eliminação de Dados:** Solicitar a exclusão permanente de todas as suas informações pessoais e dados nutricionais das nossas bases de dados ativas.
* **Revogação do Consentimento:** Retirar a qualquer momento a autorização concedida para cookies ou marketing personalizado.
* **Portabilidade:** Transferir seus dados de macronutrientes para outras plataformas.`
  },
  {
    id: "seguranca",
    title: "6. Segurança e Armazenamento",
    icon: "Lock",
    content: `A segurança dos seus dados de saúde e uso é nossa prioridade absoluta. Implementamos medidas técnicas sofisticadas para garantir a integridade das suas informações:

* **Criptografia:** Transmissão de todos os dados do aplicativo usando o protocolo HTTPS com criptografia SSL e armazenamento seguro em servidores na nuvem altamente protegidos.
* **Restrição de Acesso:** O acesso aos bancos de dados de usuários é restrito de forma rígida apenas aos membros técnicos autorizados e essenciais do Macro AI.
* **Retenção:** Guardamos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou até que você solicite a exclusão da sua conta.`
  },
  {
    id: "contato",
    title: "7. Informações de Contato",
    icon: "Mail",
    content: `Se você tiver dúvidas, sugestões ou quiser exercer qualquer um dos seus direitos garantidos pela LGPD ou GDPR descritos nesta página, sinta-se à vontade para entrar em contato com o nosso Encarregado de Proteção de Dados (DPO):

* **E-mail:** privacidade@macroai.com.br
* **Endereço:** Av. Paulista, 1000 - Bela Vista, São Paulo - SP, Brasil
* **Resposta Esperada:** Nós nos comprometemos a analisar e responder todas as solicitações válidas dentro de um prazo máximo de 15 dias corridos (ou menos para exclusão imediata).`
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    category: "AdSense",
    question: "O Macro AI vende os meus dados nutricionais ou de peso para anunciantes?",
    answer: "Não. Nunca vendemos ou compartilhamos seus dados nutricionais, histórico de alimentos, peso ou fotos corporais para anunciantes ou redes de terceiros. Os anúncios que você vê através do Google AdSense usam apenas identificadores gerais de publicidade e navegação genérica para decidir que anúncio exibir, nunca os seus dados confidenciais de saúde."
  },
  {
    id: "faq-2",
    category: "AdSense",
    question: "Como posso desativar anúncios personalizados do Google AdSense?",
    answer: "Você pode desativar anúncios personalizados ajustando seus controles de cookies a qualquer momento usando o painel interativo de Gerenciamento de Cookies no rodapé desta página. Além disso, você pode desativar essa função em todo o seu navegador através das Configurações de Anúncios do Google (adssettings.google.com) ou pelo site aboutads.info."
  },
  {
    id: "faq-3",
    category: "Dados",
    question: "Como faço para excluir permanentemente todos os meus dados corporais e refeições?",
    answer: "Você pode solicitar a exclusão total imediata dos seus dados diretamente de duas formas: enviando um e-mail para privacidade@macroai.com.br ou utilizando o Gerador de Requisições de Direitos LGPD/GDPR nesta própria landing page, que irá redigir um pedido formal que você poderá copiar e enviar."
  },
  {
    id: "faq-4",
    category: "Segurança",
    question: "O Macro AI utiliza os meus dados para treinar modelos de inteligência artificial de código aberto?",
    answer: "Não. Nossas análises de macronutrientes utilizam endpoints seguros de Inteligência Artificial onde os dados enviados não são persistidos pelo fornecedor do modelo de linguagem nem utilizados para treinar modelos públicos de terceiros, garantindo total privacidade do seu diário alimentar."
  },
  {
    id: "faq-5",
    category: "Geral",
    question: "O Macro AI está de acordo com a LGPD brasileira?",
    answer: "Sim. Nossas operações estão totalmente adequadas à Lei Geral de Proteção de Dados Pessoais (LGPD), garantindo transparência, consentimento prévio para remarketing, segurança na nuvem e canais ágeis para que o usuário confirme seus direitos de acesso e remoção a qualquer momento."
  }
];
