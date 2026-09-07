# Vinícius Dias — Landing Page

Landing page pessoal para captação de clientes de criação de sites, com foco em
posicionamento digital de alto padrão para empresas.

**Site no ar:** https://vinidias0808.github.io

## Sobre

Página única e estática. Estética editorial minimalista: tipografia serifada de
display, grade rígida, divisões por linhas de 1px e paleta neutra sólida.

O CSS é compilado com o Tailwind CLI e servido já minificado — sem CDN, sem
compilação em runtime no navegador do visitante.

| Arquivo               | Tamanho | Gzip    |
| --------------------- | ------- | ------- |
| `index.html`          | ~26 KB  | ~6,6 KB |
| `assets/styles.css`   | ~17 KB  | ~4,3 KB |

## Stack

- HTML semântico, sem framework de UI
- Tailwind CSS 3 compilado via CLI (só as classes efetivamente usadas)
- Google Fonts — Instrument Serif (display) + Inter (texto)
- IntersectionObserver para o reveal on scroll, com `prefers-reduced-motion` respeitado

## Estrutura do projeto

```
index.html            página (única fonte de verdade das classes)
src/input.css         diretivas do Tailwind + CSS autoral
assets/styles.css     CSS compilado — versionado, é o que o Pages serve
tailwind.config.js    tema (fontes, cores bone/ink)
scripts/stage.mjs     monta public/ para a Vercel
vercel.json           build e diretório de saída da Vercel
```

## Publicação

O site é servido **da raiz do repositório**, e não de uma pasta `public/`.
Isso é exigência do GitHub Pages e é o motivo de `assets/styles.css` ser
versionado.

A Vercel, por outro lado, roda o build e depois procura uma pasta de saída.
Sem isso ela falha com:

> No Output Directory named "public" found after the Build completed.

Por isso o `vercel.json` aponta para `npm run vercel-build`, que compila o CSS
e copia `index.html` + `assets/` para `public/`. A pasta é descartável e está
no `.gitignore` — a raiz continua sendo a fonte de verdade para os dois hosts.

| Host          | Publica de | Comando                |
| ------------- | ---------- | ---------------------- |
| GitHub Pages  | raiz       | nenhum (serve estático) |
| Vercel        | `public/`  | `npm run vercel-build` |

## Desenvolvimento

Instale as dependências uma vez:

```bash
npm install
```

Durante a edição, deixe o Tailwind observando as mudanças:

```bash
npm run dev
```

Antes de publicar, gere o CSS minificado:

```bash
npm run build
```

`assets/styles.css` é versionado de propósito: o GitHub Pages serve arquivos
estáticos e não roda o build. **Toda alteração de classe no HTML exige rodar
`npm run build` antes do commit**, senão o site publicado fica com o CSS antigo.

Para visualizar localmente:

```bash
python3 -m http.server 4321
```

## Estrutura da página

1. Header fixo com status de disponibilidade
2. Hero — proposta de valor e CTAs
3. Quem faz o seu site — diferencial técnico
4. Entregáveis — quatro itens em lista editorial
5. Estudos de conceito — três direções visuais por nicho, construídas em HTML/CSS
6. Processo — quatro etapas
7. Chamada final e rodapé

## Próximos passos

- [x] Compilar o Tailwind via CLI e remover o CDN
- [ ] Apontar um domínio próprio (`CNAME` na raiz + DNS)
- [ ] Configurar Google Analytics e Search Console
- [ ] Medir com PageSpeed Insights após publicar no domínio final
- [ ] Avaliar auto-hospedar as fontes para eliminar a dependência do Google Fonts

## Contato

Vinícius Silva Dias — [WhatsApp (11) 99287-4839](https://wa.me/5511992874839)
