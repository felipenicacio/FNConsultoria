# Security Review V1 — FN Security Site

**Data inicial:** 2026-08-13
**Última atualização:** 2026-08-13
**Baseline:** `main` HEAD `390fe87`
**Domínio:** https://www.fnsecurity.com.br
**Preview PR #17:** https://a1e5d904.fnconsultoria.pages.dev
**Issues:** FEL-39 (governança) · FEL-54 (headers) · FEL-55 (CI/CD)
**Status:** Em andamento — headers e CI/CD implementados, ZAP pendente

---

## Inventário de segurança

### Scripts

| Localização | Tipo | Conteúdo | Hash CSP |
|---|---|---|---|
| Header.astro | Inline TypeScript (compilado) | Menu hambúrguer mobile | `sha256-bsPNaTZfGp92iofzuFHoL+XcAoX+4BpbPXTFq+4COug=` |
| Footer.astro | Inline JS (compilado) | Ano dinâmico no copyright | `sha256-aKcCPqIRXrtCSln46EXxOr1UBfs+emnVCz9G9XFG7OE=` |
| BaseLayout.astro | `type="application/ld+json"` via `set:html` | Schema.org JSON-LD | Não afeta `script-src` (type ≠ JS) |

Scripts externos: **nenhum**

### Recursos externos

| Recurso | Onde | Tipo | `rel` |
|---|---|---|---|
| `https://www.linkedin.com/company/fn-security` | Footer | Link `<a>` | `noopener noreferrer` |
| `https://wa.me/5521979044865` | Footer | Link `<a>` | `noopener noreferrer` |
| `https://www.linkedin.com/in/felipe-nicacio/` | ConsultantProfile, ServiceBody, Contact | Link `<a>` | `noopener noreferrer` |

Fontes externas: **nenhuma** · Iframes: **nenhum** · Formulários: **nenhum** · CDN externo: **nenhum** · Source maps: **nenhum**

### Variáveis de ambiente

| Variável | Uso | Exposição |
|---|---|---|
| `PUBLIC_SITE_URL` | URL canônica e sitemap | Público por design (prefixo `PUBLIC_`) |

Arquivos `.env*`: cobertos pelo `.gitignore`

### Páginas e estrutura

- 11 páginas estáticas geradas
- 9 rotas de serviço com `seoReady: false` → `noindex, nofollow`
- `robots.txt`, `sitemap-index.xml`, `sitemap-0.xml` servidos
- `404.astro` com `noindex`

---

## Resultados dos scanners (PR #17 — commit `571b6e0`)

### npm audit

| Item | Resultado |
|---|---|
| Executado em | 2026-08-13 |
| Vulnerabilidades | **0** |
| Status | ✅ Limpo |

### Semgrep CE

| Item | Resultado |
|---|---|
| Versão | `semgrep/semgrep:latest` |
| Config | `--config auto` |
| Severidade gate | ERROR |
| Resultado | ✅ **SUCCESS** — nenhum finding bloqueante |
| Status | ✅ Limpo |

### Gitleaks

| Item | Resultado |
|---|---|
| Versão | `zricethezav/gitleaks:latest` |
| Escopo | Histórico completo (`fetch-depth: 0`) |
| Resultado | ✅ **SUCCESS** — nenhum secret detectado |
| Status | ✅ Limpo |

### Trivy v0.70.0

**Action:** `aquasecurity/trivy-action@ed142fd0673e97e23eac54620cfb913e5ce36c25` # v0.36.0

**Nota:** A Action v0.28.0 utilizada originalmente referenciava internamente
`setup-trivy@v0.2.1` (inexistente), causando falha em "Set up job" sem execução
do scan. Corrigida para v0.36.0 (usa `setup-trivy@v0.2.6`, válida) no commit `571b6e0`.

#### Vulnerabilidades (`package-lock.json`)

| Severidade | Quantidade |
|---|---|
| Critical | **0** |
| High | **0** |
| Medium | **0** |
| Low | **0** |
| **Total** | **0** |

#### Secrets

Nenhum finding reportado pelo scanner de secrets do Trivy (segunda camada, complementar ao Gitleaks).

#### Misconfigurations

Scanner de misconfiguration habilitado (`scanners: misconfig`).
O log reportou `Detected config files num=0` — nenhum arquivo de configuração
em formato suportado pelo scanner foi detectado nesta execução. Portanto não
houve findings de misconfiguration. Isso não indica ausência de configuração
no projeto; indica que os formatos dos arquivos presentes (YAML de GitHub Actions,
`astro.config.mjs`, `tsconfig.json`) podem não ter correspondência completa com
os checkers habilitados para este tipo de scan de filesystem.

#### Observações não bloqueadoras

1. **Versão do Trivy CLI:** O scanner informou que versão mais recente está disponível.
   Não atualizado nesta PR. Dependabot tratará evolução futura via `github-actions`.

2. **Node 20 deprecated warning:** `actions/checkout` pinado por SHA apresentou
   warning de runtime Node 20 deprecation. Não alterado nesta PR — ajuste de
   SHA é operação de supply chain que requer verificação. Registrado para
   acompanhamento via Dependabot.

#### Status final Trivy

✅ **SUCCESS** — Critical: 0 · High: 0 · Medium: 0 · Low: 0 · Secrets: 0 · Misconfigs detectadas: 0

---

## Achados

### A — npm audit

| ID | Ferramenta | Achado | Severidade | Recomendação | Status |
|---|---|---|---|---|---|
| A-01 | npm audit | 0 vulnerabilidades | — | Manter monitoramento via Dependabot e CI | ✅ Limpo |

### B — Supply Chain / GitHub Actions

| ID | Ferramenta | Achado | Severidade | CWE | Recomendação | Status |
|---|---|---|---|---|---|---|
| B-01 | Revisão manual | Actions com tags mutáveis | Medium | CWE-494 | Pinagem por SHA completo aplicada | ✅ Corrigido |
| B-02 | Trivy/GitHub Actions | Node 20 deprecated em `actions/checkout` pinado | Low | — | Acompanhar via Dependabot | ⏳ Backlog |

### C — Security Headers

| ID | Ferramenta | Achado | Severidade | CWE/OWASP | Recomendação | Status |
|---|---|---|---|---|---|---|
| C-01 | Revisão manual | Ausência de `Content-Security-Policy` | High | CWE-693 / A05:2021 | CSP com hashes implementada em `public/_headers` | ✅ Corrigido |
| C-02 | Revisão manual | Ausência de `Permissions-Policy` | Medium | CWE-693 | Implementado em `public/_headers` | ✅ Corrigido |
| C-03 | Revisão manual | Ausência de `X-Frame-Options` explícito | Medium | CWE-1021 / A05:2021 | `X-Frame-Options: DENY` + `frame-ancestors 'none'` | ✅ Corrigido |

### D — CSP — Dívida técnica documentada

| ID | Item | Decisão | Justificativa |
|---|---|---|---|
| D-01 | `style-src 'unsafe-inline'` | Aceito temporariamente | Astro injeta `<style>` scoped inline por componente. Externalização = mudança estrutural desproporcional na V1. Issue para V2. |
| D-02 | HSTS sem `includeSubDomains` | Aceito temporariamente | Subdomínios não mapeados com segurança. Escalonar após mapeamento completo. |
| D-03 | HSTS `max-age=15768000` (6 meses) | Aceito temporariamente | Conservador. Escalonar para 31536000 (1 ano) após validação em produção. Sem preload list. |

### E — OWASP ZAP Baseline

| ID | Ferramenta | Achado | Severidade | Status |
|---|---|---|---|---|
| E-xx | OWASP ZAP | — | — | ⏳ Pendente — executar contra preview `https://a1e5d904.fnconsultoria.pages.dev` |

---

## Security Headers implementados (`public/_headers`)

Aplicados em `/*` via Cloudflare Pages:

| Header | Valor | Status |
|---|---|---|
| `Strict-Transport-Security` | `max-age=15768000` | ✅ Implementado |
| `X-Content-Type-Options` | `nosniff` | ✅ Implementado |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | ✅ Implementado |
| `X-Frame-Options` | `DENY` | ✅ Implementado |
| `Permissions-Policy` | camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), interest-cohort=() | ✅ Implementado |
| `Content-Security-Policy` | Ver seção CSP abaixo | ✅ Implementado |

**CSP completa:**
```
default-src 'self';
script-src 'self'
  'sha256-bsPNaTZfGp92iofzuFHoL+XcAoX+4BpbPXTFq+4COug='
  'sha256-aKcCPqIRXrtCSln46EXxOr1UBfs+emnVCz9G9XFG7OE=';
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
font-src 'self';
connect-src 'self';
frame-src 'none';
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
upgrade-insecure-requests
```

**Validação no preview:** ⏳ Pendente — validar ausência de CSP violations no console do browser

---

## Risco residual V1

| Área | Risco | Nível | Mitigação |
|---|---|---|---|
| CSP `style-src unsafe-inline` | XSS via injeção de estilo | Low | Site estático sem input de usuário; superfície real mínima |
| HSTS sem `includeSubDomains` | Subdomínio hipotético vulnerável a MITM | Informacional | Nenhum subdomínio em uso; risco teórico |
| Hashes CSP sensíveis a minificação | Hash muda se Astro alterar script | Low | Re-calcular a cada mudança de script; CI detectará quebra |
| Node 20 deprecated em Actions | Degradação futura de suporte | Low | Dependabot acompanhará |

---

## Ferramentas e versões

| Ferramenta | Versão | Status |
|---|---|---|
| npm audit | Node 22 nativo | ✅ 0 vulnerabilidades |
| Semgrep CE | `semgrep/semgrep:latest` (`--config auto`) | ✅ 0 findings bloqueantes |
| Gitleaks | `zricethezav/gitleaks:latest` | ✅ 0 secrets |
| Trivy CLI | v0.70.0 (via `trivy-action` v0.36.0) | ✅ Critical 0 · High 0 · Medium 0 · Low 0 |
| OWASP ZAP | Baseline Scan passivo | ⏳ Pendente |

---

## Critério de liberação V1

- [x] npm audit limpo
- [x] Semgrep limpo (0 findings bloqueantes)
- [x] Gitleaks limpo (0 secrets)
- [x] Trivy limpo (Critical 0 · High 0 · Medium 0 · Low 0)
- [x] Security headers implementados
- [x] CSP com hashes reais
- [x] Supply chain endurecida (SHAs pinados)
- [x] Dependabot configurado
- [ ] Validação de headers no preview (browser/curl)
- [ ] Ausência de CSP violations no preview
- [ ] ZAP Baseline executado contra preview
- [ ] ZAP findings triados
- [ ] ZAP Produção executado (após autorização explícita)
- [ ] Validação de Felipe Nicácio
- [x] Risco residual documentado

**Critical abertos:** 0
**High abertos:** 0
**Medium abertos:** 0 (C-02 e C-03 corrigidos; D-01 aceito com justificativa)
