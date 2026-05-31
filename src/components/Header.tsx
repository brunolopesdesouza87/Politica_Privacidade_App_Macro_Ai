/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, BrainCircuit, Landmark, Flame } from 'lucide-react';
import { LAST_UPDATE } from '../data';

interface HeaderProps {
  onScrollToSection: (id: string) => void;
  activeId: string;
}

export default function Header({ onScrollToSection, activeId }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-100 transition duration-300 hover:rotate-12">
            <div className="w-4 h-4 bg-white rounded-xs rotate-45"></div>
          </div>
          <div>
            <span className="font-display font-black text-xl tracking-tight text-slate-900">
              Macro <span className="text-blue-600">AI</span>
            </span>
            <span className="hidden sm:inline-block ml-3.5 text-[10px] font-mono font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100/60">
              POLÍTICA DE PRIVACIDADE
            </span>
          </div>
        </div>

        {/* Quick Meta */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end text-right">
            <span className="text-[10.5px] text-slate-400 uppercase tracking-widest font-mono">Última Atualização</span>
            <span className="text-xs font-semibold text-slate-600">{LAST_UPDATE}</span>
          </div>
          
          <button
            id="header-audit-btn"
            onClick={() => onScrollToSection('cookie-manager-section')}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white tracking-wide shadow-xs hover:bg-blue-700 active:scale-95 transition cursor-pointer"
          >
            <ShieldCheck size={14} className="animate-pulse" />
            <span>Auditoria AdSense</span>
          </button>
        </div>

      </div>
    </header>
  );
}
