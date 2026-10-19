import type { Metadata } from 'next'
import { ContactClient } from './contact-client'
export const metadata:Metadata={title:'Contact',description:'Explore the LUXESTAY portfolio concept and its demo contact experience.'}
export default function ContactPage(){return <ContactClient/>}
