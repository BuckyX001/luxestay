export type Destination = 'Bali' | 'Maldives' | 'Santorini' | 'Dubai' | 'Swiss Alps' | 'Phuket'
export type PropertyType = 'Villa' | 'Resort' | 'Suite' | 'Chalet'
export type Property = { slug:string; name:string; destination:Destination; location:string; type:PropertyType; price:number; rating:number; guests:number; bedrooms:number; bathrooms:number; image:string; gallery:string[]; description:string; details:string; amenities:string[]; highlights:string[]; rules:string[] }
export type Reservation = { id:string; propertySlug:string; checkIn:string; checkOut:string; guests:number; nights:number; total:number; name:string; email:string; createdAt:string }
