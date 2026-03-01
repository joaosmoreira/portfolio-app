export interface ProjectInfo {
    title: string;
    client?: string;
    description: string;
    tags: string[];
    image: string;
    url?: string;
}

export const projects: ProjectInfo[] = [
    {
        title: "FIRE Risk Engine",
        client: "Financial Intelligence",
        description: "Sistema de análise de risco ultra-profundo com processamento de contexto social governado por IA e feed Yahoo Finance em tempo real.",
        tags: ["Astro", "TypeScript", "LLM", "Yahoo Finance", "Lightweight Charts"],
        image: "/images/portfolio/fire-preview.png",
        url: "/fire"
    },
    {
        title: "EXIF AI Generator",
        client: "Projeto Pessoal",
        description: "Ferramenta web para extração automática de metadados EXIF de fotografias, com integração da API Gemini para geração de títulos, descrições e tags otimizadas com IA. Inclui geocoding reverso automático para localização precisa.",
        tags: ["Astro", "TypeScript", "Gemini AI", "EXIF"],
        image: "/images/portfolio/exif-ai-preview.png",
    },
];
