export interface ServicesConfig {
  BASE_URL: string;
}

export const servicesConfig: ServicesConfig = {
  BASE_URL: process.env.BASE_URL || 'https://faceapi.regulaforensics.com',
};
