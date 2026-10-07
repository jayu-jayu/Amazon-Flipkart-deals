export type Platform = "amazon" | "flipkart";
export interface ProductObservation { platform: Platform; externalId: string; name: string; url: string; imageUrl?: string; seller?: string; currency: "INR"; currentPrice: number; listedPrice?: number; availability?: string; }
export interface ScoredDeal { observation: ProductObservation; score: number; previousPrice?: number; historyDropPercent: number; discountPercent: number; reason: string; tierBonus: number; }
export interface ConnectorStatus { platform: Platform; configured: boolean; message: string; }
export interface Env { DB: D1Database; APP_ENV: string; TELEGRAM_BOT_TOKEN?: string; TELEGRAM_CHAT_ID?: string; AMAZON_API_BASE_URL?: string; AMAZON_API_KEY?: string; FLIPKART_API_BASE_URL?: string; FLIPKART_API_KEY?: string; AI_API_BASE_URL?: string; AI_API_KEY?: string; }
