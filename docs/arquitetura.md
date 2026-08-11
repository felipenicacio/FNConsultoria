# Arquitetura Técnica — FN Consulting Site

> Fonte de verdade: Notion (decisões), Linear (execução), GitHub (implementação).

## Stack

| Elemento | Escolha | Motivo |
|---|---|---|
| Framework | Astro 7 | Geração estática, JS mínimo no cliente, suporte nativo a TypeScript |
| Tipagem | TypeScript strict | Segurança na evolução dos dados de serviços |
| CSS | Vanilla CSS moderno | Sem dependências desnecessárias, tokens centralizados em `global.css` |
| JS cliente | Mínimo | Apenas interações essenciais (menu mobile) |
| Geração | SSG (estático) | Performance, segurança, sem backend |
| Hospedagem | Cloudflare Pages | CI/CD via wrangler, CDN global, HTTPS automático |

---

## Estrutura de diretórios

```
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Services.astro          ← data-driven via services.ts
│   ├── Journey.astro           ← data-driven, etapas aprovadas na Fase 1
│   ├── Methodology.astro
│   ├── ConsultantProfile.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   ├── ServiceHero.astro       ← template de hero para páginas de serviço
│   ├── ServiceBody.astro       ← template de corpo para páginas de serviço
│   └── ServiceRelated.astro    ← serviços relacionados
├── data/
│   └── services.ts             ← fonte de verdade técnica dos serviços
├── layouts/
│   └── BaseLayout.astro        ← canonical URL, SEO, Schema.org, skip link
├── pages/
│   ├── index.astro
│   ├── 404.astro
│   └── servicos/
│       └── [slug].astro        ← rota dinâmica para páginas de serviço
└── styles/
    └── global.css              ← design tokens, utilitários globais

public/
├── favicon.svg
└── robots.txt

docs/
├── projeto.md
├── identidade-visual.md
└── arquitetura.md              ← este arquivo

.github/
└── workflows/
    └── build.yml               ← type check + build em todo PR/push
```

---

## Design tokens (`src/styles/global.css`)

| Token | Valor | Uso |
|---|---|---|
| `--navy-950` | `#07111f` | Fundos escuros, Hero, Footer |
| `--navy-900` | `#0b1729` | Textos sobre fundo escuro |
| `--navy-800` | `#13243d` | Gradientes secundários |
| `--blue-600` | `#1769e0` | Ação primária, links, destaques |
| `--blue-500` | `#2f7bea` | Hover de elementos azuis |
| `--teal-500` | `#1aa7a1` | Conectores, setas, acentos |
| `--slate-700` | `#334155` | Texto de corpo |
| `--slate-500` | `#64748b` | Texto secundário |
| `--slate-200` | `#e2e8f0` | Bordas e divisores |
| `--slate-100` | `#f4f7fa` | Fundos de seções alternadas |
| `--radius-xl` | `32px` | Containers de destaque |
| `--radius-lg` | `24px` | Cards de serviço |
| `--radius-md` | `18px` | Cards menores, tags |

---

## Fonte de verdade dos serviços (`src/data/services.ts`)

### Tipo `ServiceLayer`

```typescript
type ServiceLayer = 'primary' | 'transversal' | 'complementary';
```

| Valor | Significado | Exposição na Home |
|---|---|---|
| `'primary'` | Serviços principais | Grid principal |
| `'complementary'` | Complementares/especializados | Bloco secundário |
| `'transversal'` | Capacidade transversal | Não exposta como card |

### Utilitários exportados

| Exportação | Uso |
|---|---|
| `services` | Catálogo completo |
| `primaryServices` | Filtro por `layer === 'primary'` |
| `complementaryServices` | Filtro por `layer === 'complementary'` |
| `transversalServices` | Filtro por `layer === 'transversal'` |
| `getServiceBySlug(slug)` | Lookup por slug |
| `getAllServiceSlugs()` | Slugs para `getStaticPaths()` |

### Governança de dados

A camada (`layer`) de cada serviço só pode ser alterada após aprovação no Notion
e conclusão da issue correspondente no Linear.

Campos marcados com `[PROVISÓRIO]` nos comentários do arquivo devem ser
revisados após conclusão das FEL-19 a FEL-28.

---

## Roteamento

| Rota | Arquivo |
|---|---|
| `/` | `src/pages/index.astro` |
| `/servicos/[slug]` | `src/pages/servicos/[slug].astro` |
| `/404` | `src/pages/404.astro` |
| `/sitemap-index.xml` | Gerado por `@astrojs/sitemap` |
| `/robots.txt` | `public/robots.txt` |

---

## SEO técnico (`src/layouts/BaseLayout.astro`)

- `<title>` e `<meta name="description">` — configuráveis por página
- `<link rel="canonical">` — via prop `canonicalPath`
- Open Graph completo
- Twitter Card
- `<link rel="sitemap">`
- Schema.org — padrão `ProfessionalService`; sobrescrito por `structuredData` nas páginas de serviço
- Skip link acessível (`#conteudo-principal`)

---

## Acessibilidade

- HTML semântico: `<main id="conteudo-principal">`, `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`
- Skip link visível no foco (`:focus-visible`)
- `aria-label` em navegações, listas e elementos sem texto descritivo
- `prefers-reduced-motion` respeitado em `global.css`
- Breadcrumb com `aria-label` e `aria-current="page"` nas páginas de serviço

---

## CI (`/.github/workflows/build.yml`)

**Trigger:** push ou PR para `main`

**Job `build`:**
1. `npm ci`
2. `astro check` (TypeScript)
3. `astro build`

**Deploy:** Cloudflare Pages via integração direta com o repositório GitHub
(sem wrangler no workflow — Cloudflare Pages detecta pushes para `main` automaticamente).

---

## Decisões técnicas pendentes

| Decisão | Dependência no Linear |
|---|---|
| Textos definitivos dos cards de serviço na Home | FEL-19 a FEL-23 |
| Destaque visual do card principal (se houver) | FEL-24 |
| Conteúdo detalhado das páginas de serviço | FEL-19 a FEL-28 |
| Domínio definitivo | Fase 7 — QA e Publicação V1 |
