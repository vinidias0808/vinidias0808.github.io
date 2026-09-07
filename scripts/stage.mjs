// Monta a pasta public/ que a Vercel publica.
// A raiz continua sendo a fonte de verdade (e é o que o GitHub Pages serve),
// então aqui só copiamos os arquivos que vão para produção.
import { cp, mkdir, rm, access } from 'node:fs/promises'

const OUT = 'public'
const FILES = ['index.html', 'assets']

for (const file of FILES) {
  try {
    await access(file)
  } catch {
    console.error(
      `\nERRO: "${file}" nao existe.\n` +
      `Rode "npm run build" antes de montar a pasta ${OUT}/.\n`
    )
    process.exit(1)
  }
}

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

for (const file of FILES) {
  await cp(file, `${OUT}/${file}`, { recursive: true })
}

console.log(`${OUT}/ montado: ${FILES.join(', ')}`)
