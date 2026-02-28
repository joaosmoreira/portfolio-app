# Portfolio — João Moreira

Website de portfolio pessoal, desenvolvido de raiz com [Astro](https://astro.build) e publicado em [Vercel](https://vercel.com). O projeto documenta a trajetória profissional e pessoal, com foco na fotografia, desenvolvimento web e preparação de obra em estruturas metálicas.

---

## ✨ Funcionalidades

### Páginas
- **Início** — Apresentação rápida e uma seleção de fotografias em destaque
- **Sobre** — Bio pessoal, hobbies, formação e competências
- **Fotografia** — Galeria de fotografia com página de detalhe para cada imagem (metadados técnicos, localização, câmara, lente, etc.)
- **Portfolio** — Projetos de desenvolvimento web e engenharia
- **Contactos** — Informação de contacto direto

### Gerador de Metadados com IA (`/gerador`)
Uma ferramenta interna para geração automática de metadados de fotografias:
- **Drag & drop** de imagens com extração imediata de dados EXIF (câmara, lente, abertura, velocidade, ISO, data, focal length)
- Limpeza automática dos campos: remove prefixos redundantes do fabricante (ex: "Apple iPhone 17 Pro" → "iPhone 17 Pro") e extrai a lente no formato compacto (ex: "6.765mm f/1.78")
- **Geocoding reverso** automático via [BigDataCloud API](https://www.bigdatacloud.com) — converte coordenadas GPS em localização precisas ao nível de freguesia (ex: "Vila das Aves, Portugal")
- **Geração com IA** usando a Gemini API (Google):
  - Título, descrição poética e alt text da imagem
  - Seleção de categoria e 4 tags estritamente controladas (`animais`, `pessoas`, `desporto`, `quotidiano`, `arquitetura`, `betao`, `natureza`, `monocromático`)
  - ID automático com base na categoria e número do ficheiro original (ex: `pessoas-1212`)
  - Caminho da imagem gerado automaticamente (ex: `/images/pessoas/IMG_1212.jpg`)
  - Localização em texto (cidade + país)
- **Geração de TypeScript** — exporta um objeto `PhotoInfo` pronto a copiar para `photos.ts`, com o campo `aiGenerated: true` quando gerado via IA
- API Key do Gemini guardada em `localStorage` do browser (sem backend)

---

## 🗂 Estrutura do Projeto

```
/
├── public/
│   └── images/
│       ├── animais/        # Fotografias de animais
│       ├── quotidiano/     # Fotografias do quotidiano
│       ├── pessoas/        # Fotografias de pessoas
│       ├── portfolio/      # Imagens dos projetos do portfolio
│       └── ...
├── src/
│   ├── components/         # Componentes reutilizáveis (PhotoGrid, ProjectCard, etc.)
│   ├── data/
│   │   ├── config.ts       # Configuração global (nome, bio, EmailJS)
│   │   ├── photos.ts       # Dados das fotografias (interface PhotoInfo)
│   │   └── projects.ts     # Dados dos projetos do portfolio (interface ProjectInfo)
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal com navegação e footer
│   └── pages/
│       ├── index.astro
│       ├── sobre.astro
│       ├── fotografia.astro
│       ├── fotografia/
│       │   └── [id].astro  # Página de detalhe de cada fotografia
│       ├── portfolio.astro
│       ├── contactos.astro
│       └── gerador.astro   # Ferramenta de geração de metadados com IA
└── package.json
```

---

## 🛠 Tecnologias

| Tecnologia | Função |
|---|---|
| [Astro](https://astro.build) | Framework principal (SSG) |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática dos dados |
| [Tailwind CSS](https://tailwindcss.com) | Estilização |
| [Lucide React](https://lucide.dev) | Ícones |
| [exifr](https://github.com/MikeKovarik/exifr) | Extração de dados EXIF no browser |
| [BigDataCloud API](https://www.bigdatacloud.com) | Geocoding reverso (GPS → Cidade/País) |
| [Google Gemini API](https://ai.google.dev) | Geração de texto e metadados com IA |
| [Vercel](https://vercel.com) | Deploy e hosting |
| [Vercel Analytics](https://vercel.com/analytics) | Análise de tráfego |
| [Vercel Speed Insights](https://vercel.com/docs/speed-insights) | Monitorização de performance |

---

## 🚀 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## 📸 Adicionar Fotografias

1. Coloca a imagem em `public/images/[categoria]/`
2. Abre o Gerador em `/gerador`, arrasta a foto e clica em **Gerar com AI**
3. Copia o TypeScript gerado e cola em `src/data/photos.ts`

O campo `aiGenerated: true` é incluído automaticamente quando a geração é feita pela ferramenta.

---

## 🌍 Deploy

O site está publicado na Vercel e ligado ao repositório GitHub. Qualquer push para a branch `main` desencadeia um novo deploy automático.

---

## 📄 Licença

Projeto pessoal. Todos os direitos reservados.
