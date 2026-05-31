/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Copy, CheckCircle2, User, HelpCircle, FileText } from 'lucide-react';
import { SUPPORT_EMAIL, APP_NAME } from '../data';

type RequestType = 'access' | 'correction' | 'deletion' | 'portability';

export default function RightsRequestGenerator() {
  const [requestType, setRequestType] = useState<RequestType>('deletion');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);

  const getTemplateText = () => {
    const formattedDpoId = email ? `Id de Registro: [${email}]` : '';
    const date = new Date().toLocaleDateString('pt-BR');

    switch (requestType) {
      case 'access':
        return `Assunto: Solicitação de Acesso aos Dados Pessoais - LGPD/GDPR [${email || 'Usuário'}]

Prezados DPO do ${APP_NAME},

Eu, ${name || '[Seu Nome Completo]'}, portador do e-mail ${email || '[Seu E-mail]'}, venho por meio desta, em conformidade com o Artigo 15 do GDPR e o Artigo 18 da Lei Geral de Proteção de Dados (LGPD), solicitar formalmente a confirmação da existência de tratamento e o acesso simplificado aos meus dados armazenados na plataforma Macro AI.

Solicito receber em formato legível por computador:
1. Meus dados de perfil cadastrados (peso, altura, idade).
2. O histórico de refeições e macronutrientes vinculados à minha conta.
3. Informações se estes dados foram compartilhados com operadores de anúncios de terceiros.

Agradeço o envio das informações para o e-mail de cadastro citado em no máximo 15 dias.

Atenciosamente,
${name || '[Seu Nome Completo]'}
Data de Solicitação: ${date}`;

      case 'correction':
        return `Assunto: Solicitação de Correção de Dados Cadastrais - LGPD/GDPR

Prezados DPO do ${APP_NAME},

Eu, ${name || '[Seu Nome Completo]'}, portador do e-mail ${email || '[Seu E-mail]'}, solicito a retificação imediata dos seguintes dados incorretos ou obsoletos vinculados ao meu cadastro no Macro AI.

Detalhes das inconsistências a serem alteradas:
${details || '[Descreva aqui quais dados estão incorretos, ex: Peso cadastrado errado para fins de cálculo de macronutrientes pela IA]'}

Essa solicitação tem fundamento no Artigo 16 do GDPR e no Artigo 18, inciso III da LGPD.

Atenciosamente,
${name || '[Seu Nome Completo]'}
Data de Solicitação: ${date}`;

      case 'deletion':
        return `Assunto: Solicitação de Exclusão Integral e Permanente de Dados Pessoais - LGPD/GDPR

Prezados DPO do ${APP_NAME},

Eu, ${name || '[Seu Nome Completo]'}, portador do e-mail ${email || '[Seu E-mail]'}, venho formalizar o pedido de eliminação permanente de todos os meus dados pessoais, histórico de ingestão alimentar, registros antropométricos, metas calibradas e registros eletrônicos mantidos sob a custódia do Macro AI.

Esta solicitação ampara-se no Direito ao Esquecimento (Artigo 17 do GDPR) e no Artigo 18, inciso VI da LGPD. Estou ciente de que esta ação é irreversível e causará a rescisão da minha conta no aplicativo.

Solicito a confirmação da finalização deste processo em resposta a este e-mail.

Atenciosamente,
${name || '[Seu Nome Completo]'}
Data de Solicitação: ${date}`;

      case 'portability':
        return `Assunto: Solicitação de Portabilidade de Dados Nutricionais - LGPD/GDPR

Prezados DPO do ${APP_NAME},

Eu, ${name || '[Seu Nome Completo]'}, portador do e-mail ${email || '[Seu E-mail]'}, solicito a portabilidade das minhas informações históricas estruturadas de consumo de macronutrientes e calibragem antropométrica registradas no Macro AI, em arquivo de formato comum estruturado (por exemplo, JSON ou CSV), de acordo com o Artigo 20 do GDPR e Artigo 18, inciso V da LGPD.

Desejo portar essas metas para fins de autogestão ou integração com outro aplicativo.

Atenciosamente,
${name || '[Seu Nome Completo]'}
Data de Solicitação: ${date}`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getTemplateText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex gap-3 border-b border-slate-100 pb-5 mb-5 animate-fade-in">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FileText size={24} />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-slate-950">
            Gerador de Requisições de Direitos (LGPD & GDPR)
          </h3>
          <p className="text-sm text-slate-500">
            Formule solicitações formais de privacidade de forma rápida. Gere o rascunho em conformidade legal, copie e envie pelo seu e-mail cadastrado.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Form Controls */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Tipo de Requisição
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                id="request-type-deletion"
                onClick={() => setRequestType('deletion')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg text-center border transition cursor-pointer ${
                  requestType === 'deletion'
                    ? 'border-red-500 bg-red-50 text-red-700 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                }`}
              >
                Exclusão de Dados
              </button>
              <button
                id="request-type-access"
                onClick={() => setRequestType('access')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg text-center border transition cursor-pointer ${
                  requestType === 'access'
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                }`}
              >
                Acesso e Relatório
              </button>
              <button
                id="request-type-correction"
                onClick={() => setRequestType('correction')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg text-center border transition cursor-pointer ${
                  requestType === 'correction'
                    ? 'border-amber-500 bg-amber-50 text-amber-700 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                }`}
              >
                Correção de Erros
              </button>
              <button
                id="request-type-portability"
                onClick={() => setRequestType('portability')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg text-center border transition cursor-pointer ${
                  requestType === 'portability'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                }`}
              >
                Portabilidade
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Seu Nome Completo
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
              <input
                id="rights-name-input"
                type="text"
                placeholder="Ex: João da Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              E-mail de Cadastro no App
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
              <input
                id="rights-email-input"
                type="email"
                placeholder="Ex: jao@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              />
            </div>
          </div>

          {requestType === 'correction' && (
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Dados a Corrigir
              </label>
              <textarea
                id="rights-details-input"
                placeholder="Ex: Peso atual cadastrado como 90kg, mas o correto é 85kg e isso afeta meu plano gerado."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition h-20 resize-none"
              />
            </div>
          )}

          <div className="bg-slate-50/60 rounded-xl p-3 border border-slate-155 flex items-start gap-2.5">
            <HelpCircle size={16} className="text-slate-400 mt-0.5 shrink-0" />
            <p className="text-[11px] text-slate-500 leading-normal">
              <strong>Como enviar?</strong> Clique em "Copiar Texto" à direita, abra sua caixa de e-mail e envie a mensagem para <strong className="text-blue-600 text-[12px]">{SUPPORT_EMAIL}</strong>. Seu e-mail de envio deve ser idêntico ao e-mail de cadastro.
            </p>
          </div>
        </div>

        {/* Text Preview & copy */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-slate-900 p-5 text-slate-200 border border-slate-800">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rascunho Jurídico Gerado</span>
              <span className="text-[10px] font-mono rounded bg-slate-800 text-slate-400 px-1.5 py-0.5">Formal</span>
            </div>
            
            <div className="text-[12px] font-mono whitespace-pre-wrap leading-relaxed max-h-[250px] overflow-y-auto text-slate-300 pr-1.5">
              {getTemplateText()}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 italic">Pronto para ser enviado</span>
            <button
              id="rights-copy-btn"
              onClick={handleCopy}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition cursor-pointer ${
                copied 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-md'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle2 size={14} /> Copiado!
                </>
              ) : (
                <>
                  <Copy size={13} /> Copiar Texto
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
