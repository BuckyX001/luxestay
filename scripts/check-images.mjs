import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/data/properties.ts', import.meta.url), 'utf8')
const ids = [...new Set(source.match(/photo-\d+-[a-z0-9]+/g) || [])]
const results = await Promise.all(ids.map(async id => {
  try {
    const response = await fetch(`https://images.unsplash.com/${id}?w=32&q=30`, { method: 'HEAD', signal: AbortSignal.timeout(20000) })
    return { id, status: response.status }
  } catch (error) { return { id, status: String(error) } }
}))
console.log(`${results.filter(r => r.status === 200).length}/${results.length} images returned HTTP 200`)
for (const result of results.filter(r => r.status !== 200)) console.log(result)
if (results.some(r => r.status !== 200)) process.exitCode = 1
