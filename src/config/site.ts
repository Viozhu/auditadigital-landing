// --- Pricing & Product Numbers ---
export const PRICE_LAUNCH = 50;
export const PRICE_NEXT = 59;
export const PRICE_FINAL = 89;
export const TOTAL_SLOTS = 100;
export const DELIVERY_HOURS = 48;
export const GUARANTEE_MIN_FAULTS = 3;

// --- About Stats ---
export const aboutStats = [
  { value: '120+', label: 'webs auditadas', color: 'text-blue' },
  { value: '€4.2M', label: 'en ads gestionados', color: 'text-green' },
  { value: '12', label: 'años en producto', color: '' },
] as const;

// --- Trust Badges (FinalCTA) ---
export const trustBadges = [
  'Pago seguro · Stripe',
  `Entrega en ${DELIVERY_HOURS}h`,
  'Garantía sin preguntas',
  'Sin acceso a contraseñas',
] as const;

// --- Pricing Includes ---
export const pricingIncludes = [
  'Informe interactivo en dashboard + PDF descargable',
  'Auditoría completa de los 4 pilares',
  'Lista priorizada de fallos críticos por € de impacto',
  'Hoja de ruta accionable a 30 días',
  'Benchmark con 3 competidores directos',
  'Análisis individual de tus Meta Ads activos',
  'Plantilla de seguimiento semanal',
  `Entrega en ${DELIVERY_HOURS}h desde tu pago`,
] as const;

// --- Testimonials ---
export interface Testimonial {
  stars: string;
  quote: string;
  result: string;
  initials: string;
  avatarStyle: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    stars: '★★★★★',
    quote: 'En 48h tenía exactamente <strong class="text-green font-semibold">7 cosas concretas</strong> que arreglar en mi e-commerce. La primera —cambiar el copy del botón de checkout— me subió la conversión un 11% en una semana.',
    result: '▲ +11% conversión · semana 1',
    initials: 'MR',
    avatarStyle: 'background: linear-gradient(135deg, #2e5bff, #0e1f5c); color: #ffffff;',
    name: 'Marta Ruiz',
    role: 'e-commerce moda · 18k/mes',
  },
  {
    stars: '★★★★★',
    quote: 'Llevaba meses tirando dinero en Meta Ads sin entender por qué. El análisis del pilar 4 me destapó <strong class="text-green font-semibold">3 ángulos quemados</strong> en mis anuncios y dos hooks nuevos. CPA bajó un 34%.',
    result: '▼ −34% CPA en Meta',
    initials: 'JM',
    avatarStyle: 'background: linear-gradient(135deg, #a3ff12, #6db300); color: #050505;',
    name: 'Javier Mendoza',
    role: 'freelance growth · agencia 1p',
  },
  {
    stars: '★★★★★',
    quote: 'Mi anterior agencia me pasó un PDF de 80 páginas que no leí jamás. AuditaDigital me devolvió <strong class="text-green font-semibold">una hoja con 12 acciones priorizadas por € de impacto.</strong> Por fin sé qué hacer el lunes.',
    result: '▲ Roadmap ejecutable · 12 acciones',
    initials: 'DC',
    avatarStyle: 'background: linear-gradient(135deg, #ff5c00, #b34000); color: #ffffff;',
    name: 'Daniel Cortés',
    role: 'SaaS B2B · 6k MRR',
  },
];

// --- FAQ ---
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: '¿Es una auditoría automática hecha con un script o IA?',
    a: 'No. Usamos herramientas profesionales para extraer datos —Lighthouse, Ahrefs, Meta Ad Library, crawls propios— pero <strong class="text-paper font-medium">la lectura, la priorización y la hoja de ruta son 100% humanas y estratégicas.</strong> Lo que recibes no es un PDF generado por IA: es interpretación, contexto y plan de acción.',
  },
  {
    q: '¿Qué necesito darte para empezar?',
    a: 'Solo tu URL. Cero accesos a Google Analytics, cero contraseñas de tu hosting, cero datos de cliente. Trabajamos sobre lo que es público + datos extraídos con nuestras herramientas pro. Si en algún punto necesitamos más info la pedimos por email, nunca te la exigimos de entrada.',
  },
  {
    q: '¿Y si no tengo tiempo de implementarlo?',
    a: 'El informe está priorizado por <strong class="text-paper font-medium">impacto en € vs. esfuerzo</strong>. Te decimos exactamente cuáles son las 3 acciones que mover esta semana, cuáles este mes, y cuáles dejar para luego. Si tienes desarrollador o agencia, el documento está pensado para que lo ejecuten directamente sin más explicaciones.',
  },
  {
    q: '¿Subiréis el precio? ¿Cuándo?',
    a: `Sí. Cuando se cierren las primeras ${TOTAL_SLOTS} auditorías, sube a $${PRICE_NEXT}. Cuando se cierren las siguientes ${TOTAL_SLOTS}, va a su PVP final de $${PRICE_FINAL}. <strong class="text-paper font-medium">No hay descuentos tachados, no hay cuenta atrás falsa.</strong> Los slots se acaban según capacidad real de entrega.`,
  },
  {
    q: '¿Devolvéis el dinero de verdad?',
    a: `Sí. Si no encontramos al menos ${GUARANTEE_MIN_FAULTS} fallos críticos accionables en tu web, devolvemos los $${PRICE_LAUNCH} sin pedirte que justifiques nada. Hasta hoy lo hemos tenido que hacer 0 veces, pero la garantía está y va en serio.`,
  },
  {
    q: '¿Vale para mi tipo de negocio?',
    a: 'Está optimizado para <strong class="text-paper font-medium">e-commerce pequeños/medianos, SaaS y servicios profesionales</strong> que ya tienen tráfico (mínimo ~1.500 visitas/mes) y al menos una campaña activa de Meta. Si estás en marketplaces, en informacionales puros sin venta, o aún sin tráfico, escríbenos y te decimos si tiene sentido para ti.',
  },
  {
    q: '¿Hay reuniones, llamadas o seguimiento?',
    a: `El producto base de $${PRICE_LAUNCH} es <strong class="text-paper font-medium">asíncrono</strong>: tú pagas, recibes el informe en ${DELIVERY_HOURS}h, lo lees y lo ejecutas. Nada de calls. Si después quieres acompañamiento, hay un servicio aparte —pero no necesitas contratarlo para sacarle partido a la auditoría.`,
  },
];

// --- Pillars ---
export interface PillarCheck {
  text: string;
}

export interface Pillar {
  num: string;
  ico: string;
  title: string;
  desc: string;
  checks: string[];
}

export const pillars: Pillar[] = [
  {
    num: '01',
    ico: 'SEO',
    title: 'SEO & Rendimiento',
    desc: 'Salud técnica, Core Web Vitals y errores de indexación que están escondiendo tu web a Google. Lo invisible que te cuesta posiciones.',
    checks: [
      'Auditoría Core Web Vitals (LCP, CLS, INP)',
      'Errores 4xx / 5xx y cadenas de redirects',
      'Indexación, sitemap y robots.txt',
      'Estructura de cabeceras y meta tags',
      'Canibalización de palabras clave',
      'Velocidad real en móvil 4G',
    ],
  },
  {
    num: '02',
    ico: 'NEG',
    title: 'Negocio',
    desc: 'Claridad de la propuesta de valor y fricciones reales en el embudo. Lo que un visitante entiende —o no— de ti en 5 segundos.',
    checks: [
      'Test de propuesta de valor en 5s',
      'Mapa real del embudo actual',
      'Fricciones del checkout / formulario',
      'Jerarquía de CTA por pliegue',
      'Coherencia precio · oferta · prueba',
      'Objeciones que no estás respondiendo',
    ],
  },
  {
    num: '03',
    ico: 'CMP',
    title: 'Competencia',
    desc: 'Qué están haciendo tus 3 rivales directos que tú estás ignorando. Benchmark de oferta, copy y captación.',
    checks: [
      'Análisis de 3 competidores directos',
      'Gaps de oferta y precio',
      'Mensajes que ellos repiten y tú no',
      'Canales de captación que dominan',
      'Activos que te faltan ya',
      'Lista de cosas a copiar esta semana',
    ],
  },
  {
    num: '04',
    ico: 'ADS',
    title: 'Meta Ads',
    desc: 'Análisis de creatividades, mensajes y consistencia de tus anuncios activos vs. lo que el usuario encuentra al hacer clic.',
    checks: [
      'Inventario de creatividades activas',
      'Coherencia ad → landing → checkout',
      'Hook score estimado por anuncio',
      'Ángulos que te están funcionando',
      'Ángulos quemados o redundantes',
      '3 nuevos conceptos para testar',
    ],
  },
];

// --- Process Steps ---
export interface ProcessStep {
  num: string;
  when: string;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    when: '00h · ahora',
    title: 'Pagas y nos das tu URL',
    desc: 'Stripe Checkout en 30 segundos. Cero llamadas, cero formularios infinitos. Solo tu dominio.',
  },
  {
    num: '02',
    when: '0–24h',
    title: 'Extracción de datos',
    desc: 'Lanzamos las herramientas pro: SEO técnico, biblioteca de Meta, benchmark competitivo y crawl de embudo.',
  },
  {
    num: '03',
    when: '24–48h',
    title: 'Lectura humana',
    desc: 'Un estratega prioriza los hallazgos por impacto en € y monta la hoja de ruta accionable.',
  },
  {
    num: '04',
    when: '48h · entregado',
    title: 'Recibes tu informe',
    desc: 'Dashboard interactivo + PDF descargable. Lista priorizada de fallos críticos y plan a 30 días listo para ejecutar.',
  },
];

// --- Pain Points ---
export interface Pain {
  num: string;
  stat: string;
  quote: string;
  meta: string;
  span: boolean;
}

export const pains: Pain[] = [
  {
    num: '01 / 04',
    stat: '68% lo dice',
    quote: 'No sé por qué mi web no convierte a pesar de que tengo visitas.',
    meta: '<strong>Síntoma:</strong> tráfico OK, ventas planas. Foco en CRO + claridad de propuesta.',
    span: false,
  },
  {
    num: '02 / 04',
    stat: '71% lo dice',
    quote: 'Tiro el dinero en Meta Ads porque la web no retiene al usuario.',
    meta: '<strong>Síntoma:</strong> CTR alto, conversión a venta baja. Foco en consistencia ad → landing.',
    span: false,
  },
  {
    num: '03 / 04',
    stat: '62% lo dice',
    quote: 'Quiero saber qué hace mi competencia para copiar lo que funciona.',
    meta: '<strong>Síntoma:</strong> decisiones a ciegas. Foco en benchmark de oferta y mensaje.',
    span: false,
  },
  {
    num: '04 / 04',
    stat: '54% lo dice',
    quote: 'Mi agencia me pasa reportes imposibles de leer. No sé qué tengo que hacer el lunes.',
    meta: '<strong>Síntoma:</strong> reportes opacos, sin priorización. Lo nuestro es priorización ejecutable, no dashboards bonitos.',
    span: true,
  },
];
