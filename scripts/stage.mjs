// Monta a pasta public/ que a Vercel publica.
// A raiz continua sendo a fonte de verdade (e é o que o GitHub Pages serve),
// então aqui só copiamos os arquivos que vão para produção.
import { cp, mkdir, rm } from 'node:fs/promises'

const OUT = 'public'
const FILES = ['index.html', 'assets']

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

for (const file of FILES) {
  await cp(file, `${OUT}/${file}`, { recursive: true })
}

console.log(`public/ montado: ${FILES.join(', ')}`)
