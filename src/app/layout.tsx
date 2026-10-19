import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Header,Footer } from '@/components/layout'
import './globals.css'
const playfair=localFont({src:[{path:'../fonts/playfair-regular.ttf',weight:'400'},{path:'../fonts/playfair-bold.ttf',weight:'700'}],variable:'--font-serif',display:'swap'})
const inter=localFont({src:[{path:'../fonts/inter-regular.ttf',weight:'400'},{path:'../fonts/inter-bold.ttf',weight:'700'}],variable:'--font-sans',display:'swap'})
export const metadata:Metadata={title:{default:'LUXESTAY | Extraordinary Stays',template:'%s | LUXESTAY'},description:'Discover a curated collection of breathtaking villas, exclusive retreats, and unforgettable destinations. A luxury hospitality portfolio concept.',openGraph:{title:'LUXESTAY — Extraordinary Stays',description:'A curated world of exceptional escapes.',type:'website'}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${playfair.variable} ${inter.variable}`}><Header/><main>{children}</main><Footer/></body></html>}
