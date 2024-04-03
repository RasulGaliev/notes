import {TagModel} from "./tag.model";
export interface NoteModel {
  id: number;
  title: string;
  text: string;
  tag: TagModel[];
}
