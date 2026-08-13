# Security Review V1 — FN Security Site

**Data inicial:** 2026-08-13
**Baseline:** `main` HEAD `390fe87`
**Domínio:** https://www.fnsecurity.com.br
**Issues:** FEL-39 (governança) · FEL-54 (headers) · FEL-55 (CI/CD)
**Status:** Em andamento — aguarda validação de preview e ZAP

---

## Inventário de segurança

### Scripts

| Localização | Tipo | Conteúdo | Hash CSP |
|---|---|---|---|
| Header.astro | Inline TypeScript (compilado) | Menu hambúrguer mobile | `sha256-bsPNaTZfGp92iofzuFHoL+XcAoX+4BpbPXTFq+4COug=` |
| Footer.astro | Inline JS (compilado) | Ano dinâmico no copyright | `sha256-aKcCPqIRXrtCSln46EXxOr1UBfs+emnVCz9G9XFG7OE=` |
| BaseLayout.astro | `type="application/ld+json"` via `set:html` | Schema.org JSON-LD | Não afeta `script-src` (type≠JS) |

Scripts externos: **nenhum**

### Recursos externos

| Recurso | Onde | Tipo | `rel` |
|---|---|---|---|
| `https://www.linkedin.com/company/fn-security` | Footer | Link `<a>` | `noopener noreferrer` |
| `https://wa.me/5521979044865` | Footer | Link `<a>` | `noopener noreferrer` |
| `https://www.linkedin.com/in/felipe-nicacio/` | ConsultantProfile, ServiceBody, Contact | Link `<a>` | `noopener noreferrer` |

Fontes externas: **nenhuma** (system fonts)
Iframes: **nenhum**
Formulários: **nenhum**
CDN externo: **nenhum**
Source maps: **nenhum**

### Variáveis de ambiente

| Variável | Uso | Exposição |
|---|---|---|
| `PUBLIC_SITE_URL` | URL canônica e sitemap | Público por design (prefixo `PUBLIC_`) |

Arquivos `.env*`: cobertos pelo `.gitignore`

### Páginas e estrutura

- 11 páginas estáticas geradas
- 9 rotas de serviço com `seoReady: false` → `noindex, nofollow`
- `robots.txt` servido
- `sitemap-index.xml` e `sitemap-0.xml` servidos
- `404.astro` com `noindex`

---

## Achados

### A — npm audit

| ID | Ferramenta | Achado | Severidade | Evidência | Recomendação | Status |
|---|---|---|---|---|---|---|
| A-01 | npm audit | `found 0 vulnerabilities` | Informacional | `npm audit` executado em 2026-08-13 | Manter monitoramento via Dependabot e CI | ✅ Limpo |

### B — Supply Chain / GitHub Actions

| ID | Ferramenta | Achado | Severidade | Evidência | CWE | Recomendação | Status |
|---|---|---|---|---|---|---|---|
| B-01 | Revisão manual | Actions `checkout@v4` e `setup-node@v4` usavam tags mutáveis | Medium | `build.yml` original sem SHA | CWE-494 | Pinagem por SHA completo aplicada em todos os workflows | ✅ Corrigido |

### C — Security Headers

| ID | Ferramenta | Achado | Severidade | Evidência | CWE/OWASP | Recomendação | Status |
|---|---|---|---|---|---|---|---|
| C-01 | Revisão manual | Ausência de `Content-Security-Policy` | High | Headers HTTP antes da PR | CWE-693 / A05:2021 | CSP com hashes implementada em `public/_headers` | ✅ Corrigido |
| C-02 | Revisão manual | Ausência de `Permissions-Policy` | Medium | Headers HTTP antes da PR | CWE-693 | Implementado em `public/_headers` | ✅ Corrigido |
| C-03 | Revisão manual | Ausência de `X-Frame-Options` explícito | Medium | Headers HTTP antes da PR | CWE-1021 / A05:2021 | `X-Frame-Options: DENY` + `frame-ancestors 'none'` implementados | ✅ Corrigido |

### D — CSP — Dívida técnica documentada

| ID | Item | Decisão | Justificativa |
|---|---|---|---|
| D-01 | `style-src 'unsafe-inline'` | Aceito temporariamente | Astro injeta `<style>` scoped inline em cada componente. Remover exigiria externalização de todo o CSS crítico — mudança estrutural desproporcional na V1. Criar issue para V2. |
| D-02 | HSTS sem `includeSubDomains` | Aceito temporariamente | Subdomínios não mapeados com segurança. Escalonar após mapeamento completo. |
| D-03 | HSTS `max-age=15768000` (6 meses) | Aceito temporariamente | Valor conservador. Escalonar para 31536000 (1 ano) após validação. Não incluir em preload list nesta etapa. |

### E — ZAP Baseline (a executar)

| ID | Ferramenta | Achado | Severidade | Status |
|---|---|---|---|---|
| E-xx | OWASP ZAP | — | — | Pendente — aguarda preview Cloudflare |

---

## Risco residual V1

| Área | Risco | Nível | Mitigação |
|---|---|---|---|
| CSP `style-src unsafe-inline` | XSS via injeção de estilo | Low | Site estático sem input de usuário; superfície real é mínima |
| HSTS sem `includeSubDomains` | Subdomínio hipotético vulnerável a MITM | Informacional | Nenhum subdomínio em uso; risco teórico |
| Scripts inline com hashes CSP | Hash muda se Astro alterar minificação | Low | Re-calcular hashes a cada mudança de script; Dependabot + CI alertará |

---

## Ferramentas e versões

| Ferramenta | Versão/Config | Executado |
|---|---|---|
| npm audit | Node 22 nativo | 2026-08-13 — 0 vulnerabilidades |
| Semgrep CE | `semgrep/semgrep:latest`, `--config auto` | Pendente (CI) |
| Gitleaks | `zricethezav/gitleaks:latest` | Pendente (CI) |
| Trivy | `aquasecurity/trivy-action@0.28.0` | Pendente (CI) |
| OWASP ZAP | Baseline Scan passivo | Pendente — aguarda preview |

---

## Critério de liberação V1

- [ ] Critical = 0 abertos
- [ ] High = 0 abertos
- [ ] Medium = corrigido, mitigado ou aceito formalmente
- [x] npm audit limpo
- [x] Security headers implementados
- [x] CSP funcional (hashes reais)
- [ ] Semgrep triado
- [ ] Gitleaks limpo ou triado
- [ ] Trivy limpo ou triado
- [ ] ZAP Preview executado
- [ ] ZAP Produção executado (após autorização explícita)
- [x] Risco residual documentado
- [ ] Validação de Felipe Nicácio
