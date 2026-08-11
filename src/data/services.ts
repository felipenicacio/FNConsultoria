/**
 * Catálogo de serviços da FN Consulting.
 *
 * GOVERNANÇA DE DADOS
 * ─────────────────────────────────────────────────────────────────────────
 * Camada (layer), ordem de exibição e destaque comercial de cada serviço
 * são definidos pela arquitetura aprovada no Notion e rastreados no Linear.
 *
 * Campos marcados com [PROVISÓRIO] devem ser revisados após conclusão
 * das issues FEL-19 a FEL-28. Não substitua conteúdo provisório por
 * conteúdo definitivo sem a issue correspondente estar concluída.
 *
 * CAMADAS (aprovadas na FEL-18 — Notion: 🧭 02 — Arquitetura de Serviços)
 * ─────────────────────────────────────────────────────────────────────────
 * 'primary'       → serviços principais, alta exposição na Home
 * 'complementary' → complementares/especializados, exposição secundária
 * 'transversal'   → capacidade transversal; não recebe card principal na Home
 */

export type ServiceLayer = 'primary' | 'transversal' | 'complementary';

export interface Service {
  /** Identificador único — usado como slug de URL em /servicos/[slug] */
  slug: string;
  /** Título completo do serviço */
  title: string;
  /** Título curto para navegação, breadcrumbs e cards compactos */
  shortTitle: string;
  /**
   * Camada comercial — define peso e exposição na Home.
   * Só alterar após aprovação no Notion e conclusão da issue no Linear.
   */
  layer: ServiceLayer;
  /** Descrição para cards na Home — [PROVISÓRIO até FEL-19 a FEL-28] */
  description: string;
  /** Resultado esperado — [PROVISÓRIO até FEL-19 a FEL-28] */
  outcome: string;
  /** Problema principal que o serviço resolve — [PROVISÓRIO até FEL-19 a FEL-28] */
  problem: string;
  /** Contextos de compra — [PROVISÓRIO até FEL-19 a FEL-28] */
  whenToHire: string[];
  /** Referências metodológicas utilizadas */
  references?: string[];
  /**
   * Slugs de serviços relacionados — preenchido definitivamente na FEL-24.
   * [PROVISÓRIO]
   */
  relatedSlugs?: string[];
}

/**
 * Catálogo completo de serviços — 9 ofertas (aprovadas na FEL-18).
 *
 * STATUS DOS TEXTOS: provisório.
 * Conteúdo definitivo será registrado via FEL-19 a FEL-28.
 * A estrutura de dados (slugs, camadas, relações) está aprovada.
 */
export const services: Service[] = [
  // ── SERVIÇOS PRINCIPAIS ────────────────────────────────────────────────

  {
    slug: 'ciso-como-servico',
    title: 'CISO como Serviço',
    shortTitle: 'CISO como Serviço',
    layer: 'primary',
    // [PROVISÓRIO — aguarda FEL-19]
    description:
      'Atuação estratégica para estruturar, direcionar e amadurecer a gestão de Segurança da Informação, conectando riscos cibernéticos, prioridades empresariais e tomada de decisão executiva.',
    outcome: 'Governança e direcionamento contínuo da Segurança da Informação.',
    problem:
      'Ausência ou insuficiência de liderança especializada e de governança estruturada de Segurança da Informação.',
    whenToHire: [
      'Organização sem CISO ou sem estrutura formal de Segurança da Informação',
      'Necessidade de direcionamento estratégico e priorização baseada em riscos',
      'Necessidade de interlocução executiva sobre riscos cibernéticos',
    ],
    references: ['ISO/IEC 27001', 'NIST CSF 2.0', 'ISO 31000'],
    relatedSlugs: ['assessment-nist-csf', 'pesi', 'iso-27001'],
  },

  {
    slug: 'assessment-nist-csf',
    title: 'Assessment NIST Cybersecurity Framework 2.0',
    shortTitle: 'Assessment NIST CSF 2.0',
    layer: 'primary',
    // [PROVISÓRIO — aguarda FEL-21]
    description:
      'Avaliação estruturada das capacidades de Segurança da Informação utilizando as funções Govern, Identify, Protect, Detect, Respond e Recover do NIST Cybersecurity Framework 2.0.',
    outcome: 'Visão do cenário atual, lacunas e roadmap de evolução.',
    problem:
      'Ausência de visão clara sobre o estado atual, maturidade, lacunas e estado-alvo das capacidades de Segurança da Informação.',
    whenToHire: [
      'Necessidade de entender o cenário atual de segurança com base em referência reconhecida',
      'Preparação para auditorias, certificações ou programas estruturados de evolução',
      'Dificuldade em priorizar investimentos e iniciativas de segurança',
    ],
    references: ['NIST CSF 2.0', 'ISO/IEC 27001', 'ISO 31000'],
    relatedSlugs: ['pesi', 'ciso-como-servico', 'iso-27001'],
  },

  {
    slug: 'pesi',
    title: 'PESI — Plano Estratégico de Segurança da Informação',
    shortTitle: 'PESI',
    layer: 'primary',
    // [PROVISÓRIO — aguarda FEL-20]
    description:
      'Estruturação de objetivos, iniciativas, indicadores, prioridades e roadmap para conectar a evolução da Segurança da Informação aos objetivos do negócio.',
    outcome: 'Plano estratégico priorizado e orientado por riscos.',
    problem:
      'Falta de clareza sobre prioridades, objetivos, investimentos, responsabilidades ou roadmap de Segurança da Informação.',
    whenToHire: [
      'Ausência de direcionamento estratégico de segurança',
      'Necessidade de transformar diagnóstico em plano executável e priorizado',
      'Demanda por clareza sobre iniciativas, responsáveis e horizonte de evolução',
    ],
    references: ['ISO/IEC 27001', 'NIST CSF 2.0', 'ISO 31000'],
    relatedSlugs: ['ciso-como-servico', 'iso-27001'],
  },

  {
    slug: 'iso-27001',
    title: 'Implementação de SGSI baseado na ISO/IEC 27001',
    shortTitle: 'SGSI ISO/IEC 27001',
    layer: 'primary',
    // [PROVISÓRIO — aguarda FEL-22]
    description:
      'Estruturação e implementação de um Sistema de Gestão de Segurança da Informação alinhado ao contexto, riscos, processos, controles e objetivos da organização.',
    outcome: 'SGSI sustentável e integrado à gestão organizacional.',
    problem:
      'Necessidade de estruturar formalmente o sistema de gestão, atender requisitos normativos ou preparar a organização para certificação.',
    whenToHire: [
      'Necessidade de estruturar formalmente a gestão de segurança',
      'Preparação para certificação ISO/IEC 27001',
      'Requisitos contratuais, regulatórios ou de clientes que exigem conformidade',
    ],
    references: ['ISO/IEC 27001', 'ISO/IEC 27002', 'ISO/IEC 27005'],
    relatedSlugs: ['auditoria-readiness', 'ciso-como-servico'],
  },

  // ── CAPACIDADE TRANSVERSAL ─────────────────────────────────────────────

  {
    slug: 'gestao-de-riscos',
    title: 'Gestão de Riscos de Segurança da Informação',
    shortTitle: 'Gestão de Riscos',
    layer: 'transversal',
    // [PROVISÓRIO — aguarda FEL-25]
    description:
      'Estruturação de metodologia, critérios, inventário de riscos, avaliações, plano de tratamento e mecanismos de acompanhamento orientados ao contexto e prioridades da organização.',
    outcome: 'Metodologia de riscos estruturada e integrada à gestão organizacional.',
    problem:
      'Ausência de método consistente de identificação, análise, avaliação, priorização, tratamento e acompanhamento de riscos de Segurança da Informação.',
    whenToHire: [
      'Necessidade de estruturar ou revisar metodologia de gestão de riscos de segurança',
      'Organização com estrutura existente que precisa formalizar e operacionalizar riscos',
    ],
    references: ['ISO 31000', 'ISO/IEC 27005', 'NIST RMF'],
    relatedSlugs: ['ciso-como-servico', 'pesi', 'iso-27001'],
  },

  // ── SERVIÇOS COMPLEMENTARES E ESPECIALIZADOS ───────────────────────────

  {
    slug: 'conscientizacao',
    title: 'Programa de Conscientização em Segurança da Informação',
    shortTitle: 'Conscientização',
    layer: 'complementary',
    // [PROVISÓRIO — aguarda FEL-23]
    description:
      'Programa contínuo de conscientização orientado a comportamento, percepção de risco, comunicação, treinamento, simulações e acompanhamento da evolução da cultura de segurança.',
    outcome: 'Maior capacidade das pessoas para reconhecer, evitar e reportar riscos.',
    problem:
      'Comportamentos de risco, incidentes humanos, exigências de compliance ou necessidade de cultura de segurança contínua.',
    whenToHire: [
      'Incidentes causados por comportamento humano',
      'Necessidade de estruturar cultura de segurança de forma contínua',
      'Requisitos de compliance, certificação ou auditoria relacionados à conscientização',
    ],
    references: ['ISO/IEC 27001', 'NIST CSF 2.0'],
    relatedSlugs: ['ciso-como-servico', 'iso-27001'],
  },

  {
    slug: 'auditoria-readiness',
    title: 'Auditoria Interna e Readiness de Segurança da Informação',
    shortTitle: 'Auditoria e Readiness',
    layer: 'complementary',
    // [PROVISÓRIO — aguarda FEL-28]
    description:
      'Avaliação independente da conformidade e eficácia dos controles implementados, ou preparação estruturada para auditorias e certificações, com identificação de lacunas e plano de ação.',
    outcome: 'Visão independente do estado atual e plano de preparação ou correção.',
    problem:
      'Necessidade de avaliação independente dos controles, preparação para certificação ou verificação de conformidade e eficácia.',
    whenToHire: [
      'Preparação para auditoria de certificação ISO/IEC 27001',
      'Necessidade de avaliação independente dos controles implementados',
      'Requisitos internos ou externos de verificação de conformidade',
    ],
    references: ['ISO/IEC 27001', 'ISO/IEC 27007'],
    relatedSlugs: ['iso-27001', 'pesi'],
  },

  {
    slug: 'continuidade-de-negocios',
    title: 'Continuidade de Negócios e Resiliência',
    shortTitle: 'Continuidade de Negócios',
    layer: 'complementary',
    // [PROVISÓRIO — aguarda FEL-26]
    description:
      'Estruturação de programa de continuidade orientado a processos críticos, estratégias de recuperação, planos de crise, governança e exercícios periódicos de resiliência organizacional.',
    outcome: 'Capacidade de resposta e recuperação diante de interrupções e crises.',
    problem:
      'Dependência de processos críticos sem planos de continuidade, fragilidade de recuperação ou pressão regulatória e contratual por resiliência.',
    whenToHire: [
      'Ausência de BIA e estratégias de continuidade formalizadas',
      'Requisitos regulatórios, contratuais ou de clientes por resiliência operacional',
      'Necessidade de estruturar planos de crise e exercícios periódicos',
    ],
    references: ['ISO 22301', 'ISO 31000'],
    relatedSlugs: ['ciso-como-servico', 'gestao-de-riscos'],
  },

  {
    slug: 'privacidade',
    title: 'Governança de Privacidade e Proteção de Dados',
    shortTitle: 'Privacidade e Dados',
    layer: 'complementary',
    // [PROVISÓRIO — aguarda FEL-27]
    description:
      'Estruturação de modelo de governança de privacidade com papéis, políticas, processos, gestão de riscos à privacidade e integração com Segurança da Informação.',
    outcome: 'Governança de privacidade estruturada e integrada à gestão de riscos.',
    problem:
      'Necessidade de estruturar governança de privacidade, atender requisitos de proteção de dados ou integrar DPO, Segurança e Riscos.',
    whenToHire: [
      'Requisitos de adequação à LGPD ou GDPR',
      'Necessidade de estruturar governança de privacidade de forma integrada',
      'Integração de privacidade com Segurança da Informação e gestão de riscos',
    ],
    references: ['ISO/IEC 27701', 'ISO/IEC 27001', 'ISO 31000'],
    relatedSlugs: ['ciso-como-servico', 'gestao-de-riscos', 'iso-27001'],
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

/** Todos os slugs — usado para geração de rotas estáticas */
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
