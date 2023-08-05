import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-image-api',
  templateUrl: './image-api.component.html',
  styleUrls: ['./image-api.component.scss']
})
export class ImageApiComponent implements OnInit {

  imageApi:any[] = []
  isLoaded:boolean = false;
  constructor(private http:SharedService){}

  ngOnInit() {
    this.isLoaded = true;
    this.http.getDataFromServer('task').subscribe((response:any)=>{
      console.log(response,response.items);
      if (response && response.items && response.items.length > 0) {
        this.imageApi = response.items;
      }
      this.isLoaded = false;
    },
    error => {
      this.isLoaded = false;
    })
  }


}
