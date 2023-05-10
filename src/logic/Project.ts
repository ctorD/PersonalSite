import { Language } from './Language';

export type Project = {
  id: number;
  langs: Language[];
  title: string;
  description: string;
  url: string | undefined;
  gitUrl: string | undefined;
  gitFrontEndUrl: string | undefined;
  gitBackEndUrl: string | undefined;
};
