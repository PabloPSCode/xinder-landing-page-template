import {
    BrowsersIcon,
    ChartLineUpIcon,
    CompassIcon,
    CubeIcon,
    FanIcon,
    HeadsetIcon,
    LightningIcon,
    PaintBrushIcon,
    SquaresFourIcon
} from "@phosphor-icons/react";

export const xinderNavLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Contato", href: "#contato" },
];

export const xinderHeroTags = [
  "SaaS e plataformas",
  "Apps mobile",
  "IA aplicada",
  "Cloud & DevOps",
  "UX/UI estratégico",
];

export const xinderBrandLogos = [
  { src: "/logo.png", alt: "Nebula Systems" },
  { src: "/projects/project1.png", alt: "Nexo Logística" },
  { src: "/projects/project2.png", alt: "Pulse Tech" },
  { src: "/projects/project3.png", alt: "Aurora Labs" },
  { src: "/projects/project4.png", alt: "Atlas Corp" },
  { src: "/projects/project1.png", alt: "Lumen Pay" },
];

export const xinderMetrics = [
  {
    preTitle: "Mais de",
    value: 120,
    title: "produtos digitais em produção",
    icon: <CubeIcon className="text-primary-500" weight="fill" />,
    duration: 2.2,
  },
  {
    preTitle: "Até",
    value: 92,
    title: "de NPS em projetos críticos",
    icon: <ChartLineUpIcon className="text-primary-500" weight="fill" />,
    duration: 2.4,
  },
  {
    preTitle: "Mais de",
    value: 75,
    title: "especialistas alocados",
    icon: <HeadsetIcon className="text-primary-500" weight="fill" />,
    duration: 2.1,
  },
  {
    preTitle: "Em média",
    value: 6,
    title: "semanas para MVP validado",
    icon: <LightningIcon className="text-primary-500" weight="fill" />,
    duration: 1.8,
  },
];

export const xinderFeaturedServices = [
  {
    title: "Plataformas SaaS escaláveis",
    description:
      "Arquitetura modular para crescer com o seu negócio sem reescrever tudo.",
    image: "/projects/project2.png",
  },
  {
    title: "Aplicativos mobile operacionais",
    description:
      "Apps iOS e Android integrados ao seu core para ganho de eficiência.",
    image: "/projects/project1.png",
  },
  {
    title: "Portais B2B e marketplaces",
    description:
      "Experiências digitais que aceleram vendas complexas com performance.",
    image: "/projects/project3.png",
  },
  {
    title: "Dashboards e BI em tempo real",
    description:
      "Indicadores vivos para decisões rápidas em operações distribuídas.",
    image: "/projects/project4.png",
  },
];

export const xinderExpandingServices = [
  {
    title: "Squads dedicados",
    description: "Times completos com gestão e governança da Xinder.",
    icon: <SquaresFourIcon size={28} className="text-primary-500" />,
  },
  {
    title: "Web apps robustas",
    description: "Interfaces rápidas com foco em conversão e produtividade.",
    icon: <BrowsersIcon size={28} className="text-primary-500" />,
  },
  {
    title: "Experiência do usuário",
    description: "Design orientado a resultado e pesquisa contínua.",
    icon: <PaintBrushIcon size={28} className="text-primary-500" />,
  }
];

export const xinderSolutionItems = [
  {
    title: "Arquitetura pensada para escala",
    description: "Microserviços, APIs e integrações mapeadas desde o início.",
    icon: <CubeIcon size={26} className="text-white" weight="fill" />,
  },
  {
    title: "Entrega contínua e previsível",
    description:
      "Pipeline DevOps com testes, releases e observabilidade integrados.",
    icon: <LightningIcon size={26} className="text-white" weight="fill" />,
  },
  {
    title: "Time alinhado ao negócio",
    description: "Discovery, priorização e governança com foco em resultado.",
    icon: <CompassIcon size={26} className="text-white" weight="fill" />,
  },
];

export const xinderHighlights = [
  {
    title: "Studio de inovação",
    description:
      "Cocriação com seus times para transformar ideias em produtos.",
    image: "/projects/project2.png",
  },
  {
    title: "Laboratório de performance",
    description:
      "Otimização contínua para reduzir custos e aumentar a velocidade.",
    image: "/projects/project4.png",
  },
  {
    title: "Design system modular",
    description:
      "Interface consistente para lançar funcionalidades com agilidade.",
    image: "/projects/project3.png",
  },
];

export const xinderInsights = [
  {
    title: "Como escalar times sem perder qualidade",
    text: "Framework prático para alinhar estratégia, squad e entrega.",
    url: "#",
  },
  {
    title: "Checklist de MVP para operações críticas",
    text: "Aprenda a validar produto sem interromper seu core.",
    url: "#",
  },
  {
    title: "IA aplicada no backoffice",
    text: "Casos reais de automação com impacto mensurável.",
    url: "#",
  },
];

export const xinderTestimonials = [
  {
    avatarUrl: "/profiles/profile4.png",
    userName: "Mariana Lopes",
    userRole: "Gerente de Produto",
    rating: 5,
    testimonial:
      "A Xinder conectou estratégia e execução como poucos parceiros. Entregamos nosso MVP em 6 semanas com qualidade.",
  },
  {
    avatarUrl: "/profiles/profile1.png",
    userName: "Ricardo Azevedo",
    userRole: "CTO",
    rating: 5,
    testimonial:
      "Os squads foram rápidos em entender o negócio e evoluir a plataforma com segurança e performance.",
  },
  {
    avatarUrl: "/profiles/profile5.png",
    userName: "Lucas Almeida",
    userRole: "Head de Inovação",
    rating: 4,
    testimonial:
      "A governança de entregas e o suporte técnico deram previsibilidade ao nosso roadmap.",
  },
];

export const xinderFooterColumns = [
  {
    title: "Serviços",
    items: [
      { label: "Squads dedicados", href: "#servicos" },
      { label: "Produto digital", href: "#servicos" },
      { label: "UX/UI", href: "#servicos" },
      { label: "DevOps", href: "#solucoes" },
    ],
  },
  {
    title: "Soluções",
    items: [
      { label: "Plataformas SaaS", href: "#solucoes" },
      { label: "Aplicativos mobile", href: "#solucoes" },
      { label: "Integrações", href: "#solucoes" },
      { label: "Analytics", href: "#solucoes" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Sobre a Xinder", href: "#inicio" },
      { label: "Conteúdos", href: "#conteudos" },
      { label: "Trabalhe conosco", href: "#" },
    ],
  },
  {
    title: "Contato",
    items: [
      { label: "contato@xinder.dev", href: "mailto:contato@xinder.dev" },
      { label: "+55 11 99999-1234", href: "tel:+5511999991234" },
      { label: "Agendar diagnóstico", href: "#contato" },
      { label: "WhatsApp", href: "#" },
    ],
  },
];

export const xinderSocialLinks = [
  { iconName: "instagram", href: "#" },
  { iconName: "x", href: "#" },
  { iconName: "youtube", href: "#" },
  { iconName: "whatsapp", href: "#" },
];

export const xinderContactHighlights = [
  {
    title: "Roadmaps claros",
    description: "Prioridades alinhadas com resultados de negócio.",
    icon: <FanIcon size={26} className="text-primary-500" />,
  },
  {
    title: "Especialistas senior",
    description: "Engenharia com visão de produto e gestão técnica.",
    icon: <HeadsetIcon size={26} className="text-primary-500" />,
  },
  {
    title: "Governança completa",
    description: "Indicadores, SLAs e visibilidade ponta a ponta.",
    icon: <CompassIcon size={26} className="text-primary-500" />,
  },
];
