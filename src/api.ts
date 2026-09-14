export type Coin={id:string;name:string;current_price:number};
export async function fetchCoins():Promise<Coin[]>{const r=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1');if(!r.ok)throw new Error('Unable to load market data');return r.json();}
