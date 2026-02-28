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
        title: "EXIF AI Generator",
        client: "Projeto Pessoal",
        description: "Ferramenta web para extração automática de metadados EXIF de fotografias, com integração da API Gemini para geração de títulos, descrições e tags otimizadas com IA. Inclui geocoding reverso automático para localização precisa.",
        tags: ["Astro", "TypeScript", "Gemini AI", "EXIF"],
        image: "/images/portfolio/exif-ai-preview.png",
    },
];
