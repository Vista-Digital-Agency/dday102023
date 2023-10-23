import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemorialSearchService {

  memorialData: any;

  brickData: any;

  cherryTreesData: any;

   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            //console.log(data)
          this.memorialData = data;
        });

        this.getBrickJSON().subscribe(data => {
          this.brickData = data;
        });

        this.getCherryTreesJSON().subscribe(data => {
          this.cherryTreesData = data;
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/data/ddayMemorialSearch.json");
    }

    public getBrickJSON(): Observable<any> {
      return this.http.get("./assets/data/bricks.json");
    }

    public getCherryTreesJSON(): Observable<any> {
      return this.http.get("./assets/data/cherryTrees.json");
    } 

    getMemorialData() {
      return this.getMemorialData;
    }

    getBrickData() {
      return this.brickData;
    }

    getCherryTreesData() {
      return this.cherryTreesData;
    }
}
