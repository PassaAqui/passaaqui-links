export interface HubLink {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  url: string;
  iconName: 'Smartphone' | 'BookOpen' | 'Presentation' | 'Globe';
  variant: 'primary' | 'surface';
  badge?: string;
  metadata?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  iconName: 'Instagram' | 'Github' | 'Globe' | 'Mail';
}

export const MAIN_LINKS: HubLink[] = [
  {
    id: 'app',
    tag: 'ROTA // 01',
    title: 'Acessar Aplicação',
    subtitle: 'Conheça a plataforma oficial do PassaAqui e explore a cidade através de rotas e recompensas.',
    url: 'https://passaaqui-landing-page.vercel.app/',
    iconName: 'Smartphone',
    variant: 'primary',
    badge: 'Ambiente Oficial',
    metadata: 'Plataforma Web & Mobile',
  },
  {
    id: 'docs',
    tag: 'DOCS // 02',
    title: 'Documentação',
    subtitle: 'Documentação do projeto, arquitetura técnica e especificações completas.',
    url: 'https://docs.google.com/document/d/1pxtQC2jKahn0xQbDmPAJbrHHfkWxcb-j/edit?usp=sharing&ouid=115748410185954532256&rtpof=true&sd=true',
    iconName: 'BookOpen',
    variant: 'surface',
    badge: 'Google Docs',
    metadata: 'Documento Técnico Oficial',
  },
  {
    id: 'presentation',
    tag: 'PITCH // 03',
    title: 'Apresentação',
    subtitle: 'Pitch deck visual, proposta de valor, impacto urbano e roadmap da iniciativa.',
    url: 'https://canva.link/5stwusbnma3ls1d',
    iconName: 'Presentation',
    variant: 'surface',
    badge: 'Canva Pitch',
    metadata: 'Slides & Proposta de Negócio',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/passaaqui',
    iconName: 'Instagram',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/PassaAqui',
    iconName: 'Github',
  },
  {
    label: 'Site Oficial',
    url: 'https://passaaqui-landing-page.vercel.app/',
    iconName: 'Globe',
  },
];
