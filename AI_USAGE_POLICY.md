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

## Aplicação no projeto FN Security

No contexto do site institucional, o uso de IA deve ainda observar que:

- mudanças em DNS, Cloudflare, publicação, segurança de borda ou configurações de produção exigem atividade claramente autorizada;
- controles como CSP, HSTS, Referrer-Policy, Permissions-Policy e demais mecanismos de hardening não devem ser removidos ou enfraquecidos sem análise;
- novos trackers, cookies, formulários ou integrações externas devem passar por avaliação de necessidade, segurança e privacidade;
- conteúdo institucional não deve declarar certificação, conformidade absoluta ou garantia de segurança sem base aprovada;
- novas tecnologias ou dependências devem demonstrar benefício superior ao risco e à complexidade introduzidos.

## Governança complementar

Esta política define princípios executivos. Os controles técnicos detalhados estão documentados em:

[`docs/ai-security-guardrails.md`](docs/ai-security-guardrails.md)

Em caso de dúvida ou conflito, deve prevalecer a alternativa mais segura, reversível, rastreável e sujeita a validação humana.

## Responsável

**Felipe Nicácio**
