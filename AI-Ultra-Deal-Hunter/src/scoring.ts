import type { ProductObservation, ScoredDeal } from "./types";
const LOW_PRICE_TIERS = [1, 9, 49, 99, 199, 499, 999];
export function scoreDeal(o: ProductObservation, previousPrice?: number, averagePrice?: number): ScoredDeal {
  const p=o.currentPrice, listed=o.listedPrice??0;
  const historyDropPercent=previousPrice&&previousPrice>0?Math.max(0,((previousPrice-p)/previousPrice)*100):0;
  const discountPercent=listed>p&&listed>0?((listed-p)/listed)*100:0;
  const historyScore=Math.min(40,historyDropPercent*.8);
  const tierBonus=LOW_PRICE_TIERS.reduce((best,tier)=>p<=tier?Math.max(best,20-LOW_PRICE_TIERS.indexOf(tier)*2):best,0);
  const credibilityScore=discountPercent>=90?3:discountPercent>=70?8:discountPercent>=50?12:discountPercent>=20?15:5;
  const availabilityScore=o.availability?.toLowerCase().includes("out")?0:10;
  const averageScore=averagePrice&&averagePrice>0?Math.min(15,Math.max(0,((averagePrice-p)/averagePrice)*15)):0;
  let score=Math.round(historyScore+tierBonus+credibilityScore+availabilityScore+averageScore);
  if(!previousPrice&&!averagePrice) score=Math.min(score,70);
  const parts:string[]=[];
  if(historyDropPercent>=10) parts.push(`${historyDropPercent.toFixed(0)}% below previous price`);
  if(tierBonus>=14) parts.push("very low price tier");
  if(discountPercent>=20&&discountPercent<90) parts.push(`${discountPercent.toFixed(0)}% listed-price discount`);
  if(!previousPrice&&!averagePrice) parts.push("No price history yet");
  return {observation:o,score,previousPrice,historyDropPercent,discountPercent,reason:parts.join(" • ")||"Candidate deal",tierBonus};
}
