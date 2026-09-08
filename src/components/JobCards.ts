import { Job } from '../types/job';

export function renderJobCard(job: Job): string {
  return `
    <div class="job-card" data-id="${job.id}">
      <div class="card-header">
        <span class="badge">${job.category}</span>
        <span class="price">${job.price} $</span>
      </div>
      <h3>${job.title}</h3>
      <p>${job.description}</p>
      <div class="card-footer">
        <small>📍 ${job.location}</small>
        <button class="btn-pay" onclick="window.openPaymentModal('${job.id}')">Payer / Réserver</button>
      </div>
    </div>
  `;
}
