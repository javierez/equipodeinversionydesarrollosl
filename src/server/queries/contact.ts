

export type ContactProps = {
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
    };
    phoneNumbers: {
      main: string;
      sales: string;
    };
    emailAddresses: {
      info: string;
      sales: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (): ContactProps | null => {
  return {
  "map": true,
  "mail": true,
  "phone": true,
  "title": "Contáctanos",
  "address": true,
  "offices": [{
  "id": "gdp-gijon-corrida-37",
  "name": "Guzmán del Pino Real Estate",
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Guzm%C3%A1n+del+Pino+Real+Estate%2C+Calle+Corrida+37%2C+Gij%C3%B3n",
  "address": {
  "city": "Gijón",
  "state": "Asturias",
  "street": "C/ Corrida 37, 4D",
  "country": "España"
},
  "isDefault": true,
  "phoneNumbers": {
  "main": "665887870",
  "sales": "613334376"
},
  "scheduleInfo": {
  "sunday": "Domingos: cerrado",
  "saturday": "Sábados: con cita previa",
  "weekdays": "Lunes a Viernes: 10:00 - 14:00 y 16:00 - 20:00"
},
  "emailAddresses": {
  "info": "gerencia@inversionydesarrollo.es",
  "sales": ""
}
}],
  "schedule": true,
  "subtitle": "Respuesta garantizada en menos de 24 horas",
  "heroImage": "https://vesta-crm-prod.s3.us-east-1.amazonaws.com/accounts/129/website/contacto/hero.png",
  "heroTitle": "Hablemos de tu próximo proyecto",
  "messageForm": true,
  "heroSubtitle": "Te respondemos en menos de 24 horas, sin compromiso."
};
}

