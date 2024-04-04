import { Routes } from '@angular/router';
import {NotesTabComponent} from "./components/notes-tab/notes-tab.component";
import {RemindersComponent} from "./components/reminder/reminders.component";
import {TagsTabComponent} from "./components/tags-tab/tags-tab.component";
import {MainComponent} from "./components/main/main.component";
import {NoteComponent} from "./components/note/note.component";
import {RemindersTabComponent} from "./components/reminders-tab/reminders-tab.component";
import {TagComponent} from "./components/tag/tag.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'notes', component: NotesTabComponent },
  { path: 'notes/:id', component: NoteComponent},
  { path: 'reminders', component: RemindersTabComponent },
  { path: 'reminders/:id', component: RemindersComponent },
  { path: 'tags', component: TagsTabComponent },
  { path: 'tags/:id', component: TagComponent},
  { path: '**', redirectTo: '' }
];
