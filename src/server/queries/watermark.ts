

export interface WatermarkConfig {
  enabled: boolean;
  position: string;
  sizePercentage: number;
  opacity: number;
  logoUrl: string;
}

export const getWatermarkConfig = (): WatermarkConfig => {
  return {
  "enabled": true,
  "position": "center",
  "sizePercentage": 40,
  "opacity": 0.4,
  "logoUrl": "https://vesta-crm-prod.s3.us-east-1.amazonaws.com/accounts/129/branding/logo_transparent_1779233040947_yco_hT.png"
};
}