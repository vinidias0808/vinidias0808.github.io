# Vinícius Dias — Landing Page

Landing page pessoal para captação de clientes de criação de sites, com foco em
posicionamento digital de alto padrão para empresas.

**Site no ar:** https://vinidias0808.github.io

## Sobre

Página única, estática, sem dependência de build. Estética editorial minimalista:
tipografia serifada de display, grade rígida, divisões por linhas de 1px e paleta
neutra sólida.

## Stack

- HTML semântico em arquivo único (`index.html`)
- Tailwind CSS via CDN
- Google Fonts — Instrument Serif (display) + Inter (texto)
- IntersectionObserver para o reveal on scroll, com `prefers-reduced-motion` respeitado

## Estrutura da página

1. Header fixo com status de disponibilidade
2. Hero — proposta de valor e CTAs
3. Quem faz o seu site — diferencial técnico
4. Entregáveis — quatro itens em lista editorial
5. Estudos de conceito — três direções visuais por nicho, construídas em HTML/CSS
6. Processo — quatro etapas
7. Chamada final e rodapé

## Rodando localmente

Basta abrir o arquivo no navegador:

```bash
open index.html
```

## Próximos passos

- [ ] Compilar o Tailwind via CLI e servir apenas o CSS utilizado (o CDN compila em runtime e custa alguns décimos de segundo no primeiro carregamento)
- [ ] Apontar um domínio próprio
- [ ] Configurar Google Analytics e Search Console
- [ ] Medir com PageSpeed Insights após publicar no domínio final

## Contato

Vinícius Silva Dias — [WhatsApp (11) 99287-4839](https://wa.me/5511992874839)
