import { TypeMaterialIconName } from './icon.interface';

export interface IGenre {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: TypeMaterialIconName
}