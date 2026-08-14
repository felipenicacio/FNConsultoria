# FN Security

Site institucional da **FN Security** (nome empresarial: FN Privacy Security), consultoria especializada em Segurança da Informação, Governança, Gestão de Riscos, Continuidade de Negócios e Privacidade.

O projeto tem como objetivo construir uma presença digital profissional, rápida, segura, acessível e preparada para evolução, apresentando a FN Security como uma consultoria boutique com atuação orientada por riscos, estratégia e referências reconhecidas internacionalmente.

**Consultor responsável:** Felipe Nicácio

> **Nota de transição de marca:** este projeto foi iniciado sob a marca **FN Consulting**. A transição para **FN Security** está em execução (FEL-29). O repositório GitHub (`felipenicacio/FNConsultoria`) não é renomeado nesta etapa — análise de impacto pendente.

---

## Visão do projeto

O site será inicialmente uma **landing page institucional estática**, com foco em:

- posicionamento da marca FN Security;
- apresentação clara dos serviços;
- autoridade técnica e credibilidade profissional;
- experiência de navegação simples e responsiva;
- SEO técnico;
- acessibilidade;
- alto desempenho;
- segurança e privacidade por padrão;
- facilidade de manutenção e expansão futura.

A proposta não é criar um portal complexo, mas uma base institucional sólida que possa evoluir gradualmente para páginas de serviços, conteúdos técnicos e ativos comerciais.

---

## Serviços iniciais

### CISO como Serviço

Atuação estratégica para organizações que precisam estruturar, direcionar ou amadurecer sua função de Segurança da Informação, conectando riscos cibernéticos, prioridades empresariais e tomada de decisão executiva.

### PESI — Plano Estratégico de Segurança da Informação

Estruturação do Plano Estratégico de Segurança da Informação, transformando contexto, riscos e necessidades organizacionais em objetivos, iniciativas, indicadores, prioridades e roadmap de evolução.

### Assessment NIST Cybersecurity Framework 2.0

Avaliação estruturada das capacidades de Segurança da Informação utilizando o **NIST Cybersecurity Framework 2.0**, considerando as funções Govern, Identify, Protect, Detect, Respond e Recover para construir uma visão do cenário atual, lacunas, prioridades e evolução desejada.

### Implementação de SGSI baseado na ISO/IEC 27001

Estruturação e implementação de um Sistema de Gestão de Segurança da Informação baseado na **ISO/IEC 27001**, considerando contexto, riscos, governança, processos, controles, indicadores, auditoria interna e melhoria contínua.

### Programa de Conscientização em Segurança da Informação

Desenvolvimento de programas contínuos de conscientização orientados à mudança de comportamento, percepção de risco, simulações, treinamentos, comunicação e acompanhamento da evolução da cultura de Segurança da Informação.

---

## Jornada de atuação

Os serviços da FN Security devem ser apresentados como partes de uma jornada integrada de evolução:

```text
Avaliar
   ↓
Planejar
   ↓
Governar
   ↓
Implementar
   ↓
Desenvolver Cultura
   ↓
Evoluir Continuamente
```

Essa abordagem evita tratar Segurança da Informação como um conjunto isolado de projetos e reforça sua integração com governança, gestão de riscos e estratégia organizacional.

---

## Princípios de arquitetura

O projeto seguirá os seguintes princípios:

- **Simplicidade:** utilizar somente componentes e dependências realmente necessários.
- **Performance:** priorizar geração estática e JavaScript mínimo no cliente.
- **Segurança:** aplicar boas práticas mesmo em uma aplicação institucional estática.
- **Privacidade:** reduzir coleta, rastreamento e dependências externas desnecessárias.
- **Acessibilidade:** considerar WCAG 2.2 desde a concepção.
- **SEO:** adotar HTML semântico, metadados e dados estruturados desde a primeira versão.
- **Evolução:** permitir expansão futura sem necessidade de reconstruir a arquitetura do projeto.

---

## Stack prevista

A arquitetura inicial prioriza:

- **Astro**
- HTML5 semântico
- CSS moderno
- JavaScript mínimo
- componentes reutilizáveis
- conteúdo estático
- GitHub para versionamento
- CI/CD para build, validação e publicação

Não está previsto para a primeira versão:

- backend próprio;
- banco de dados;
- autenticação;
- APIs desnecessárias;
- frameworks JavaScript pesados sem justificativa técnica.

---

## Estrutura prevista

```text
FNConsultoria/
│
├── README.md
├── AI_USAGE_POLICY.md
├── docs/
│   ├── projeto.md
│   ├── arquitetura.md
│   ├── identidade-visual.md
│   ├── conteudo.md
│   ├── seo.md
│   ├── seguranca.md
│   └── ai-security-guardrails.md
│
├── public/
│   ├── favicon/
│   ├── images/
│   └── assets/
│
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── data/
│
└── .github/
    └── workflows/
```

A estrutura será criada progressivamente conforme a implementação avançar.

---

## Componentes previstos

A primeira versão deverá ser organizada em componentes com responsabilidades claras:

- Header
- Hero
- About
- Services
- ServiceCard
- Journey
- Methodology
- Frameworks
- Differentials
- ConsultantProfile
- Contact
- Footer

---

## Identidade visual

A FN Security deverá possuir uma identidade corporativa moderna, sóbria e consultiva.

Diretrizes principais:

- azul-marinho profundo e azul corporativo como base;
- branco e cinza-claro para equilíbrio e legibilidade;
- verde, teal ou ciano utilizados de forma pontual;
- tipografia contemporânea;
- bastante espaço em branco;
- grids claros e consistentes;
- animações discretas;
- estética executiva e premium.

O projeto deverá evitar clichês visuais de cibersegurança, como hackers encapuzados, cadeados gigantes, telas verdes, códigos binários e elementos excessivamente futuristas.

A comunicação visual deve se aproximar de conceitos como **estratégia, governança, riscos, estrutura, resiliência e confiança digital**.

---

## Referências metodológicas

A atuação apresentada no site poderá utilizar, conforme o serviço, referências como:

- ISO/IEC 27001
- ISO/IEC 27002
- ISO/IEC 27005
- ISO/IEC 27701
- ISO 22301
- ISO 31000
- NIST Cybersecurity Framework 2.0
- NIST Risk Management Framework

Normas e frameworks serão apresentados como instrumentos de apoio à gestão e à tomada de decisão, e não como objetivos isolados.

---

## Requisitos de qualidade

Metas iniciais para Lighthouse:

| Categoria | Meta |
|---|---:|
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |

Também serão considerados:

- Core Web Vitals;
- WCAG 2.2;
- responsividade em desktop, tablet e smartphone;
- imagens otimizadas;
- navegação por teclado;
- estrutura semântica correta;
- redução de dependências externas.

---

## Segurança

Mesmo sendo um site estático, o projeto deverá considerar controles compatíveis com a plataforma de hospedagem, incluindo:

- Content Security Policy;
- Strict-Transport-Security;
- X-Content-Type-Options;
- Referrer-Policy;
- Permissions-Policy;
- proteção contra framing indevido;
- gestão adequada de links externos;
- revisão de dependências.

Nenhuma credencial, token, chave de API ou informação sensível deverá ser armazenada no repositório.

### Governança de uso de IA

O uso de Inteligência Artificial no projeto deve seguir os seguintes documentos:

- [`AI_USAGE_POLICY.md`](AI_USAGE_POLICY.md) — política executiva de uso responsável de IA;
- [`docs/ai-security-guardrails.md`](docs/ai-security-guardrails.md) — guardrails técnicos de segurança, privacidade, rastreabilidade e controle de agentes e modelos generativos.

---

## Privacidade

A primeira versão deverá minimizar coleta de dados e mecanismos de rastreamento.

Princípios:

- evitar trackers sem necessidade;
- evitar cookies sempre que possível;
- não criar banner de cookies sem fundamento técnico ou regulatório;
- priorizar soluções de analytics com menor impacto de privacidade caso métricas sejam implementadas futuramente.

---

## SEO

O projeto deverá trabalhar semanticamente temas relacionados a:

- FN Security;
- Consultoria em Segurança da Informação;
- CISO como Serviço;
- vCISO;
- Plano Estratégico de Segurança da Informação;
- PESI;
- NIST CSF 2.0;
- Assessment NIST;
- ISO/IEC 27001;
- implementação ISO 27001;
- SGSI;
- Programa de Conscientização em Segurança da Informação;
- Gestão de Riscos Cibernéticos;
- Governança de Segurança da Informação.

A otimização deverá priorizar conteúdo útil e linguagem natural, sem keyword stuffing.

---

## Roadmap

### Fase 1 — Fundação

- documentação do projeto;
- definição da stack;
- criação da estrutura Astro;
- organização de diretórios;
- identidade visual inicial.

### Fase 2 — UX/UI

- Header;
- Hero;
- sistema visual;
- componentes;
- responsividade.

### Fase 3 — Conteúdo

- posicionamento institucional;
- serviços;
- metodologia;
- jornada;
- diferenciais;
- apresentação de Felipe Nicácio;
- contato.

### Fase 4 — Qualidade

- SEO;
- acessibilidade;
- performance;
- segurança;
- testes;
- revisão responsiva.

### Fase 5 — Publicação

- configuração de hospedagem;
- HTTPS;
- domínio;
- CI/CD;
- validações finais.

### Fase 6 — Evolução

- páginas individuais para serviços;
- conteúdos técnicos;
- artigos;
- materiais institucionais;
- otimização de SEO;
- métricas de uso e conversão quando justificadas.

---

## Documentação

O documento mestre do projeto está disponível em:

[`docs/projeto.md`](docs/projeto.md)

Documentos complementares de governança de IA:

- [`AI_USAGE_POLICY.md`](AI_USAGE_POLICY.md)
- [`docs/ai-security-guardrails.md`](docs/ai-security-guardrails.md)

Eles complementam a documentação técnica com princípios executivos e controles específicos para uso de modelos e agentes de Inteligência Artificial.

---

## Diretriz central

Toda nova funcionalidade deverá responder à seguinte pergunta:

> **Essa funcionalidade melhora a comunicação institucional, a autoridade, a experiência do usuário ou a geração de oportunidades para a FN Security?**

Se não houver benefício claro, sua implementação deverá ser questionada para preservar a simplicidade arquitetural.

---

## Status

**Em desenvolvimento — fase de fundação e definição da arquitetura.**

---

## Responsável

**Felipe Nicácio**  
FN Security  
Segurança da Informação · Governança · Gestão de Riscos · Continuidade de Negócios · Privacidade
