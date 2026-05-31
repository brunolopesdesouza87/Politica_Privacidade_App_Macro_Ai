/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Database, 
  Coins, 
  Cpu, 
  Activity, 
  Lock, 
  Mail, 
  ChevronRight, 
  Search, 
  FileText, 
  Sparkles, 
  ExternalLink,
  Cookie,
  ArrowUpRight,
  Info
} from 'lucide-react';

import Header from './components/Header';
import CookieManager from './components/CookieManager';
import RightsRequestGenerator from './components/RightsRequestGenerator';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';

import { POLICY_SECTIONS, APP_NAME, LAST_UPDATE, SUPPORT_EMAIL } from './data';

function renderSectionIcon(iconName: string, className = "text-indigo-600") {
  switch (iconName) {
    case 'ShieldCheck': return <ShieldCheck size={18} className={className} />;
    case 'Database': return <Database size={18} className={className} />;
    case 'Coins': return <Coins size={18} className={className} />;
    case 'Cpu': return <Cpu size={18} className={className} />;
    case 'Activity': return <Activity size={18} className={className} />;
    case 'Lock': return <Lock size={18} className={className} />;
    case 'Mail': return <Mail size={18} className={className} />;
    default: return <ShieldCheck size={18} className={className} />;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('introducao');
  const [searchTerm, setSearchTerm] = useState('');
  const [showBanner, setShowBanner] = useState(false);

  // Check if user has already made cookie choices
  useEffect(() => {
    const consent = localStorage.getItem('macro_ai_privacy_consent');
    if (!consent) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAllCookies = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      adsensePersonalized: true,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem('macro_ai_privacy_consent', JSON.stringify(preferences));
    setShowBanner(false);
    // Refresh page or trigger custom storage load to sync state
    window.location.reload();
  };

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // If mobile, scroll down to the text area
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter sections based on search keyword
  const filteredSections = POLICY_SECTIONS.filter(section => {
    const textToSearch = `${section.title} ${section.content}`.toLowerCase();
    return textToSearch.includes(searchTerm.toLowerCase());
  });

  const handleSideClick = (id: string) => {
    setActiveTab(id);
    handleScrollToId(id);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col antialiased">
      
      {/* Sticky Banner - Google AdSense & Cookie Compliance */}
      {showBanner && (
        <div id="cookie-banner" className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 animate-slide-in">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Cookie id="banner-cookie-icon" size={20} className="animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 font-display">Controle de Cookies e AdSense</h4>
              <p className="text-[11.5px] text-slate-500 leading-normal mt-1">
                Utilizamos cookies de terceiros, incluindo o <strong>Google AdSense</strong>, para veicular anúncios não invasivos e personalizar sua experiência. Ao prosseguir, você concorda com nossas políticas.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto shrink-0 justify-end">
            <button
              id="banner-config-btn"
              onClick={() => {
                setShowBanner(false);
                handleScrollToId('cookie-manager-section');
              }}
              className="text-[11px] font-bold text-slate-600 hover:text-slate-900 px-3.5 py-2 hover:bg-slate-50 rounded-xl transition"
            >
              Configurar Manualmente
            </button>
            <button
              id="banner-accept-btn"
              onClick={handleAcceptAllCookies}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] font-bold px-4 py-2 shadow-xs transition active:scale-95"
            >
              Aceitar Tudo e Fechar
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <Header onScrollToSection={handleScrollToId} activeId={activeTab} />

      {/* Main Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="mb-8 rounded-2xl bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden shadow-md border border-slate-800">
          {/* Subtle decoration lines */}
          <div className="absolute top-0 right-0 h-40 w-40 bg-radial-gradient from-blue-500/10 to-transparent pointer-events-none" />
          
          <div className="max-w-2xl text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-mono tracking-wider uppercase text-blue-300">
              <Sparkles size={11} className="text-blue-400" />
              <span>Transparência Legal & Google AdSense</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Política de Privacidade <br className="hidden sm:inline" />
              do Aplicativo <span className="text-blue-500">{APP_NAME}</span>
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Nossa missão é otimizar sua nutrição por meio de Inteligência Artificial com segurança absoluta. Aqui você consulta de forma transparente como administramos anúncios, cookies do AdSense e a proteção dos seus dados sob a LGPD e GDPR.
            </p>
          </div>

          {/* Quick status summary widget inside hero */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-800 pt-6">
            <div className="flex flex-col">
              <span className="text-[9.5px] text-slate-500 uppercase tracking-wider font-mono">Última Revisão</span>
              <span className="text-xs font-bold text-slate-150">{LAST_UPDATE}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9.5px] text-slate-500 uppercase tracking-wider font-mono font-bold">AdSense Compliance</span>
              <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5 text-[11px]">
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-ping" />
                DART Cookie Ativo
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9.5px] text-slate-500 uppercase tracking-wider font-mono">Jurisdição Adequada</span>
              <span className="text-xs font-bold text-slate-150">LGPD & GDPR Compliant</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9.5px] text-slate-500 uppercase tracking-wider font-mono">DPO Canal Ativo</span>
              <span className="text-xs font-bold text-blue-300">{SUPPORT_EMAIL}</span>
            </div>
          </div>
        </div>

        {/* Layout Grid: Left Sidebar & Right Content Area */}
        <div className="grid gap-6 lg:grid-cols-12 items-start mt-6">
          
          {/* LEFT COLUMN: Sticky Navigation, Search & Ad Placement */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 flex flex-col gap-5">
            
            {/* Live Search Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">Pesquisar Diretrizes</h3>
              <div className="relative">
                <Search size={15} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  id="search-input"
                  type="text"
                  placeholder="Pesquisar ex: cookies, LGPD..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition"
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-2 italic">
                {searchTerm ? `${filteredSections.length} correspondências encontradas` : 'Digite palavras para realçar termos.'}
              </p>
            </div>

            {/* Sticky Navigation Tabs */}
            <nav className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pb-2 border-b border-slate-100 mb-1.5">Índice da Política</span>
              
              {POLICY_SECTIONS.map((section) => {
                const isActive = activeTab === section.id;
                return (
                  <button
                    id={`nav-link-${section.id}`}
                    key={section.id}
                    onClick={() => handleSideClick(section.id)}
                    className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition cursor-pointer ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-100/50' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {renderSectionIcon(section.icon, isActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-800')}
                      <span className="truncate">{section.title}</span>
                    </div>
                    <ChevronRight size={12} className={`shrink-0 transition ${isActive ? 'text-white rotate-90 sm:rotate-0' : 'text-slate-300'}`} />
                  </button>
                );
              })}
            </nav>

            {/* REALISTIC GOOGLE ADSENSE DISPLAY PLACEHOLDER SLOT */}
            <div className="bg-slate-100 w-full h-[280px] rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-slate-300 p-5 relative overflow-hidden group select-none">
              <div className="absolute top-2 left-2.5 bg-slate-200/85 text-[8.5px] font-bold text-slate-400 px-1.5 py-0.5 rounded uppercase tracking-wider">
                Anúncio AdSense
              </div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest text-center">
                Unidade Eletrônica de Exibição
              </span>
              <div className="mt-3 p-3.5 bg-white/70 rounded-xl border border-slate-200 text-center max-w-[240px]">
                <p className="text-[10px] font-bold text-slate-600">Simulador de Banner 300x250</p>
                <p className="text-[9px] text-slate-400 mt-1">Monetização por cliques ativa em conformidade com as regras do Google.</p>
              </div>
              <div className="absolute bottom-2 text-[8px] text-slate-400 font-mono">
                google_ads_frame_01
              </div>
            </div>

            {/* Quick action / certificate card */}
            <div className="rounded-2xl border border-blue-500/20 bg-blue-50/50 p-5 shadow-xs">
              <div className="flex gap-2 text-blue-800 items-start">
                <Info size={16} className="mt-0.5 shrink-0 text-blue-600" />
                <div>
                  <h4 className="text-xs font-bold text-blue-950 font-display">Rastreamento Transparente</h4>
                  <p className="text-[11px] text-blue-700 leading-normal mt-1">
                    Seus dados de consumo alimentar nunca serão doados ou vendidos. O AdSense veicula apenas anúncios em conformidade estrita de cookies de navegadores.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Real Policy Texts & Dynamic Tools */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Interactive Notice on Top of Policy */}
            <div className="rounded-2xl bg-amber-50/50 border border-amber-200/50 p-5">
              <div className="flex gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-800 shrink-0 select-none font-bold text-xs font-display">Ad</span>
                <div>
                  <h4 className="text-xs font-bold text-amber-800">Uso do Google AdSense</h4>
                  <p className="text-[11.5px] text-amber-700 leading-relaxed mt-1">
                    Esta política atende de forma total aos requisitos de veiculação e publicidade de fornecedores terceiros do Google AdSense, incluindo avisos do cookie DoubleClick. É de nosso interesse garantir que o visitante tenha todas as instruções para revogar e gerenciar seus cookies com agilidade.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Policy content */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col gap-8">
              {filteredSections.length > 0 ? (
                filteredSections.map((section) => {
                  const isTabActive = activeTab === section.id;
                  return (
                    <article 
                      id={section.id} 
                      key={section.id} 
                      className={`scroll-mt-24 pb-8 border-b border-slate-100 last:border-none last:pb-0 transition duration-300 ${isTabActive ? 'bg-blue-50/40 p-4 -mx-4 rounded-xl' : ''}`}
                    >
                      <div className="flex items-center gap-2.5 mb-3.5">
                        <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${isTabActive ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                          {renderSectionIcon(section.icon, isTabActive ? "text-blue-600" : "text-slate-600")}
                        </div>
                        <h2 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                          {section.title}
                        </h2>
                      </div>
                      
                      {/* Section Content formatted */}
                      <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3.5 whitespace-pre-line font-normal">
                        {section.content}
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="text-center py-16">
                  <p className="text-sm text-slate-400 italic">Nenhum termo encontrado para sua busca. Tente buscar por outros termos.</p>
                  <button
                    id="search-clear-btn"
                    onClick={() => setSearchTerm('')}
                    className="mt-4 text-xs font-semibold text-blue-600 hover:text-blue-800 underline font-display"
                  >
                    Limpar filtro de pesquisa
                  </button>
                </div>
              )}
            </div>

            {/* Interactive Cookie preferences section */}
            <CookieManager />

            {/* Expandable FAQ for AdSense & general privacy disclosures */}
            <FAQSection />

            {/* Dynamic Rights request generator for simple copy-to-send email */}
            <RightsRequestGenerator />

            {/* Contact form directed specifically to DPO */}
            <div id="contato-section">
              <ContactForm />
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-bold text-slate-900 tracking-tight text-sm">Macro AI Privacy Center</span>
            <span className="text-[11px] text-slate-400 mt-1">© 2026 Macro AI Ltda. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href="https://adssettings.google.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[11px] font-semibold text-slate-500 hover:text-slate-950 inline-flex items-center gap-1 transition"
            >
              Configurar Anúncios do Google <ArrowUpRight size={10} />
            </a>
            <a 
              href="https://www.aboutads.info/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[11px] font-semibold text-slate-500 hover:text-slate-950 inline-flex items-center gap-1 transition"
            >
              Conformidade de Cookies EUA <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
