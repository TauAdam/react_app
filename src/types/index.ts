export enum ROUTES {
  MAIN_PAGE = '/',
  ABOUT_PAGE = '/about',
  FORMS_PAGE = '/forms',
  NOT_FOUND_PAGE = '*',
}
export interface ICard {
  image: string;
  title: string;
  id: number;
  price: number;
  amount: number;
}

export interface FormFields {
  name?: string;
  birthday?: string;
  country?: string;
  consent?: boolean;
  gender?: 'male' | 'female';
  file?: string;
}
export interface FormErrors {
  name?: string;
  birthday?: string;
  country?: string;
  consent?: string;
  gender?: string;
  file?: string;
}

export enum ApiEndpoint {
  characters = 'https://rickandmortyapi.com/api/character',
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
}
