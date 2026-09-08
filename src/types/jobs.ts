export interface Job {
  id: string;
  title: string;
  category: 'Animaux' | 'Nettoyage' | 'Cuisine' | 'Bricolage' | 'Services';
  description: string;
  price: number;
  location: string;
  author: string;
  status: 'open' | 'in_progress' | 'completed';
  createdAt: string;
}
export interface PaymentBreakdown {
  totalAmount: number;
  platformFee: number;     // 1%
  transferFee: number;     // 1%
  referrerBonus: number;   // 1% (ou 0%)
  executorPayout: number;  // 97% (ou 98%)
}

export interface Job {
  id: string;
  title: string;
  price: number;
  executorId: string;
  referrerId?: string;     // Optionnel : ID du tiers qui a recommandé l'exécuteur
}
