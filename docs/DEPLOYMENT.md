# Deployment

1. Create Cloudflare D1 database `ai-ultra-deal-hunter` and put its ID in wrangler.toml.
2. Apply migrations/0001_initial.sql.
3. Configure secrets in the Cloudflare Worker dashboard; never commit secrets.
4. Deploy the Worker.
5. Configure Telegram webhook to /api/telegram/webhook.
6. Activate Amazon/Flipkart only through an authorized API/feed/affiliate provider.

Verify /api/health and ensure integrations show NOT CONFIGURED before credentials are added.
