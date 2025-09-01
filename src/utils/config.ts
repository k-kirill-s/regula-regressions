export interface Config {
  BASE_URL: string;
}

export const config: Config = {
  BASE_URL: process.env.BASE_URL || 'https://faceapi.regulaforensics.com',
};
