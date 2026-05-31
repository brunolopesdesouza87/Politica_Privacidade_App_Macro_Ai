/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PolicySection {
  id: string;
  title: string;
  icon: string; // lucide icon name
  content: string; // markdown or rich text (rendered via custom styling)
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'AdSense' | 'Dados' | 'Segurança' | 'Geral';
}

export interface CookieSettings {
  necessary: boolean; // Always true
  analytics: boolean;
  adsensePersonalized: boolean; // AdSense policy consent tracker
  savedAt?: string;
}

export interface ConsentLog {
  action: string;
  timestamp: string;
  details: string;
}
