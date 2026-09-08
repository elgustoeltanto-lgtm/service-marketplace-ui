import { Job } from '../types/job';

export function createServiceCard(job: Job): string {
  const categoryIcons: Record<string, string> = {
    Animaux: '🐶',
    Nettoyage: '🧹',
    Cuisine: '🍳',
    Bricolage: '🛠️',
    Services: '📦',
  };

  return `
    <article class="job-card">
      <div class="job-card-header">
        <span class="badge">${categoryIcons[job.category] || '💡'} ${job.category}</span>
        <span class="price">${job.price} €</span>
      </div>
      <h3>${job.title}</h3>
      <p class="description">${job.description}</p>
      <div class="job-card-footer">
        <span class="location">📍 ${job.location}</span>
        <button class="btn-apply" data-id="${job.id}">Postuler</button>
      </div>
    </article>
  `;
}
