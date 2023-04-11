export interface IProduct {
  id: string;
  image?: string;
  big?: string;
  type?: string;
  title: string;
  text: string;
  price: string;
  likes?: number;
  created?: string;
  isAvailable?: boolean;
  isSale?: boolean;
}

export interface IInput {
  id: string;
  title: string;
  refer: React.RefObject<HTMLInputElement>;
  error: string;
  isValid: boolean;
  type?: 'date' | 'file' | 'text';
}
export interface IInputProps {
  title: string;
  name: string;
  maxLength?: number;
  minLength?: number;
  regexp?: RegExp;
}

export interface ISelect {
  id: string;
  title: string;
  refer: React.RefObject<HTMLSelectElement>;
  error: string;
  isValid: boolean;
  options?: string[];
}

export interface ITextarea {
  id: string;
  title: string;
  refer: React.RefObject<HTMLTextAreaElement>;
  error: string;
  isValid: boolean;
}

export interface IForm {
  id: string;
  file: FileList;
  image?: string;
  type?: string;
  title: string;
  text: string;
  price: string;
  likes?: number;
  created: string;
  isAvailable: boolean;
  isSale?: boolean;
}

interface IUrls {
  regular: string;
  small: string;
}
interface IUser {
  name: string;
}
export interface IUnsplashItem {
  id: string;
  urls: IUrls;
  user: IUser;
  description?: string;
  likes: number;
  created_at: string;
}
