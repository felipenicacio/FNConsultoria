import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { seoReadySlugs } from './src/data/services.ts';

/**
 * Domínio do site — lido da variável de ambiente PUBLIC_SITE_URL.
 *
 * Domínio registrado: fnsecurity.com.br (FEL-32 concluída)
 * Endereço canônico de produção: https://www.fnsecurity.com.br
 * Redirect: fnsecurity.com.br/* → https://www.fnsecurity.com.br/${1} (301, Cloudflare)
 * Configuração Cloudflare Pages em andamento: FEL-36
 *
 * PUBLIC_SITE_URL está definida como https://www.fnsecurity.com.br
 * nas variáveis de ambiente de produção do Cloudflare Pages.
 *
 * Para desenvolvimento local: .env → PUBLIC_SITE_URL=http://localhost:4321
 *
 * O fallback abaixo é intencional — builds sem a variável usam um
 * placeholder claramente não-produtivo. Não substitua o fallback pelo
 * domínio real — produção deve vir exclusivamente da variável de ambiente.
 */
const SITE_URL =
  process.env.PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://placeholder.fnsecurity.com.br';

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
