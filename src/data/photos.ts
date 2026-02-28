export interface PhotoInfo {
    id: string;
    title: string;
    image: string;
    alt: string;
    tags: string[];
    description?: string;
    date?: string;
    location?: string;
    camera?: string;
    lens?: string;
    aperture?: string;
    shutterSpeed?: string;
    iso?: string;
}

export const photos: PhotoInfo[] = [
    {
        id: "IMG-0909", title: "Concreto", image: "/images/IMG_0909_web.jpg", alt: "Concreto", tags: ["Industrial", "Edifícios", "Concreto", "Estruturas"],
        description: "Visão vertical.",
        date: "13 Fev 2026", location: "Moreira de Cónegos, Portugal", camera: "iPhone 17 Pro", lens: "Leica Lux NOCTILUX-50mm f/1.2 ASPH", aperture: "f/1.2", shutterSpeed: "1/121s", iso: "80"
    },
    {
        id: "estrutura-2", title: "Estrutura 2", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", alt: "Estrutura 2", tags: ["Edifícios", "Urbano"],
        description: "Linhas modernas a cruzar-se no coração da cidade, num contraste perfeito entre vidro e aço.",
        date: "05 Fev 2024", location: "Lisboa, Portugal", camera: "Fujifilm X-T4", lens: "XF 16-55mm f/2.8 R LM WR", aperture: "f/5.6", shutterSpeed: "1/500s", iso: "200"
    },
    {
        id: "detalhe-1", title: "Detalhe 1", image: "https://images.unsplash.com/photo-1518558997970-4ddd22eb3e31?q=80&w=800&auto=format&fit=crop", alt: "Detalhe 1", tags: ["Texturas", "Outros"],
        description: "Macrofotografia da textura ferrosa exposta aos elementos, registando a passagem do tempo.",
        date: "22 Jan 2024", location: "Fábrica Nova", camera: "Sony A7III", lens: "Sony FE 90mm f/2.8 Macro G OSS", aperture: "f/4.0", shutterSpeed: "1/100s", iso: "400"
    },
    {
        id: "detalhe-2", title: "Detalhe 2", image: "https://images.unsplash.com/photo-1533577116850-9cb66cdadbc3?q=80&w=800&auto=format&fit=crop", alt: "Detalhe 2", tags: ["Texturas", "Industrial"],
        description: "Soldas e encaixes metálicos captados no chão da fábrica antes de seguirem para a montagem final em obra.",
        date: "10 Jan 2024", location: "Oficina Garsteel", camera: "Sony A7III", lens: "Sony FE 50mm f/1.8", aperture: "f/2.8", shutterSpeed: "1/60s", iso: "800"
    },
    {
        id: "perspetiva-1", title: "Perspetiva 1", image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=800&auto=format&fit=crop", alt: "Perspetiva 1", tags: ["Urbano", "Paisagem"],
        description: "Ângulo ousado sobre a metrópole sob uma luz rasante ao amanhecer.",
        date: "02 Dez 2023", location: "Porto, Portugal", camera: "Fujifilm X-T4", lens: "XF 10-24mm f/4 R OIS WR", aperture: "f/11", shutterSpeed: "1/125s", iso: "160"
    },
    {
        id: "industrial-1", title: "Industrial 1", image: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=800&auto=format&fit=crop", alt: "Industrial 1", tags: ["Industrial"],
        description: "Silo de armazenamento rodeado de passadiços e infraestruturas técnicas complexas.",
        date: "15 Nov 2023", location: "Zona Industrial", camera: "Sony A7III", lens: "Sony FE 24-70mm f/2.8 GM", aperture: "f/5.6", shutterSpeed: "1/320s", iso: "100"
    },
    {
        id: "urbano-1", title: "Urbano 1", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop", alt: "Urbano 1", tags: ["Urbano", "Edifícios"],
        description: "O dinamismo da vida urbana capturado através de fachadas antigas lado a lado com novas infraestruturas.",
        date: "10 Nov 2023", location: "Baixa do Porto", camera: "Fujifilm X-T4", lens: "XF 23mm f/2 R WR", aperture: "f/8.0", shutterSpeed: "1/250s", iso: "200"
    },
    {
        id: "urbano-2", title: "Urbano 2", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop", alt: "Urbano 2", tags: ["Urbano", "Paisagem"],
        description: "A geometria urbana numa tarde chuvosa, criando reflexos profundos no alcatrão.",
        date: "28 Out 2023", location: "Vila Nova de Gaia", camera: "Sony A7III", lens: "Sony FE 85mm f/1.8", aperture: "f/1.8", shutterSpeed: "1/1000s", iso: "100"
    },
    {
        id: "minimal", title: "Minimal", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop", alt: "Minimal", tags: ["Outros", "Texturas"],
        description: "A beleza crua e minimalista na interseção de betão armado e sombra natural.",
        date: "14 Set 2023", location: "Casa da Música", camera: "Fujifilm X-T4", lens: "XF 35mm f/1.4 R", aperture: "f/2.8", shutterSpeed: "1/500s", iso: "320"
    },
    {
        id: "metal", title: "Metal", image: "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=800&auto=format&fit=crop", alt: "Metal", tags: ["Texturas", "Industrial"],
        description: "A composição pesada e fria do metal no seu estado mais robusto e durável.",
        date: "05 Set 2023", location: "Oficina", camera: "Sony A7III", lens: "Sony FE 90mm f/2.8 Macro G OSS", aperture: "f/8.0", shutterSpeed: "1/200s", iso: "100"
    },
    {
        id: "aco", title: "Aço", image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop", alt: "Aço", tags: ["Industrial", "Edifícios"],
        description: "O esqueleto principal de um grande complexo estrutural erguendo-se contra o céu.",
        date: "22 Ago 2023", location: "Construção de Ponte", camera: "Fujifilm X-T4", lens: "XF 50-140mm f/2.8 R LM OIS WR", aperture: "f/4.0", shutterSpeed: "1/800s", iso: "400"
    },
    {
        id: "construcao-1", title: "Construção 1", image: "https://images.unsplash.com/photo-1541888081198-5c423ba09b78?q=80&w=800&auto=format&fit=crop", alt: "Construção 1", tags: ["Edifícios", "Industrial"],
        description: "Vista de frente da empreitada a ganhar forma após as semanas críticas de montagem.",
        date: "15 Ago 2023", location: "Obra XYZ", camera: "Sony A7III", lens: "Sony FE 24-70mm f/2.8 GM", aperture: "f/11", shutterSpeed: "1/125s", iso: "100"
    },
    {
        id: "construcao-2", title: "Construção 2", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop", alt: "Construção 2", tags: ["Edifícios", "Urbano"],
        description: "Trabalhos complexos de içamento e posicionamento de treliças gigantes em ambiente denso.",
        date: "10 Jul 2023", location: "Centro Empresarial", camera: "Fujifilm X-T4", lens: "XF 16-55mm f/2.8 R LM WR", aperture: "f/5.6", shutterSpeed: "1/250s", iso: "160"
    },
    {
        id: "rua-porto", title: "Rua Porto", image: "https://images.unsplash.com/photo-1555881400-7c22e4d02693?q=80&w=800&auto=format&fit=crop", alt: "Rua Porto", tags: ["Urbano", "Pessoas"],
        description: "O ambiente autêntico das estreitas ladeiras portuenses embaladas pela luz dura do sol.",
        date: "04 Jul 2023", location: "Ribeira, Porto", camera: "Sony A7III", lens: "Sony FE 35mm f/1.4 GM", aperture: "f/1.4", shutterSpeed: "1/2000s", iso: "200"
    },
    {
        id: "textura", title: "Textura", image: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?q=80&w=800&auto=format&fit=crop", alt: "Textura", tags: ["Texturas", "Outros"],
        description: "Um close-up isolando imperfeições naturais nas fachadas de pedra da cidade invicta.",
        date: "20 Jun 2023", location: "Fábrica Antiga", camera: "Sony A7III", lens: "Sony FE 90mm f/2.8 Macro G OSS", aperture: "f/5.6", shutterSpeed: "1/100s", iso: "400"
    },
    {
        id: "obra", title: "Obra", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop", alt: "Obra", tags: ["Industrial", "Animais"],
        description: "O puro frenesim das fundações a serem completadas, suportando a futura superestrutura metálica.",
        date: "15 Jun 2023", location: "Terreno em Construção", camera: "Fujifilm X-T4", lens: "XF 16-55mm f/2.8 R LM WR", aperture: "f/8.0", shutterSpeed: "1/400s", iso: "200"
    }
];
