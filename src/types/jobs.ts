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
