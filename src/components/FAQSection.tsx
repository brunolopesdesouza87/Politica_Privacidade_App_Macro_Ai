/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data';
import { FaqItem } from '../types';

export default function FAQSection() {
  const [activeId, setActiveId] = useState<string | null>("faq-1");
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'AdSense' | 'Dados' | 'Segurança'>('All');

  const filteredItems = FAQ_ITEMS.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-5 mb-5">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <HelpCircle size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-slate-950">
              Perguntas Frequentes (FAQ)
            </h3>
            <p className="text-sm text-slate-500">
              Respostas diretas sobre como administramos anúncios, cookies e sua segurança de dados no Macro AI.
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
          <input
            id="faq-search-input"
            type="text"
            placeholder="Pesquisar termo ex: 'AdSense', 'exclusão'..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5">
          {(['All', 'AdSense', 'Dados', 'Segurança'] as const).map((cat) => (
            <button
              id={`faq-cat-${cat}`}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-2 text-xs font-semibold cursor-pointer transition ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'All' ? 'Todos' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div 
                key={item.id}
                className={`rounded-xl border transition-all ${
                  isOpen ? 'border-blue-600/30 bg-blue-50/10' : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  id={`faq-toggle-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between p-4 text-left focus:outline-hidden cursor-pointer"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold text-slate-500 uppercase">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <span className="text-slate-400 shrink-0 ml-3">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-650 leading-relaxed border-t border-slate-100 mt-1">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 bg-slate-50/50 border border-dashed rounded-xl">
            <MessageSquare className="mx-auto text-slate-300 mb-2" size={24} />
            <p className="text-xs text-slate-400 italic">Nenhum esclarecimento encontrado para os critérios selecionados.</p>
          </div>
        )}
      </div>
    </div>
  );
}
