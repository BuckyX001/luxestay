import Link from 'next/link'
export default function NotFound(){return <section className="not-found container"><span className="eyebrow">PAGE NOT FOUND</span><h1>This path leads <em>elsewhere.</em></h1><p>Let’s guide you back to somewhere extraordinary.</p><Link className="button button-dark" href="/">Return home</Link></section>}
