import { calculatePayout } from '../utils/payment';

export function renderMobileMoneyModal(price: number, hasReferrer: boolean): string {
  const breakdown = calculatePayout(price, hasReferrer);

  return `
    <div class="modal-payment">
      <h3>Validation & Paiement Mobile Money</h3>
      
      <div class="payment-summary">
        <p><strong>Montant du job :</strong> ${price.toFixed(2)} $</p>
        <hr />
        <p>Répartition :</p>
        <ul>
          <li>Exécuteur : ${breakdown.executorPayout.toFixed(2)} $</li>
          <li>Frais de service (Plateforme) : ${breakdown.platformFee.toFixed(2)} $</li>
          <li>Frais de transfert : ${breakdown.transferFee.toFixed(2)} $</li>
          ${hasReferrer ? `<li>Bonus Parrainage : ${breakdown.referrerBonus.toFixed(2)} $</li>` : ''}
        </ul>
      </div>

      <form id="mobile-money-form">
        <label for="provider">Choisissez le service :</label>
        <select id="provider" required>
          <option value="mpesa">M-Pesa / Vodacom</option>
          <option value="orange">Orange Money</option>
          <option value="airtel">Airtel Money</option>
          <option value="mtn">MTN Mobile Money</option>
        </select>

        <label for="phone">Numéro de téléphone :</label>
        <input type="tel" id="phone" placeholder="+243..." required />

        <button type="submit" class="btn-pay">Payer ${price.toFixed(2)} $</button>
      </form>
    </div>
  `;
}
