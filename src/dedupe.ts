export function shouldAlert(lastAlertAt:string|undefined,lastAlertPrice:number|undefined,currentPrice:number,score:number,now=Date.now()):boolean{
 if(!lastAlertAt)return true; const age=now-new Date(lastAlertAt).getTime(); if(age>=6*60*60*1000)return true;
 if(lastAlertPrice&&currentPrice<lastAlertPrice*.85)return true; if(score>=85&&lastAlertPrice&&currentPrice<lastAlertPrice)return true; return false;
}
