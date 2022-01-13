
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Terrestre } from './terrestre';

@Injectable({
  providedIn: 'root'
})
export class TerrestreService {

  private url:string="http://localhost:8090/api/terrestres";
  constructor(private http:HttpClient) { }
//crear registro
  create(terrestre:Terrestre):Observable<Terrestre>{
    return this.http.post<Terrestre>(this.url,terrestre);
  
    }
    //obtener registro
get(guia:number):Observable<Terrestre>{
  return this.http.get<Terrestre>(this.url+'/'+guia);
}
}
