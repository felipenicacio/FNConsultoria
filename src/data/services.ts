/**
 * Catálogo de serviços da FN Security.
 *
 * GOVERNANÇA DE DADOS
 * ─────────────────────────────────────────────────────────────────────────
 * Fonte de verdade: Notion — 📦 05 — Conteúdo dos Serviços
 * Rastreamento: Linear — Fase 2 — Arquitetura de Serviços
 *
 * Camada (layer) e seoReady de cada serviço só mudam após aprovação
 * no Notion e conclusão da issue correspondente no Linear.
 *
 * CAMADAS (aprovadas na FEL-18)
 * ─────────────────────────────────────────────────────────────────────────
 * 'primary'       → serviços principais, alta exposição na Home
 * 'complementary' → complementares/especializados, exposição secundária
 * 'transversal'   → capacidade transversal; não recebe card principal na Home
 *
 * SEO
 * ─────────────────────────────────────────────────────────────────────────
 * seoReady: true  → página indexável, canônica, presente no sitemap
 * seoReady: false → noindex, sem canonical, sem OG, fora do sitemap
 * Ativar por serviço após aprovação final de conteúdo (Fase 5).
 */

export type ServiceLayer = 'primary' | 'transversal' | 'complementary';

export interface Service {
  /** Identificador único — slug de URL em /servicos/[slug] */
  slug: string;
  /** Título completo do serviço */
  title: string;
  /** Título curto para navegação, breadcrumbs e cards compactos */
  shortTitle: string;
  /**
   * Camada comercial.
   * Só alterar após aprovação no Notion e conclusão da issue no Linear.
   */
  layer: ServiceLayer;
  /** Descrição para cards na Home — fonte: seção "Mensagem comercial base" do Notion */
  description: string;
  /** Resultado resumido para card — fonte: "Resultado para card" do Notion */
  outcome: string;
  /** Problema resumido para página de serviço — fonte: "Problema para página do site" */
  problem: string;
  /** Contextos de compra resumidos — fonte: "Quando contratar" do Notion */
  whenToHire: string[];
  /** Referências metodológicas utilizadas */
  references?: string[];
  /**
   * Slugs de serviços relacionados.
   * Reflete a baseline vigente da arquitetura registrada no Notion
   * e pode evoluir enquanto a FEL-24 permanecer aberta.
   */
  relatedSlugs?: string[];
  /**
   * Controla indexação e presença no sitemap.
   * false → noindex, sem canonical, sem OG, fora do sitemap.
   * Ativar por serviço após aprovação final de conteúdo na Fase 5.
   */
  seoReady: boolean;
}

export const services: Service[] = [

  // ── SERVIÇOS PRINCIPAIS ────────────────────────────────────────────────
  // Aprovados: FEL-19, FEL-20, FEL-21, FEL-22
  // Fonte: Notion — 📦 05 — Conteúdo dos Serviços

  {
    slug: 'ciso-como-servico',
    title: 'CISO como Serviço',
    shortTitle: 'CISO como Serviço',
    layer: 'primary',
    // Fonte: seção 15 — Mensagem comercial base (FEL-19)
    description:
      'Liderança consultiva especializada para estruturar governança, priorizar riscos e investimentos e acompanhar continuamente a evolução da Segurança da Informação.',
    outcome:
      'Governança, prioridades e direcionamento contínuo da Segurança da Informação.',
    // Fonte: seção 15 — Problema para página do site (FEL-19)
    problem:
      'Ausência ou insuficiência de liderança especializada para transformar riscos, iniciativas e necessidades de Segurança da Informação em decisões, prioridades e uma agenda estruturada de evolução.',
    // Fonte: seção 4 — Quando contratar (FEL-19), resumido
    whenToHire: [
      'A organização não possui CISO dedicado, mas já necessita de direção especializada.',
      'Existe equipe técnica, porém falta liderança estratégica e governança estruturada.',
      'Riscos e investimentos de segurança chegam à liderança sem critérios consistentes de priorização.',
      'Um assessment, auditoria ou roadmap precisa ser governado e acompanhado.',
      'A direção precisa de indicadores e visão executiva sobre Segurança da Informação.',
    ],
    references: ['ISO/IEC 27001', 'NIST CSF 2.0', 'ISO 31000'],
    relatedSlugs: ['assessment-nist-csf', 'pesi', 'iso-27001'],
    seoReady: false, // ativar após aprovação final na Fase 5
  },

  {
    slug: 'assessment-nist-csf',
    title: 'Assessment NIST Cybersecurity Framework 2.0',
    shortTitle: 'Assessment NIST CSF 2.0',
    layer: 'primary',
    // Fonte: seção 17 — Conteúdo-base para o site (FEL-21)
    description:
      'Avaliação estruturada do estado atual das capacidades de Segurança da Informação com base no NIST CSF 2.0, identificando lacunas, definindo o estado-alvo e priorizando a evolução.',
    outcome:
      'Current Profile, Target Profile, lacunas e prioridades para evolução.',
    // Fonte: seção 2 — Problema resolvido (FEL-21), condensado
    problem:
      'Ausência de visão consolidada do cenário atual de Segurança da Informação e dificuldade para identificar quais lacunas representam maior impacto, urgência ou risco.',
    // Fonte: seção 4 — Quando contratar (FEL-21), resumido
    whenToHire: [
      'A organização não possui diagnóstico estruturado de suas capacidades de Segurança da Informação.',
      'Há necessidade de baseline antes de criar um PESI ou roadmap de evolução.',
      'A direção precisa de visão executiva sobre o estado atual e as principais lacunas.',
      'A organização pretende estruturar ou amadurecer um SGSI.',
      'Auditorias, clientes ou requisitos externos apontam necessidade de maior estruturação.',
    ],
    references: ['NIST CSF 2.0', 'ISO/IEC 27001', 'ISO 31000'],
    relatedSlugs: ['pesi', 'ciso-como-servico', 'iso-27001'],
    seoReady: false,
  },

  {
    slug: 'pesi',
    title: 'PESI — Plano Estratégico de Segurança da Informação',
    shortTitle: 'PESI',
    layer: 'primary',
    // Fonte: seção 15 — Mensagem comercial base (FEL-20)
    description:
      'Estruturação de objetivos, iniciativas, indicadores e roadmap para conectar a evolução da Segurança da Informação aos riscos e prioridades reais do negócio.',
    outcome:
      'Direcionamento estratégico, prioridades e roadmap de evolução da Segurança da Informação.',
    // Fonte: seção 2 — Problema resolvido (FEL-20), condensado
    problem:
      'Ausência de estratégia formal de Segurança da Informação, com iniciativas fragmentadas e sem priorização baseada em risco, roadmap consolidado ou alinhamento com os objetivos do negócio.',
    // Fonte: seção 4 — Quando contratar (FEL-20), resumido
    whenToHire: [
      'A organização não possui direcionamento estratégico formal para Segurança da Informação.',
      'Existe um Assessment ou auditoria com recomendações que precisam ser priorizadas.',
      'Há dificuldade para justificar investimentos e iniciativas à alta administração.',
      'O programa de segurança cresceu de forma reativa e precisa ser reorganizado.',
      'É necessário estabelecer objetivos, indicadores, responsáveis e horizonte de evolução.',
    ],
    references: ['ISO/IEC 27001', 'NIST CSF 2.0', 'ISO 31000'],
    relatedSlugs: ['assessment-nist-csf', 'ciso-como-servico', 'iso-27001'],
    seoReady: false,
  },

  {
    slug: 'iso-27001',
    title: 'Implementação de SGSI baseado na ISO/IEC 27001',
    shortTitle: 'SGSI ISO/IEC 27001',
    layer: 'primary',
    // Fonte: seção 16 — Conteúdo-base para o site (FEL-22)
    description:
      'Estruturação e implementação de um Sistema de Gestão de Segurança da Informação conectado a riscos, responsabilidades e necessidades reais do negócio.',
    outcome:
      'SGSI estruturado, operável e preparado para evolução contínua e futuras avaliações.',
    // Fonte: seção 16 — Problema resumido (FEL-22)
    problem:
      'Controles, documentos e iniciativas fragmentados, sem um sistema integrado de governança, riscos, evidências e melhoria contínua.',
    // Fonte: seção 16 — Quando contratar (FEL-22), resumido
    whenToHire: [
      'Há necessidade de estruturar formalmente a gestão de Segurança da Informação.',
      'Clientes ou contratos exigem demonstração de maturidade e controles estruturados.',
      'Um assessment ou auditoria identificou lacunas relevantes de gestão.',
      'A organização está em preparação para uma futura certificação ISO/IEC 27001.',
      'Políticas e controles existentes não formam um sistema sustentável e auditável.',
    ],
    references: ['ISO/IEC 27001', 'ISO/IEC 27002', 'ISO/IEC 27005'],
    relatedSlugs: ['assessment-nist-csf', 'pesi', 'ciso-como-servico', 'auditoria-readiness'],
    seoReady: false,
  },

  // ── CAPACIDADE TRANSVERSAL ─────────────────────────────────────────────
  // Aprovado: FEL-25
  // Nota (FEL-18): não exposta como card principal na Home;
  // comunicada como capacidade metodológica transversal.

  {
    slug: 'gestao-de-riscos',
    title: 'Gestão de Riscos de Segurança da Informação',
    shortTitle: 'Gestão de Riscos',
    layer: 'transversal',
    description:
      'Estruturação de metodologia, critérios, inventário de riscos, planos de tratamento e mecanismos de acompanhamento orientados ao contexto e às prioridades da organização.',
    outcome:
      'Metodologia de riscos estruturada e integrada à gestão organizacional.',
    problem:
      'Ausência de método consistente de identificação, análise, avaliação, priorização, tratamento e acompanhamento de riscos de Segurança da Informação.',
    whenToHire: [
      'A organização precisa estruturar ou revisar a metodologia de gestão de riscos de segurança.',
      'Há estrutura de segurança existente, mas a gestão de riscos é informal ou inconsistente.',
    ],
    references: ['ISO 31000', 'ISO/IEC 27005', 'NIST RMF'],
    relatedSlugs: ['ciso-como-servico', 'pesi', 'iso-27001'],
    seoReady: false,
  },

  // ── SERVIÇOS COMPLEMENTARES E ESPECIALIZADOS ───────────────────────────
  // Aprovados: FEL-23, FEL-26, FEL-27, FEL-28
  // Exposição secundária na Home; páginas completas na Fase 5.

  {
    slug: 'conscientizacao',
    title: 'Programa de Conscientização em Segurança da Informação',
    shortTitle: 'Conscientização',
    layer: 'complementary',
    // Fonte: seção 16 — Conteúdo-base para o site (FEL-23)
    description:
      'Programa contínuo de conscientização que combina diagnóstico, segmentação de públicos, trilhas de aprendizagem, campanhas, simulações e indicadores para desenvolver comportamentos mais seguros.',
    outcome:
      'Trilhas, campanhas, simulações e indicadores para desenvolver cultura e acompanhar a evolução do risco humano.',
    // Fonte: seção 2 — Problema resolvido (FEL-23), condensado
    problem:
      'Treinamentos pontuais ou genéricos sem continuidade, medição de comportamento ou segmentação por público e nível de exposição.',
    // Fonte: seção 16 — Quando contratar (FEL-23), resumido
    whenToHire: [
      'Os treinamentos atuais são pontuais ou genéricos.',
      'Incidentes ou simulações indicam exposição relevante ao risco humano.',
      'Assessments ou auditorias identificaram lacunas de conscientização.',
      'A organização precisa de um programa contínuo, segmentado e mensurável.',
    ],
    references: ['ISO/IEC 27001', 'NIST CSF 2.0'],
    relatedSlugs: ['ciso-como-servico', 'iso-27001', 'gestao-de-riscos'],
    seoReady: false,
  },

  {
    slug: 'auditoria-readiness',
    title: 'Auditoria Interna e Readiness de Segurança da Informação',
    shortTitle: 'Auditoria e Readiness',
    layer: 'complementary',
    // Aprovado: FEL-28
    description:
      'Avaliação independente da conformidade e eficácia dos controles implementados, ou preparação estruturada para auditorias e certificações, com identificação de lacunas e plano de ação.',
    outcome:
      'Visão independente do estado atual e plano de preparação ou correção.',
    problem:
      'Necessidade de avaliação independente dos controles implementados, preparação estruturada para certificação ou verificação de conformidade e eficácia.',
    whenToHire: [
      'A organização se prepara para auditoria de certificação ISO/IEC 27001.',
      'Há necessidade de avaliação independente dos controles existentes.',
      'Requisitos internos ou externos exigem verificação de conformidade.',
    ],
    references: ['ISO/IEC 27001', 'ISO/IEC 27007'],
    relatedSlugs: ['iso-27001', 'pesi', 'ciso-como-servico'],
    seoReady: false,
  },

  {
    slug: 'continuidade-de-negocios',
    title: 'Continuidade de Negócios e Resiliência',
    shortTitle: 'Continuidade de Negócios',
    layer: 'complementary',
    // Aprovado: FEL-26
    description:
      'Estruturação de programa de continuidade orientado a processos críticos, estratégias de recuperação, planos de crise, governança e exercícios periódicos de resiliência organizacional.',
    outcome:
      'Capacidade de resposta e recuperação diante de interrupções e crises.',
    problem:
      'Dependência de processos críticos sem planos de continuidade formalizados, fragilidade de recuperação ou pressão regulatória e contratual por resiliência.',
    whenToHire: [
      'A organização não possui BIA ou estratégias formalizadas de continuidade.',
      'Requisitos regulatórios ou contratuais exigem demonstração de resiliência.',
      'Há necessidade de estruturar planos de crise e exercícios periódicos.',
    ],
    references: ['ISO 22301', 'ISO 31000'],
    relatedSlugs: ['ciso-como-servico', 'gestao-de-riscos'],
    seoReady: false,
  },

  {
    slug: 'privacidade',
    title: 'Governança de Privacidade e Proteção de Dados',
    shortTitle: 'Privacidade e Dados',
    layer: 'complementary',
    // Aprovado: FEL-27
    description:
      'Estruturação de modelo de governança de privacidade com papéis, políticas, processos, gestão de riscos à privacidade e integração com Segurança da Informação.',
    outcome:
      'Governança de privacidade estruturada e integrada à gestão de riscos.',
    problem:
      'Necessidade de estruturar governança de privacidade, atender requisitos de proteção de dados ou integrar DPO, Segurança da Informação e Riscos de forma consistente.',
    whenToHire: [
      'A organização precisa atender requisitos de adequação à LGPD ou GDPR.',
      'Há necessidade de estruturar governança de privacidade de forma integrada.',
      'Privacidade precisa ser integrada à Segurança da Informação e à gestão de riscos.',
    ],
    references: ['ISO/IEC 27701', 'ISO/IEC 27001', 'ISO 31000'],
    relatedSlugs: ['ciso-como-servico', 'gestao-de-riscos', 'iso-27001'],
    seoReady: false,
  },

];

// ── FILTROS UTILITÁRIOS ──────────────────────────────────────────────────

/** Serviços principais — alta exposição na Home */
export const primaryServices = services.filter((s) => s.layer === 'primary');

/** Serviços complementares — exposição secundária na Home */
export const complementaryServices = services.filter((s) => s.layer === 'complementary');

/** Capacidade transversal — não exposta como card principal na Home */
export const transversalServices = services.filter((s) => s.layer === 'transversal');

/** Lookup por slug */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Todos os slugs — usado para geração de rotas estáticas (inclui não indexáveis) */
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

/**
 * Slugs prontos para indexação.
 * Usado pelo filtro do sitemap em astro.config.mjs.
 * Setar seoReady: true por serviço conforme aprovação na Fase 5.
 */
export const seoReadySlugs = new Set(
  services.filter((s) => s.seoReady).map((s) => s.slug),
);
