import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = ''

  private getAllNotesPath = ''
  private getNodeByIdPath = ''
  private createNodePath = ''
  private editNotePath = ''
  private removeNotePath = ''

  private getAllTagsPath = ''
  private getTagByIdPath = ''
  private createTagPath = ''
  private removeTagPath = ''

  private getAllRemindersPath = ''
  private getReminderByIdPath = ''
  private createReminderPath = ''
  private removeReminderPath = ''

  constructor(private http: HttpClient) { }
  getAllNotes(): Observable<any> {
    return this.http.get(this.apiUrl + this.getAllNotesPath)
  }
  getNoteById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + this.getNodeByIdPath + '/' + id)
  }
  createNote(createData: any, id: number): Observable<any> {
    return this.http.post(this.apiUrl + this.createNodePath, createData)
  }
  editNote(editDate: any, id: number): Observable<any> {
    return this.http.patch(this.apiUrl + this.editNotePath + '/' + id, editDate)
  }
  removeNote(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + this.removeNotePath + '/' + id)
  }


  getAllTags(): Observable<any> {
    return this.http.get(this.apiUrl + this.getAllTagsPath)
  }
  getTagById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + this.getTagByIdPath + '/' + id)
  }
  createTag(createDate: any): Observable<any> {
    return this.http.post(this.apiUrl + this.createTagPath, createDate)
  }
  removeTag(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + this.removeTagPath + '/' + id)
  }


  getAllReminders(): Observable<any> {
    return this.http.get(this.apiUrl + this.getAllRemindersPath)
  }
  getReminderById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + this.getReminderByIdPath + '/' + id)
  }
  createReminder(createData: any, id: number): Observable<any> {
    return this.http.post(this.apiUrl + this.createReminderPath, createData)
  }
  removeReminder(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + this.removeReminderPath + '/' + id)
  }
}
