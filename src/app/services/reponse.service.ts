import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reponse } from '../entity/reponse';

@Injectable({
  providedIn: 'root'
})

  export class ReponseService {
    readonly API_URL ="http://localhost:8081/gestion/reponseTicket"
  
  
    constructor(private httpClient: HttpClient) { }
  
  
    getAllReponse(): Observable<Reponse[]> {
      return this.httpClient.get<Reponse[]>(`${this.API_URL}/retrieve-all-ReponseTickets`);
    }
    
    addReponse(reponse : Reponse):Observable<Object> {
      
      return this.httpClient.post(`${this.API_URL}/add-ReponseTicket`, reponse);
    }
    
    editReponse(id:Number, reponseTicket : any):Observable<Object>{
      return this.httpClient.put(`${this.API_URL}/update-reponse/${id}`, reponseTicket);
    }
  
    getreponsebyid(id : Number):Observable<Reponse>{
      return this.httpClient.get<Reponse>(`${this.API_URL}/retrieve-ReponseTicket/${id}`);
    }
  
    deleteReponse(id : Number):Observable<Object>{
      return  this.httpClient.delete(`${this.API_URL}/remove-ReponseTicket/${id}`);
    }
  
}
