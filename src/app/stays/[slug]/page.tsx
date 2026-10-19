import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { properties } from '@/data/properties'
import { PropertyDetail } from './property-detail'
export function generateStaticParams(){return properties.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=properties.find(x=>x.slug===slug);return {title:p?.name||'Stay not found',description:p?.description}}
export default async function PropertyPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const property=properties.find(p=>p.slug===slug);if(!property)notFound();return <PropertyDetail property={property}/>}
