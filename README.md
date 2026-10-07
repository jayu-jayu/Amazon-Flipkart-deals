# AI Ultra Deal Hunter

Cloud-first Android-friendly deal alert platform for Amazon + Flipkart.

Included: Cloudflare Worker + D1 schema, scheduled scanner, price history, deterministic scoring, dedupe/cooldown, Telegram sendPhoto alert path, mobile dashboard, connector interfaces, tests, and NOT CONFIGURED states.

No scraping, CAPTCHA bypass, private API abuse, auto-buy, payment automation, or fake production data.

Before activation, Amazon/Flipkart/Telegram remain NOT CONFIGURED. Add only authorized marketplace API/feed credentials and Telegram secrets through deployment secret settings.

API: GET /api/health, GET /api/dashboard, POST /api/scan, POST /api/telegram/webhook
