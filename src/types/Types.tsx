import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface IProduct {
  id: string;
  image?: string | FileList;
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

export type IInputProps = {
  register: UseFormRegister<IForm>;
  errors: FieldErrors<IForm>;
};

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
