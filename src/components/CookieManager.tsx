/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldAlert, Cookie, ToggleLeft, ToggleRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { CookieSettings, ConsentLog } from '../types';

export default function CookieManager() {
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: true,
    adsensePersonalized: true
  });

  const [logs, setLogs] = useState<ConsentLog[]>([]);
  const [justSaved, setJustSaved] = useState(false);

  // Initialize from LocalStorage and add an initial log
  useEffect(() => {
    const saved = localStorage.getItem('macro_ai_privacy_consent');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsed }));
        addLog("Carregamento de Estado", "Preferências recuperadas com sucesso a partir do armazenamento local.");
      } catch (e) {
        addLog("Erro de Leitura", "Configurações corrompidas no cache. Restaurado padrões de fábrica.");
      }
    } else {
      addLog("Primeiro Acesso", "Novas políticas apresentadas. Aceite implícito de cookies necessários carregado.");
    }
  }, []);

  const addLog = (action: string, details: string) => {
    const timestamp = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs(prev => [
      { action, timestamp, details },
      ...prev.slice(0, 4) // keep last 5 logs
    ]);
  };

  const handleToggle = (key: keyof CookieSettings) => {
    if (key === 'necessary') return; // Cannot turn off necessary cookies
    setSettings(prev => {
      const updated = {
        ...prev,
        [key]: !prev[key]
      };
      addLog(
        "Alteração Provisória",
        `Alterado '${key === 'analytics' ? 'Cookies Estatísticos' : 'Anúncios Personalizados'}' para [${updated[key] ? 'ATIVADO' : 'DESATIVADO'}]. É necessário salvar.`
      );
      return updated;
    });
  };

  const saveSettings = () => {
    const withDate = {
      ...settings,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem('macro_ai_privacy_consent', JSON.stringify(withDate));
    addLog(
      "Salvar Definitivo",
      `Preferências gravadas com sucesso. Parâmetros de publicidade do Google AdSense recalculados.`
    );
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 3000);
  };

  const resetSettings = () => {
    const defaults = {
      necessary: true,
      analytics: true,
      adsensePersonalized: true
    };
    setSettings(defaults);
    localStorage.removeItem('macro_ai_privacy_consent');
    addLog("Restauração", "Todos os cookies de rastreamento redefinidos para os padrões de conformidade máxima.");
  };

  return (
    <div id="cookie-manager-section" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between border-b border-slate-100 pb-5">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Cookie size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-slate-950">
              Gerência Interativa de Consentimento
            </h3>
            <p className="text-sm text-slate-500">
              Configure as autorizações de cookies e identifique a conformidade com as exigências de privacidade do Google AdSense.
            </p>
          </div>
        </div>

        {/* AdSense Shield */}
        <div className="flex items-center gap-2 rounded-xl bg-blue-50 border border-blue-100 px-3 py-2">
          <ShieldAlert size={16} className="text-blue-600 animate-pulse" />
          <div className="text-left">
            <div className="text-[10px] font-bold text-blue-800 uppercase tracking-wider">AdSense Compliant</div>
            <div className="text-[11px] text-blue-700 font-medium">Políticas de Cookies do Google Ativas</div>
          </div>
        </div>
      </div>

      {/* Grid: Controles e Audit Log */}
      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        
        {/* Col 1: Switches */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Necessary */}
          <div id="cookie-necessary" className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/40 p-4 transition-all">
            <div className="flex flex-col pr-4">
              <span className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                Cookies Imperativos e de Segurança
                <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[9px] font-bold text-blue-700 uppercase">Obrigatório</span>
              </span>
              <span className="text-xs text-slate-500 mt-1">
                Essenciais para o funcionamento básico do aplicativo, como autenticação de usuário e salvamento das metas básicas de calorias.
              </span>
            </div>
            <div>
              <div className="text-blue-600 cursor-not-allowed">
                <ToggleRight size={38} className="opacity-90" />
              </div>
            </div>
          </div>

          {/* Analytics */}
          <button
            id="cookie-analytics-toggle"
            onClick={() => handleToggle('analytics')}
            className={`flex items-center justify-between text-left rounded-xl border p-4 transition-all hover:bg-slate-50/50 cursor-pointer ${
              settings.analytics ? 'border-blue-100 bg-blue-50/10' : 'border-slate-150 bg-transparent'
            }`}
          >
            <div className="flex flex-col pr-4">
              <span className="text-sm font-semibold text-slate-800">
                Cookies Estatísticos (Analytics)
              </span>
              <span className="text-xs text-slate-500 mt-1">
                Permitem o acompanhamento de métricas de desempenho sob anonimato, ajudando a IA a entender quais recursos alimentares são mais acessados.
              </span>
            </div>
            <div>
              {settings.analytics ? (
                <ToggleRight size={38} className="text-blue-600" />
              ) : (
                <ToggleLeft size={38} className="text-slate-300" />
              )}
            </div>
          </button>

          {/* AdSense Personalized */}
          <button
            id="cookie-adsense-toggle"
            onClick={() => handleToggle('adsensePersonalized')}
            className={`flex items-center justify-between text-left rounded-xl border p-4 transition-all hover:bg-slate-50/50 cursor-pointer ${
              settings.adsensePersonalized ? 'border-emerald-100 bg-emerald-50/100' : 'border-slate-150 bg-transparent'
            }`}
          >
            <div className="flex flex-col pr-4">
              <span className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                Anúncios Personalizados (Google AdSense)
                <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700 uppercase">Monetização</span>
              </span>
              <span className="text-xs text-slate-500 mt-1">
                Autoriza o Google e seus parceiros a coletarem cookies de preferência e identificadores para exibir propagandas direcionadas aos seus interesses.
              </span>
            </div>
            <div>
              {settings.adsensePersonalized ? (
                <ToggleRight size={38} className="text-emerald-650 text-emerald-600" />
              ) : (
                <ToggleLeft size={38} className="text-slate-300" />
              )}
            </div>
          </button>

          {/* Actions */}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <button
              id="cookie-save-btn"
              onClick={saveSettings}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold shadow-sm transition cursor-pointer ${
                justSaved 
                  ? 'bg-emerald-600 text-white animate-pulse' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
              }`}
            >
              {justSaved ? (
                <>
                  <CheckCircle2 size={16} /> Preferências Gravadas!
                </>
              ) : (
                "Salvar Preferências atuais"
              )}
            </button>

            <button
              id="cookie-reset-btn"
              onClick={resetSettings}
              className="flex items-center gap-1 border border-slate-200 text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-xl px-4 py-2.5 text-xs font-semibold transition cursor-pointer"
            >
              <RotateCcw size={14} /> Redefinir para Conformidade Máxima
            </button>
          </div>

        </div>

        {/* Col 2: Consent Status & Audit Logs */}
        <div className="lg:col-span-5 bg-slate-50/60 rounded-xl border border-slate-200 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 font-display">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Histórico de Auditoria Local</span>
              <span className="text-[10px] font-mono text-blue-600 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Tempo Real</span>
            </div>

            {/* Logs List */}
            <div className="mt-3 flex flex-col gap-2.5">
              {logs.length > 0 ? (
                logs.map((log, index) => (
                  <div key={index} className="text-[11px] font-mono leading-relaxed bg-white border border-slate-200/60 rounded p-2 shadow-xs">
                    <div className="flex items-center justify-between font-bold text-slate-700 mb-0.5">
                      <span>{log.action}</span>
                      <span className="text-slate-400 text-[10px]">{log.timestamp}</span>
                    </div>
                    <p className="text-slate-500">{log.details}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-xs text-slate-400 italic">Nenhum evento registrado ainda.</div>
              )}
            </div>
          </div>
          
          <div className="mt-6 border-t border-slate-200 pt-3 text-[10px] text-slate-400 leading-normal">
            *Todas as opções salvas são processadas e armazenadas unicamente no seu dispositivo para total privacidade de cookies e segurança das suas preferências.
          </div>
        </div>

      </div>
    </div>
  );
}
