# CLAUDE.md — FN Consulting

Este arquivo define as instruções permanentes para qualquer trabalho realizado com Claude Code neste repositório.

O objetivo é preservar coerência arquitetural, qualidade técnica, segurança, identidade visual e alinhamento com o propósito institucional da FN Consulting.

## 1. Contexto do projeto

Este repositório contém o site institucional da **FN Consulting**, consultoria especializada em Segurança da Informação, Governança, Gestão de Riscos, Continuidade de Negócios e Privacidade.

**Consultor responsável:** Felipe Nicácio

O site é uma landing page institucional estática, com baixa frequência de atualização, orientada a:

- posicionamento da marca;
- apresentação dos serviços;
- autoridade técnica;
- credibilidade executiva;
- geração de oportunidades comerciais;
- SEO;
- acessibilidade;
- desempenho;
- segurança e privacidade por padrão.

O projeto não deve evoluir para uma aplicação complexa sem necessidade explícita e justificativa arquitetural.

## 2. Documentos de referência obrigatórios

Antes de realizar alterações relevantes, consultar:

- `README.md`
- `docs/projeto.md`
- este `CLAUDE.md`

Em caso de conflito entre uma solicitação pontual e a arquitetura documentada, preservar a intenção do usuário, mas registrar claramente qualquer desvio estrutural necessário.

## 3. Princípio central

Toda alteração deve responder positivamente a pelo menos uma destas perguntas:

- melhora a comunicação institucional da FN Consulting?
- melhora a experiência do usuário?
- melhora a autoridade e credibilidade da marca?
- melhora a geração de oportunidades comerciais?
- melhora desempenho, acessibilidade, SEO, segurança ou manutenção?

Se a resposta for negativa, questionar a necessidade da alteração antes de introduzir complexidade.

## 4. Stack oficial

A stack principal é:

- Astro
- TypeScript
- HTML5 semântico
- CSS moderno
- JavaScript mínimo no cliente
- geração estática
- GitHub
- GitHub Actions

Não introduzir outro framework principal sem justificativa técnica forte.

Evitar especialmente a adoção desnecessária de:

- React
- Next.js
- Vue
- Angular
- Svelte
- bibliotecas SPA
- bibliotecas de estado global

Essas tecnologias só devem ser adicionadas se houver requisito concreto que o Astro não consiga atender de forma simples.

## 5. Arquitetura

A arquitetura deve permanecer simples, modular e orientada a componentes.

Estrutura esperada:

```text
FNConsultoria/
├── .github/
│   └── workflows/
├── docs/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── CLAUDE.md
├── README.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Regras de arquitetura

- manter componentes com responsabilidade clara;
- evitar componentes monolíticos;
- evitar abstrações prematuras;
- evitar duplicação significativa de conteúdo ou lógica;
- manter dados reutilizáveis separados da camada de apresentação quando fizer sentido;
- não criar backend sem requisito explícito;
- não criar banco de dados sem requisito explícito;
- não criar autenticação sem requisito explícito;
- não introduzir APIs externas sem necessidade comprovada;
- manter o maior volume possível do site renderizado estaticamente.

## 6. Componentes

A primeira versão do projeto utiliza ou prevê componentes como:

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

Ao criar novos componentes:

- usar nomes claros;
- manter escopo pequeno;
- evitar lógica de negócio desnecessária;
- priorizar composição;
- reutilizar tokens visuais e estilos globais;
- preservar semântica HTML.

## 7. Serviços institucionais

Os cinco serviços iniciais da FN Consulting são:

1. CISO como Serviço
2. PESI — Plano Estratégico de Segurança da Informação
3. Assessment NIST Cybersecurity Framework 2.0
4. Implementação de SGSI baseado na ISO/IEC 27001
5. Programa de Conscientização em Segurança da Informação

A jornada conceitual é:

**Avaliar → Planejar → Governar → Implementar → Desenvolver Cultura → Evoluir Continuamente**

Não alterar essa lógica sem motivo explícito.

## 8. Posicionamento da marca

A FN Consulting deve ser percebida como uma **consultoria boutique especializada**, e não como uma empresa genérica de TI.

A comunicação deve conectar:

**Governança + Riscos + Estratégia + Pessoas + Processos + Tecnologia**

Segurança da Informação deve ser apresentada como disciplina de gestão integrada ao negócio, e não apenas como tema técnico.

Evitar linguagem excessivamente comercial, promessas absolutas ou afirmações que possam sugerir garantia de certificação, eliminação de riscos ou conformidade integral.

## 9. Tom de conteúdo

Todo conteúdo textual deve usar português do Brasil.

O tom deve ser:

- executivo;
- consultivo;
- claro;
- objetivo;
- técnico sem excesso de jargão;
- confiável;
- estratégico.

Evitar:

- buzzwords;
- frases genéricas;
- exageros comerciais;
- superlativos sem evidência;
- promessas absolutas;
- textos prolixos;
- linguagem de medo;
- clichês de cibersegurança.

## 10. Identidade visual

A identidade deve transmitir:

- confiança;
- maturidade;
- estratégia;
- segurança;
- conhecimento;
- sobriedade;
- tecnologia;
- qualidade executiva.

Paleta-base:

- azul-marinho profundo;
- azul corporativo;
- branco;
- cinza-claro;
- teal ou verde utilizado pontualmente como destaque.

O site pode utilizar seções escuras de forma estratégica, mas deve preservar contraste e legibilidade.

### Evitar visualmente

Não utilizar como linguagem predominante:

- hackers encapuzados;
- cadeados gigantes;
- códigos binários;
- telas verdes;
- caveiras;
- circuitos genéricos em excesso;
- imagens futuristas sem relação com o conteúdo;
- efeitos neon típicos de sites genéricos de cybersecurity.

### Preferir

Utilizar conceitos relacionados a:

- estratégia;
- governança;
- risco;
- estrutura;
- conexões;
- resiliência;
- organizações;
- tomada de decisão;
- confiança digital.

## 11. UX/UI

O site deve ser simples de compreender e navegar.

A hierarquia esperada deve permitir ao visitante identificar rapidamente:

1. quem é a FN Consulting;
2. qual problema ela ajuda a resolver;
3. quais serviços oferece;
4. como trabalha;
5. quais referências utiliza;
6. quem é Felipe Nicácio;
7. como entrar em contato.

### Regras de interface

- mobile first;
- responsivo em desktop, notebook, tablet e smartphone;
- navegação clara;
- CTA visível sem ser invasivo;
- evitar carrosséis automáticos;
- evitar pop-ups;
- evitar animações excessivas;
- evitar parallax pesado;
- evitar efeitos que prejudiquem desempenho;
- manter bastante espaço em branco;
- limitar largura de leitura;
- preservar consistência entre cards, botões, headings e espaçamentos.

## 12. CSS e design system

Priorizar CSS nativo.

Evitar adicionar frameworks CSS como Tailwind, Bootstrap ou similares sem necessidade explícita.

Organizar os estilos através de:

- custom properties;
- tokens de cor;
- tokens de espaçamento;
- escala tipográfica;
- border-radius consistente;
- sombras discretas;
- estados de foco consistentes.

Evitar valores mágicos repetidos.

Não duplicar estilos entre componentes quando um token ou classe reutilizável resolver o problema com clareza.

## 13. JavaScript

O site deve utilizar o mínimo possível de JavaScript enviado ao navegador.

Antes de adicionar JavaScript, verificar se a necessidade pode ser atendida por:

- HTML;
- CSS;
- recursos nativos do navegador;
- renderização no build do Astro.

Não adicionar bibliotecas apenas para:

- animações simples;
- accordions simples;
- menus simples;
- efeitos de hover;
- scroll suave;
- componentes que possam ser implementados de forma leve.

## 14. TypeScript

Usar TypeScript em modo estrito.

Regras:

- evitar `any`;
- tipar props de componentes quando necessário;
- manter modelos de dados claros;
- evitar interfaces excessivamente genéricas;
- preferir inferência quando ela melhora legibilidade;
- não criar complexidade de tipos sem ganho real.

## 15. Acessibilidade

WCAG 2.2 deve ser considerada como referência mínima.

Toda implementação deve observar:

- HTML semântico;
- navegação por teclado;
- foco visível;
- contraste adequado;
- headings em ordem lógica;
- `alt` apropriado em imagens;
- labels associados a inputs;
- textos de links descritivos;
- áreas clicáveis adequadas;
- `aria-*` somente quando necessário;
- suporte a `prefers-reduced-motion`;
- não depender somente de cor para comunicar estado.

Evitar adicionar ARIA quando elementos HTML nativos já fornecem semântica apropriada.

## 16. SEO

SEO técnico deve existir desde a primeira versão.

Preservar ou implementar:

- `<title>` relevante;
- meta description;
- canonical;
- Open Graph;
- Twitter Cards quando aplicável;
- sitemap;
- robots.txt;
- headings estruturados;
- URLs legíveis;
- dados estruturados;
- conteúdo semanticamente relevante;
- links internos coerentes.

Termos estratégicos incluem:

- FN Consulting
- Consultoria em Segurança da Informação
- CISO como Serviço
- vCISO
- PESI
- Plano Estratégico de Segurança da Informação
- Assessment NIST CSF 2.0
- NIST Cybersecurity Framework
- ISO/IEC 27001
- Implementação ISO 27001
- SGSI
- Programa de Conscientização em Segurança da Informação
- Gestão de Riscos Cibernéticos
- Governança de Segurança da Informação

Não praticar keyword stuffing.

## 17. Schema.org

Quando dados estruturados forem utilizados, priorizar:

- `Organization`
- `ProfessionalService`
- `Person`

Relacionar:

- FN Consulting como entidade institucional;
- Felipe Nicácio como profissional responsável.

Não inserir dados estruturados fictícios.

## 18. Performance

Metas Lighthouse:

- Performance ≥ 95
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

Priorizar:

- geração estática;
- JavaScript mínimo;
- CSS enxuto;
- imagens AVIF ou WebP quando apropriado;
- imagens responsivas;
- lazy loading quando adequado;
- dimensões explícitas para imagens;
- fontes otimizadas;
- dependências reduzidas;
- ausência de scripts de terceiros desnecessários.

Não comprometer Core Web Vitals por efeitos visuais.

## 19. Segurança

Mesmo sendo um site estático, aplicar desenvolvimento seguro.

Nunca incluir no código ou repositório:

- senhas;
- credenciais;
- tokens;
- chaves de API;
- segredos;
- dados pessoais sensíveis;
- arquivos `.env` reais.

Considerar, conforme suporte da hospedagem:

- Content-Security-Policy;
- Strict-Transport-Security;
- X-Content-Type-Options;
- Referrer-Policy;
- Permissions-Policy;
- proteção contra framing indevido.

### Dependências

Antes de adicionar dependência:

1. confirmar se é realmente necessária;
2. preferir pacote amplamente mantido;
3. evitar pacotes para funcionalidades triviais;
4. minimizar superfície de ataque;
5. verificar impacto no bundle.

## 20. Links externos

Ao abrir links externos em nova aba, usar configurações de segurança apropriadas, incluindo `rel="noopener noreferrer"` quando aplicável.

Não introduzir links externos desconhecidos ou não relacionados à FN Consulting.

## 21. Privacidade

Aplicar minimização de dados por padrão.

A primeira versão deve evitar:

- cookies desnecessários;
- trackers de publicidade;
- fingerprinting;
- ferramentas invasivas de analytics;
- formulários que coletem dados além do necessário.

Não criar banner de cookies por padrão quando não houver tecnologia que exija consentimento.

## 22. Formulários

Não criar backend próprio apenas para formulário de contato.

Caso um formulário seja implementado:

- coletar somente dados necessários;
- validar entradas;
- usar serviço externo confiável ou mecanismo simples compatível com hospedagem estática;
- evitar armazenamento desnecessário;
- prever proteção contra spam;
- comunicar finalidade da coleta.

## 23. Conteúdo sobre normas e frameworks

Referências principais:

- ISO/IEC 27001
- ISO/IEC 27002
- ISO/IEC 27005
- ISO/IEC 27701
- ISO 22301
- ISO 31000
- NIST Cybersecurity Framework 2.0
- NIST Risk Management Framework

Não reproduzir conteúdo normativo protegido integralmente.

Normas e frameworks devem ser apresentados como referências metodológicas, e não como garantia de conformidade ou certificação.

## 24. NIST CSF 2.0

Ao tratar do NIST Cybersecurity Framework 2.0, respeitar as seis funções:

1. Govern
2. Identify
3. Protect
4. Detect
5. Respond
6. Recover

O Assessment NIST CSF 2.0 deve ser apresentado como instrumento de entendimento do cenário atual, identificação de lacunas, priorização e evolução — não como um checklist simplista.

## 25. ISO/IEC 27001

Ao tratar de implementação de SGSI:

- não prometer certificação;
- não usar linguagem que implique garantia de aprovação em auditoria;
- apresentar a implementação como construção de sistema de gestão;
- integrar contexto, riscos, governança, processos, controles, métricas e melhoria contínua.

## 26. Conteúdo institucional de Felipe Nicácio

Utilizar o nome completo:

**Felipe Nicácio**

Apresentá-lo como consultor responsável pela FN Consulting.

Não inventar:

- clientes;
- números de projetos;
- anos de experiência;
- resultados financeiros;
- certificações não documentadas;
- depoimentos;
- cases;
- prêmios;
- parceiros.

Quando houver necessidade de acrescentar informação biográfica não existente no repositório, solicitar confirmação antes de publicá-la.

## 27. Regra contra placeholders

Nunca deixar conteúdo institucional publicado com placeholders, exemplos incompletos ou marcadores de preenchimento.

Não utilizar em conteúdo final expressões como:

- `[Nome]`
- `[Empresa]`
- `[E-mail]`
- `XXX`
- `TODO` visível ao usuário
- textos lorem ipsum

Se um dado essencial estiver ausente, não inventá-lo silenciosamente.

## 28. Alterações que exigem cautela especial

Não alterar sem necessidade clara:

- stack principal;
- arquitetura de geração estática;
- identidade da marca FN Consulting;
- nome Felipe Nicácio;
- catálogo de serviços;
- jornada conceitual dos serviços;
- estratégia de privacidade;
- regras de segurança;
- metas de acessibilidade e desempenho;
- estrutura global de SEO.

Caso uma alteração dessas seja necessária, explicar primeiro o impacto e a razão técnica.

## 29. Proibições arquiteturais

Evitar introduzir:

- CMS sem necessidade;
- banco de dados;
- autenticação;
- área administrativa;
- containers complexos;
- Kubernetes;
- microserviços;
- state management global;
- API Gateway;
- arquitetura serverless desnecessária;
- bibliotecas de UI pesadas;
- dependências apenas para ganho cosmético marginal.

O projeto deve permanecer proporcional ao problema que resolve.

## 30. Git e commits

Antes de alterar arquivos:

- compreender a estrutura atual;
- evitar sobrescrever mudanças não relacionadas;
- limitar alterações ao escopo solicitado.

Commits devem ser pequenos, coerentes e descritivos.

Preferir Conventional Commits, por exemplo:

```text
feat: adiciona seção de metodologia
fix: corrige navegação mobile
style: refina identidade visual do hero
refactor: reorganiza dados dos serviços
perf: otimiza carregamento de imagens
seo: adiciona dados estruturados
security: endurece políticas de headers
docs: atualiza documentação do projeto
```

Não realizar refatorações amplas não solicitadas durante correções pontuais.

## 31. Pull requests

Quando trabalhar via branch e pull request:

- descrever claramente o objetivo;
- resumir arquivos afetados;
- informar impactos de UX, SEO, segurança e performance quando aplicável;
- registrar testes executados;
- evitar misturar mudanças não relacionadas.

## 32. Validação antes de concluir alterações

Sempre que possível, executar:

```bash
npm install
npm run build
```

O build deve executar validação TypeScript e geração Astro.

Quando aplicável, também validar:

- navegação mobile;
- links;
- headings;
- contraste;
- foco por teclado;
- console do navegador;
- imagens quebradas;
- responsividade;
- ausência de overflow horizontal.

Não declarar que o build passou sem realmente executá-lo ou sem evidência de CI.

## 33. GitHub Actions

Preservar pipeline de validação do projeto.

Mudanças no workflow devem:

- manter build automatizado;
- evitar permissões excessivas;
- usar ações amplamente reconhecidas;
- fixar versões maiores estáveis ou SHAs quando a política exigir;
- não armazenar secrets diretamente no YAML.

## 34. Deploy

O projeto deve permanecer compatível com hospedagem estática, especialmente:

- Cloudflare Pages
- GitHub Pages
- Vercel

Evitar acoplamento desnecessário a um provedor.

## 35. Critérios de aceite para novas funcionalidades

Uma funcionalidade só deve ser considerada concluída quando:

- atende ao requisito solicitado;
- mantém responsividade;
- não quebra acessibilidade básica;
- não introduz dependência desnecessária;
- não degrada performance de forma relevante;
- preserva SEO;
- não adiciona risco de segurança evidente;
- possui código legível;
- mantém consistência visual;
- passa pelo build disponível.

## 36. Filosofia de desenvolvimento

Priorizar nesta ordem:

1. clareza;
2. simplicidade;
3. segurança;
4. acessibilidade;
5. performance;
6. manutenção;
7. estética;
8. efeitos visuais.

Uma solução tecnicamente sofisticada não é automaticamente melhor.

Para este projeto, a melhor solução normalmente será aquela que entrega uma experiência institucional premium com o menor número razoável de dependências, abstrações e componentes dinâmicos.

## 37. Regra final

A FN Consulting não deve parecer um template genérico de cybersecurity.

Toda decisão de design e desenvolvimento deve reforçar uma marca de consultoria especializada, executiva, sóbria e orientada a riscos.

Quando houver dúvida entre uma implementação visualmente chamativa e uma implementação mais simples, confiável e coerente com uma consultoria profissional, priorizar a segunda.