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
    aiGenerated?: boolean;
}

export const photos: PhotoInfo[] = [
    {
        id: "quotidiano-0001", title: "Concreto", image: "/images/quotidiano/IMG_0909_web.jpg", alt: "Concreto", tags: ["Industrial", "Edifícios", "Concreto", "Estruturas", "Quotidiano"],
        description: "Perspetiva crua do quotidiano urbano, captado em perspetiva pessoal. Entre o movimento e a pausa, apenas o presente.",
        date: "13 Fev 2026", location: "Moreira de Cónegos, Portugal", camera: "iPhone 17 Pro", lens: "Leica Lux NOCTILUX-50mm f/1.2 ASPH", aperture: "f/1.2", shutterSpeed: "1/121s", iso: "80"
    },
    {
        id: "animais-0992", title: "Expressão pura", image: "/images/animais/IMG_0992.jpg", alt: "Gato tricolor a bocejar, fotografado em primeiro plano sobre uma cama.", tags: ["Animais", "Gato", "Quotidiano"],
        description: "Um momento natural, captado sem preparação — apenas expressão pura.",
        date: "17 Fev 2026", location: "Aves, Portugal", camera: "iPhone 17 Pro", lens: "Leica Lux I-SOLARIS 26mm f/1.5", aperture: "f/5.6", shutterSpeed: "1/47s", iso: "200"
    }
];
