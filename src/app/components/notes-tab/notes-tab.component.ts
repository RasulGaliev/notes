import {Component, OnInit} from '@angular/core';
import { NoteModel } from "../../models/note.model";
import { ClientService } from "../../services/client.service";

@Component({
  selector: 'app-notes-tab',
  standalone: true,
  imports: [],
  templateUrl: './notes-tab.component.html',
  styleUrl: './notes-tab.component.css'
})
export class NotesTabComponent implements OnInit {
  notes: NoteModel[] = [];
  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientService.getAllNotes()
      .subscribe(data => {
        this.notes = data.data;
      })
  }
}
