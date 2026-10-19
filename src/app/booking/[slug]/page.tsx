import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { properties } from '@/data/properties'
import { BookingClient } from './booking-client'
export const metadata:Metadata={title:'Demo Reservation'}
export const dynamicParams=false
export function generateStaticParams(){return properties.map(p=>({slug:p.slug}))}
export default async function BookingPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const property=properties.find(p=>p.slug===slug);if(!property)notFound();return <BookingClient property={property}/>}
