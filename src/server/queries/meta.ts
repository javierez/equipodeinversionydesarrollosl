import type { MetadataProps } from "../../lib/data";

// Using React cache to memoize the query
export const getMetadataProps = (): MetadataProps | null => {
  return {
  "modules": {
  "promotions": true
},
  "mainpage": {
  "title": "Guzmán del Pino Real Estate",
  "robots": {
  "index": 1,
  "follow": 1,
  "googleBot": {
  "index": 1,
  "follow": 1,
  "max-snippet": -1,
  "max-image-preview": "large"
}
},
  "twitter": {
  "card": "summary_large_image",
  "title": "",
  "images": [""],
  "description": ""
},
  "keywords": ["inmobiliaria", "Gijón", "Asturias", "pisos", "casas", "terrenos", "lujo", "rústicas", "real estate", "Guzmán del Pino"],
  "openGraph": {
  "type": "website",
  "title": "",
  "images": [{
  "alt": "",
  "url": "",
  "width": 1200,
  "height": 630
}],
  "locale": "es_ES",
  "siteName": "Guzmán del Pino Real Estate",
  "description": "Inmobiliaria en Gijón y Asturias. Venta, alquiler y valoración de inmuebles."
},
  "alternates": {
  "canonical": "/"
},
  "description": "Inmobiliaria en Gijón, Asturias. Venta y alquiler de pisos, casas, terrenos y propiedades de lujo desde 2015."
}
};
}