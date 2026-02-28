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
        id: "quotidiano-0001",
        title: "Concreto",
        image: "/images/quotidiano/IMG_0909_web.jpg",
        alt: "Concreto",
        tags: ["Industrial", "Edifícios", "Concreto", "Estruturas", "Quotidiano"],
        description: "Perspetiva crua do quotidiano urbano, captado em perspetiva pessoal. Entre o movimento e a pausa, apenas o presente.",
        date: "13 Fev 2026",
        location: "Moreira de Cónegos, Portugal",
        camera: "iPhone 17 Pro",
        lens: "Leica Lux NOCTILUX-50mm f/1.2 ASPH",
        aperture: "f/1.2",
        shutterSpeed: "1/121s",
        iso: "80",
        aiGenerated: true,
    },
    {
        id: "animais-0992",
        title: "Bocejo Felino",
        image: "/images/animais/IMG_0992.jpg",
        alt: "Fotografia de um gato calico a bocejar amplamente, mostrando a boca aberta e os dentes. O gato está deitado numa manta cinzenta.",
        tags: ["animais", "quotidiano", "natureza", "arquitetura"],
        description: "A luz suave e natural realça a pelagem tricolor vibrante de um gato doméstico num momento de puro relaxamento. A atmosfera transmite a tranquilidade e o conforto do lar.",
        date: "17 Fev 2026",
        location: "Aves, Portugal",
        camera: "Apple iPhone 17 Pro",
        lens: "Apple iPhone 17 Pro back dual wide camera 6.765mm f/1.78",
        aperture: "f/1.7",
        shutterSpeed: "1/50s",
        iso: "200",
        focalLength: "7mm",
        aiGenerated: true,
    }
];
