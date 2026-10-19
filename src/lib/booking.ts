import type { Reservation } from '@/types'
export const money = (amount:number) => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(amount)
export function nightsBetween(a:string,b:string) { const valid=(value:string)=>/^\d{4}-\d{2}-\d{2}$/.test(value)&&!Number.isNaN(Date.parse(`${value}T12:00:00Z`))&&new Date(`${value}T12:00:00Z`).toISOString().slice(0,10)===value; if(!valid(a)||!valid(b))return 0; return Math.round((Date.parse(`${b}T12:00:00Z`)-Date.parse(`${a}T12:00:00Z`))/86400000) }
export function todayLocal() { const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` }
export function nextDate(value:string) { const date=new Date(`${value}T12:00:00Z`); return Number.isNaN(date.getTime())?todayLocal():new Date(date.getTime()+86400000).toISOString().slice(0,10) }
export function validEmail(email:string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }
const reservationsKey='luxestay-demo-reservations'
export function saveReservation(reservation:Reservation) { const current=readReservations(); localStorage.setItem(reservationsKey,JSON.stringify([reservation,...current])) }
export function readReservations():Reservation[] { try { const stored:unknown=JSON.parse(localStorage.getItem(reservationsKey)||'[]'); return Array.isArray(stored)?stored as Reservation[]:[] } catch { return [] } }
