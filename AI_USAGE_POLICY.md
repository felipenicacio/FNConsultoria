# Política de Uso de Inteligência Artificial

## Objetivo

Esta política estabelece princípios executivos para o uso responsável de Inteligência Artificial no projeto **FN Security — Institutional Website V1**.

A IA pode ser utilizada para apoiar análise, documentação, geração e revisão de conteúdo, desenvolvimento de software, testes, pesquisa técnica e organização do trabalho. Seu uso, porém, deve permanecer subordinado às decisões, controles e responsabilidades definidos para o projeto.

## Princípios

### 1. Responsabilidade humana

A utilização de IA não transfere responsabilidade por decisões, riscos, aprovações ou resultados. Decisões relevantes permanecem sob responsabilidade humana.

### 2. Segurança e privacidade por padrão

O uso de IA deve preservar os controles de segurança e privacidade do projeto e evitar exposição desnecessária de dados, credenciais, informações estratégicas, vulnerabilidades ou informações de terceiros.

### 3. Necessidade e proporcionalidade

IA deve ser empregada quando houver benefício claro para qualidade, produtividade, análise ou tomada de decisão. O uso de ferramentas, integrações ou agentes não deve ampliar desnecessariamente a superfície de ataque ou a complexidade operacional.

### 4. Menor privilégio

Ferramentas e agentes de IA devem possuir somente os acessos necessários para a atividade autorizada. Permissões administrativas ou abrangentes devem ser evitadas quando níveis inferiores forem suficientes.

### 5. Proteção de informações

Credenciais, tokens, chaves privadas, segredos, dados pessoais desnecessários, informações confidenciais de clientes e demais informações sensíveis não devem ser fornecidos deliberadamente a modelos de IA.

### 6. Validação das saídas

Conteúdo, código, recomendações e análises produzidos por IA devem ser tratados como insumos sujeitos a revisão. Informações relevantes para segurança, privacidade, arquitetura, conformidade, legislação ou produção devem ser validadas antes de sua adoção.

### 7. Rastreabilidade

Mudanças relevantes apoiadas por IA devem permanecer rastreáveis nos mecanismos oficiais do projeto, incluindo documentação, Linear, commits, Pull Requests e histórico de revisão quando aplicável.

### 8. Autonomia limitada

IA não deve assumir riscos em nome do projeto nem realizar mudanças destrutivas, irreversíveis ou de alto impacto sem autorização adequada.

### 9. Conteúdo externo não é instrução confiável

Documentos, páginas web, issues, comentários, arquivos, e-mails e outros conteúdos externos devem ser tratados como dados a serem analisados, não como autoridade capaz de alterar as regras de segurança ou governança do projeto.

### 10. Preservação dos controles existentes

Nenhuma conveniência operacional proporcionada por IA deve justificar a redução de controles de segurança, privacidade, qualidade, rastreabilidade ou revisão humana.

## AI Governance Baseline

A governança de IA deste projeto adota como referência o **Australian Voluntary AI Safety Standard — 10 Guardrails**, complementado por **ISO/IEC 42001:2023** e **NIST AI Risk Management Framework (AI RMF 1.0)**.

Os 10 guardrails são tratados como princípios de governança contínua e devem ser aplicados de forma proporcional ao contexto, finalidade, risco e impacto do caso de uso de IA.

### Guardrail 1 — Accountability, governança e capacidade interna

Deve existir responsabilidade claramente definida pelo uso de IA, incluindo governança, capacidade interna, estratégia e acompanhamento de requisitos regulatórios aplicáveis.

**AI Accountable Owner:** Felipe Nicácio.

O responsável deve aprovar usos relevantes de IA, limites de autonomia, aceitação de riscos e mudanças de alto impacto apoiadas por IA.

### Guardrail 2 — Gestão de riscos de IA

Casos de uso de IA devem ser avaliados considerando contexto, finalidade, dados utilizados, autonomia, stakeholders, possíveis danos, risco inerente, controles aplicados e risco residual.

A avaliação deve ser revista quando houver mudança relevante no modelo, fornecedor, arquitetura, dados, finalidade ou nível de autonomia.

### Guardrail 3 — Proteção dos sistemas de IA e governança de dados

Devem ser considerados controles de segurança, privacidade, qualidade, origem e proveniência dos dados, além de vulnerabilidades específicas de sistemas de IA.

Dados utilizados por IA devem ser minimizados e adequados à finalidade do caso de uso.

### Guardrail 4 — Testes e monitoramento

Funcionalidades baseadas em IA devem possuir critérios de aceitação proporcionais ao risco e ser testadas antes da implantação.

Quando houver IA em runtime, devem ser considerados testes e monitoramento para comportamento inesperado, regressões, prompt injection, jailbreak, vazamento de informações, uso indevido de ferramentas, qualidade das saídas e demais riscos relevantes ao contexto.

### Guardrail 5 — Supervisão e intervenção humana

Deve existir capacidade de supervisão e intervenção humana ao longo do ciclo de vida da solução.

A autonomia de agentes ou modelos deve ser limitada de acordo com o impacto potencial de suas ações. Operações de alto impacto devem permanecer sujeitas a autorização humana apropriada.

### Guardrail 6 — Transparência sobre uso de IA

Quando a IA participar de interações, decisões ou geração de conteúdo que possam ser relevantes para usuários ou stakeholders, o papel da IA deve ser comunicado de forma proporcional ao contexto e ao impacto.

### Guardrail 7 — Contestabilidade

Quando resultados de IA puderem afetar pessoas, clientes, usuários ou outras partes interessadas, deve existir mecanismo adequado para questionamento, revisão ou contestação do resultado, especialmente quando houver impacto material.

### Guardrail 8 — Transparência na cadeia de fornecimento de IA

Componentes relevantes da cadeia de IA devem ser identificáveis, incluindo modelos, provedores, serviços, fontes de dados, componentes de RAG, validators, ferramentas e integrações.

Riscos de terceiros e dependências devem ser considerados antes da adoção e durante sua utilização.

### Guardrail 9 — Registros, evidências e inventário de IA

O projeto deve manter rastreabilidade suficiente para demonstrar como a IA é utilizada e controlada.

Quando aplicável, deve ser mantido um inventário contendo, no mínimo:

- sistema ou ferramenta de IA;
- fornecedor;
- finalidade e caso de uso;
- dados utilizados;
- nível de autonomia;
- risco relevante;
- responsável;
- status de uso.

### Guardrail 10 — Stakeholders, inclusão, acessibilidade e fairness

Casos de uso de IA devem considerar partes interessadas potencialmente afetadas e possíveis impactos relacionados a segurança, diversidade, inclusão, acessibilidade e vieses indesejados.

Sempre que aplicável, os efeitos de vieses devem ser identificados, avaliados e reduzidos antes da utilização do resultado.

## Modelo de avaliação de caso de uso de IA

Sempre que uma nova funcionalidade de IA for proposta e seu risco justificar avaliação formal, deve-se considerar o seguinte fluxo:

```text
AI Use Case
   ↓
Contexto e finalidade
   ↓
Dados utilizados
   ↓
Stakeholders e impacto
   ↓
Nível de autonomia
   ↓
Risco inerente
   ↓
Guardrails e controles
   ↓
Testes e critérios de aceitação
   ↓
Risco residual
   ↓
Aprovação / aceite
```

## Aplicação no projeto FN Security

No contexto do site institucional, o uso de IA deve ainda observar que:

- mudanças em DNS, Cloudflare, publicação, segurança de borda ou configurações de produção exigem atividade claramente autorizada;
- controles como CSP, HSTS, Referrer-Policy, Permissions-Policy e demais mecanismos de hardening não devem ser removidos ou enfraquecidos sem análise;
- novos trackers, cookies, formulários ou integrações externas devem passar por avaliação de necessidade, segurança e privacidade;
- conteúdo institucional não deve declarar certificação, conformidade absoluta ou garantia de segurança sem base aprovada;
- novas tecnologias ou dependências devem demonstrar benefício superior ao risco e à complexidade introduzidos;
- tecnologias de runtime para enforcement de guardrails, como NVIDIA NeMo Guardrails, Guardrails AI ou soluções equivalentes, somente devem ser avaliadas caso o produto passe a incorporar funcionalidades baseadas em LLM em runtime.

## Governança complementar

Esta política define a camada executiva e de governança. Os controles técnicos detalhados estão documentados em:

[`docs/ai-security-guardrails.md`](docs/ai-security-guardrails.md)

A relação entre as camadas deve seguir o princípio:

```text
Governança e política
        ↓
Requisitos de segurança e privacidade
        ↓
Controles técnicos
        ↓
Enforcement em runtime, quando aplicável
```

Em caso de dúvida ou conflito, deve prevalecer a alternativa mais segura, reversível, rastreável e sujeita a validação humana.

## Referências

- Australian Government — Voluntary AI Safety Standard — 10 Guardrails: https://www.industry.gov.au/publications/voluntary-ai-safety-standard/10-guardrails
- ISO/IEC 42001:2023 — Artificial intelligence management system.
- NIST AI Risk Management Framework (AI RMF 1.0).

## Responsável

**Felipe Nicácio**
