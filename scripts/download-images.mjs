import { readFileSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'

const source = readFileSync(new URL('../src/data/properties.ts', import.meta.url), 'utf8')
const ids = [...new Set(source.match(/photo-\d+-[a-z0-9]+/g) || [])]
await mkdir('public/images', { recursive: true })
const results = await Promise.all(ids.map(async id => {
  const response = await fetch(`https://images.unsplash.com/${id}?fit=crop&w=1800&q=82&fm=jpg`)
  if (!response.ok) throw new Error(`${id}: HTTP ${response.status}`)
  const buffer = Buffer.from(await response.arrayBuffer())
  await writeFile(`public/images/${id}.jpg`, buffer)
  return `${id}: ${Math.round(buffer.length / 1024)} KB`
}))
console.log(results.join('\n'))
