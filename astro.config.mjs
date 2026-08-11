import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { seoReadySlugs } from './src/data/services.ts';

/**
 * Domínio do site — lido da variável de ambiente PUBLIC_SITE_URL.
 *
 * Defina PUBLIC_SITE_URL nas variáveis de ambiente da plataforma de
 * hospedagem (Cloudflare Pages: Settings → Environment variables) ou
 * no arquivo .env local para desenvolvimento.
 *
 * O fallback sinaliza que o domínio ainda não está aprovado.
 * Não substitua por domínio fixo antes da Fase 7 — QA e Publicação V1.
 */
const SITE_URL =
  process.env.PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://placeholder.fnconsulting.com.br';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      /**
       * Exclui do sitemap:
       * - /404 (página de erro, nunca deve ser indexada)
       * - páginas de serviço com seoReady: false (aguardam FEL-19 a FEL-28)
       *
       * Para incluir uma página de serviço no sitemap, defina seoReady: true
       * na entrada correspondente de src/data/services.ts após a conclusão
       * da issue Linear e aprovação do conteúdo no Notion.
       */
      filter: (url) => {
        if (url.includes('/404')) return false;
        const match = url.match(/\/servicos\/([^/]+)\/?$/);
        if (match) return seoReadySlugs.has(match[1]);
        return true;
      },
      changefreq: 'monthly',
      priority: 0.8,
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
