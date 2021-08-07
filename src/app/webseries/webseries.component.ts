import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebSer } from '../web-ser';
import { WebseriesserviceService } from '../webseriesservice.service';

@Component({
  selector: 'app-webseries',
  templateUrl: './webseries.component.html',
  styleUrls: ['./webseries.component.css']
})
export class WebseriesComponent implements OnInit {

  webseries:WebSer[] | undefined;

  constructor(private webseriesserviceService:WebseriesserviceService) { }

  ngOnInit(): void {

    this.getWebSeries();
    
  }

  private getWebSeries(){
    this.webseriesserviceService.getWebSeriesList().subscribe(data=>{
      this.webseries=data;
    })
  }

}
