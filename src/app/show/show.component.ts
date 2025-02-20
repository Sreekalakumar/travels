import { Component } from '@angular/core';
import { TravelsServiceService } from '../service/travels-service.service';
import TravelModel from '../models/travel-model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  startDate!: Date;
  endDate!: Date;
  data: TravelModel[] = [];

  constructor(private  service:TravelsServiceService){}

  fetchDate() {
    // Ensure that startDate and endDate are Date objects
    
    
    this.service.fetchdate(this.startDate, this.endDate).subscribe(response => {
      this.data = response;
    });
  }
  

  
  

 
}
