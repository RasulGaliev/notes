import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = ''
  private getAllNotesPath = ''
  private getNodeByIdPath = ''
  private createNodePath = ''
  private editNotePath = ''
  private removeNotePath = ''
  constructor(private http: HttpClient) { }
  getAllNotes(): Observable<any> {
    return this.http.get(this.apiUrl + this.getAllNotesPath)
  }
  getNoteById(id: number) {
    return this.http.get(this.apiUrl + this.getNodeByIdPath + '/' + id)
  }
  createNote(createData: any, id: number): Observable<any> {
    return this.http.post(this.apiUrl + this.createNodePath + '/' + id, createData)
  }
  editNote(editDate: any, id: number):Observable<any> {
    return this.http.patch(this.apiUrl + this.editNotePath + '/' + id, editDate)
  }
  removeNote(id: number):Observable<any> {
    return this.http.delete(this.apiUrl + this.removeNotePath + '/' + id)
  }
}
