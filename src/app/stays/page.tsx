import type { Metadata } from 'next'
import { ExploreClient } from './stays-client'
export const metadata:Metadata={title:'Explore Stays',description:'Browse curated luxury villas, resorts, suites, and chalets.'}
export default async function StaysPage({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const raw=await searchParams;const query=new URLSearchParams();for(const key of ['destination','checkIn','checkOut','guests']){const value=raw[key];if(typeof value==='string')query.set(key,value)}return <ExploreClient queryString={query.toString()}/>}
