export function calculatePayout(amount: number, hasReferrer: boolean): PaymentBreakdown {
  const platformFee = amount * 0.01;
  const transferFee = amount * 0.01;
  const referrerBonus = hasReferrer ? amount * 0.01 : 0;
  
  // Si pas de parrain, les 1% reviennent à l'exécuteur (97% + 1% = 98%)
  const executorPayout = hasReferrer ? amount * 0.97 : amount * 0.98;

  return {
    totalAmount: amount,
    platformFee,
    transferFee,
    referrerBonus,
    executorPayout,
  };
}
