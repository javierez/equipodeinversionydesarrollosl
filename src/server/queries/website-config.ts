

export type LinkItem = {
  title: string;
  url: string;
};

export type LinkCategory = {
  name: string;
  links: LinkItem[];
};

export const getLinksProps = (): LinkCategory[] => {
  return [{
  "name": "Organismos Nacionales",
  "links": [{
  "title": "Catastro",
  "url": "https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCBusqueda.aspx"
}, {
  "title": "INE (Instituto Nacional de Estadística)",
  "url": "https://www.ine.es/"
}, {
  "title": "Calculadora IPC",
  "url": "https://www.ine.es/calcula/?lang=es"
}, {
  "title": "DGT (Dirección General de Tráfico)",
  "url": "https://www.dgt.es/"
}]
}, {
  "name": "Castilla y León",
  "links": [{
  "title": "Boletín Oficial Castilla y León",
  "url": "https://bocyl.jcyl.es/"
}, {
  "title": "Valoración Urbana (Castilla y León)",
  "url": "https://servicios4.jcyl.es/ora_iguiaexp/pac_ubicacion.proc_1"
}, {
  "title": "Valoración Rústica (Castilla y León)",
  "url": "https://servicios4.jcyl.es/ora_iguiaexp/iguia.rus_ubica_rustica"
}]
}, {
  "name": "León",
  "links": [{
  "title": "Ayuntamiento de León",
  "url": "https://www.aytoleon.es/es/Paginas/home.aspx"
}, {
  "title": "Diputación de León",
  "url": "https://www.dipuleon.es/"
}, {
  "title": "Diario de León",
  "url": "https://www.diariodeleon.es/"
}, {
  "title": "Leonoticias",
  "url": "https://www.leonoticias.com/"
}, {
  "title": "La Nueva Crónica de León",
  "url": "https://www.lanuevacronica.com/"
}, {
  "title": "RTVCYL León",
  "url": "https://www.rtvcyl.es/Leon"
}]
}];
}

export type ModulesConfig = {
  promotionsEnabled: boolean;
};

export const getModulesConfig = (): ModulesConfig => {
  return {
  "promotionsEnabled": true
};
}

export type PropertiesConfig = {
  title: string;
  subtitle: string;
  buttonText: string;
  itemsPerPage?: number;
  defaultSort?: string;
  showDescription?: boolean;
};

export const getPropertiesConfig = (): PropertiesConfig => {
  return {
  "title": "Nuestras propiedades",
  "subtitle": "Encuentra tu opción ideal",
  "buttonText": "Ver Todas"
};
}

export type SEOConfig = {
  title: string;
  description: string;
  name?: string;
  image?: string;
  url?: string;
  telephone?: string;
  email?: string;
  keywords?: string[] | string; // Support both array and string formats
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

export const getSEOConfig = (): SEOConfig => {
  return {
  "title": "Guzmán del Pino Real Estate · Inmobiliaria en Gijón, Asturias",
  "description": "Inmobiliaria en Gijón especializada en venta y alquiler de viviendas, terrenos, propiedades de lujo y rústicas en Asturias y toda España. Servicio personalizado desde 2015.",
  "keywords": "inmobiliaria gijón, inmobiliaria asturias, pisos en venta gijón, casas asturias, terrenos asturias, propiedades de lujo, fincas rústicas, guzmán del pino, real estate gijón, valoración inmuebles asturias"
};
}
