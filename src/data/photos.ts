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
    focalLength?: string;
    aiGenerated?: boolean;
}

export const photos: PhotoInfo[] = [
    {
        id: "quotidiano-0909",
        title: "Passos no Betão",
        image: "/images/quotidiano/IMG_0909_web.jpg",
        alt: "Vista de cima dos pés de uma pessoa em sapatilhas pretas sobre um chão de betão rugoso, em preto e branco.",
        tags: ["quotidiano", "betao", "monocromático"],
        description: "A luz suave destaca a textura irregular do chão de betão, criando um contraste subtil entre as sapatilhas e o pavimento. Uma perspetiva íntima que capta a simplicidade da jornada quotidiana, realçada pela ausência de cor.",
        date: "13 Fev 2026",
        location: "Moreira de Cónegos, Portugal",
        camera: "iPhone 17 Pro",
        lens: "6.765mm f/1.78",
        aperture: "f/1.7",
        shutterSpeed: "1/125s",
        iso: "80",
        focalLength: "7mm",
        aiGenerated: true,
    },
    {
        id: "quotidiano-0931",
        title: "Rua Silenciosa",
        image: "/images/quotidiano/IMG_0931.jpg",
        alt: "Fotografia a preto e branco de uma rua de calçada vazia à noite, iluminada por candeeiros.",
        tags: ["quotidiano", "monocromático"],
        description: "A luz dos candeeiros desenha um caminho de pedras na quietude da noite, revelando a textura da rua vazia. Uma atmosfera serena e misteriosa envolve a paisagem urbana.",
        date: "13 Fev 2026",
        location: "Aves, Portugal",
        camera: "iPhone 17 Pro",
        lens: "6.765mm f/1.78",
        aperture: "f/1.7",
        shutterSpeed: "1/15s",
        iso: "1250",
        focalLength: "7mm",
        aiGenerated: true,
    },
    {
        id: "animais-0992",
        title: "Bocejo Matinal",
        image: "/images/animais/IMG_0992.jpg",
        alt: "Fotografia de um gato calico a bocejar, deitado numa manta cinzenta.",
        tags: ["animais", "quotidiano", "natureza", "arquitetura"],
        description: "A luz suave do dia realça a pelagem tricolor de um felino em pleno bocejo, capturando a essência da tranquilidade matinal. Cada bigode se estende num instante de pura expressividade e conforto.",
        date: "17 Fev 2026",
        location: "Aves, Portugal",
        camera: "iPhone 17 Pro",
        lens: "6.765mm f/1.78",
        aperture: "f/1.7",
        shutterSpeed: "1/50s",
        iso: "200",
        focalLength: "7mm",
        aiGenerated: true,
    },
    {
        id: "pessoas-0945",
        title: "Sorriso Genuíno",
        image: "/images/pessoas/IMG_0945.jpg",
        alt: "Uma mulher com óculos e gola alta preta, a sorrir, sentada numa mesa de café.",
        tags: ["pessoas", "quotidiano", "monocromático"],
        description: "A luz suave realça a alegria espontânea de um momento partilhado. Um sorriso cativante ilumina a cena, capturando a essência do quotidiano.",
        date: "15 Fev 2026",
        location: "Aves, Portugal",
        camera: "iPhone 17 Pro",
        lens: "6.765mm f/1.78",
        aperture: "f/1.7",
        shutterSpeed: "1/50s",
        iso: "500",
        focalLength: "7mm",
        aiGenerated: true,
    },
    {
        id: "pessoas-0932",
        title: "Momento Social",
        image: "/images/pessoas/IMG_0932.jpg",
        alt: "Pessoas sentadas numa mesa de bar em preto e branco, conversando e bebendo.",
        tags: ["pessoas", "quotidiano", "arquitetura", "monocromático"],
        description: "A luz suave e o grão subtil capturam a intimidade de uma noite de convívio, onde as conversas fluem num ambiente acolhedor. Cada silhueta emerge da penumbra, revelando a essência do encontro humano.",
        date: "14 Fev 2026",
        location: "Aves, Portugal",
        camera: "iPhone 17 Pro",
        lens: "6.765mm f/1.78",
        aperture: "f/1.7",
        shutterSpeed: "1/60s",
        iso: "800",
        focalLength: "7mm",
        aiGenerated: true,
    },
];
