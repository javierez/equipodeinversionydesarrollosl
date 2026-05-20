import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (): string[] => {
  return ["Gijón"];
}

// Using React cache to memoize the query
export const getHeroProps = (): HeroProps | null => {
  return {
  "title": "Permítenos hacer tu sueño realidad",
  "subtitle": "",
  "backgroundImage": "",
  "backgroundVideo": "https://vesta-crm-prod.s3.us-east-1.amazonaws.com/accounts/129/hero/background_1779233880778_TPc4fN.mp4",
  "backgroundType": "video",
  "findPropertyButton": "Encuentra tu casa",
  "contactButton": "Ponte en contacto"
};
}
