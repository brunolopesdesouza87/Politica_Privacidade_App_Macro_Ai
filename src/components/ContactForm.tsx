/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldAlert, CheckSquare, Square } from 'lucide-react';
import { SUPPORT_EMAIL } from '../data';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Dúvida Geral de Privacidade');
  const [message, setMessage] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Por favor, informe um endereço de e-mail válido.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Por favor, redija o corpo da sua mensagem.');
      return;
    }
    if (!acceptedTerms) {
      setErrorMsg('É obrigatório declarar que leu e compreendeu a política de privacidade antes de prosseguir.');
      return;
    }

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setAcceptedTerms(false);
    }, 1500);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-display font-bold text-lg text-slate-950 mb-1.5 flex items-center gap-2">
        Canal de Atendimento de Privacidade
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        Fale diretamente com nosso encarregado LGPD (DPO). Receba esclarecimentos rápidos sobre anúncios, exclusão ou acesso a dados.
      </p>

      {success ? (
        <div id="contact-success-card" className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 text-center flex flex-col items-center animate-fade-in">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white mb-3">
            <CheckCircle2 size={24} />
          </div>
          <h4 className="text-sm font-bold text-emerald-800">Mensagem Enviada!</h4>
          <p className="text-xs text-emerald-600 mt-2 max-w-sm leading-relaxed">
            Seu chamado de privacidade foi catalogado no protocolo interno. Responderemos sua dúvida no e-mail fornecido em até 15 dias corridos.
          </p>
          <button
            id="contact-new-btn"
            onClick={() => setSuccess(false)}
            className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
          >
            Enviar outro chamado
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {errorMsg && (
            <div id="contact-error-banner" className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700">
              <ShieldAlert size={14} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Seu Nome
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Ex: Pedro"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Seu E-mail
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Ex: pedro@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-2.5 px-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Finalidade do Chamado
            </label>
            <select
              id="contact-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-xl border border-slate-200 py-2.5 px-3 bg-white text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
            >
              <option value="Dúvida Geral de Privacidade">Dúvida Geral sobre Segurança e IA</option>
              <option value="Consentimento e AdSense">Controle de Cookies e AdSense</option>
              <option value="Acesso a Informações Pessoais">Confirmar Tratamento (Acesso aos Dados)</option>
              <option value="Correção de dados biométricos">Correção de Dados Cadastrados</option>
              <option value="Remover todos meus registros">Exclusão Permanente (Esquecimento)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Sua Mensagem ou Solicitação de Retificação
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Descreva minuciosamente sua solicitação..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition resize-none"
            />
          </div>

          {/* Consent Checkbox */}
          <button
            id="contact-checkbox-btn"
            type="button"
            onClick={() => setAcceptedTerms(!acceptedTerms)}
            className="flex items-start gap-2 text-left text-slate-650 hover:text-slate-900 transition focus:outline-hidden cursor-pointer"
          >
            <span className="text-blue-600 mt-0.5 shrink-0">
              {acceptedTerms ? <CheckSquare size={16} /> : <Square size={16} />}
            </span>
            <span className="text-xs text-slate-500 leading-normal">
              Declaro que compreendo que as informações preenchidas acima destinam-se exclusivamente para a análise e resolução da minha requisição pelo DPO do Macro AI.
            </span>
          </button>

          {/* Submit */}
          <button
            id="contact-submit"
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-1.5 rounded-xl py-3 text-xs font-bold text-white shadow-sm transition cursor-pointer ${
              loading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-100/50'
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Registrando protocolo legal...
              </span>
            ) : (
              <>
                <Send size={14} /> Enviar Mensagem Segura
              </>
            )}
          </button>

          {/* Extra Info */}
          <div className="text-center mt-2">
            <span className="text-[10px] text-slate-400 font-mono">
              Seu envio é criptografado ponto-a-ponto. Dúvidas diretas: <strong className="text-slate-600 font-mono">{SUPPORT_EMAIL}</strong>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
