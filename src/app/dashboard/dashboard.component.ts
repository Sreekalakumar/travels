import { Component } from '@angular/core';
import TravelModel from '../models/travel-model';
import { TravelsServiceService } from '../service/travels-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent {
  trav_dash:TravelModel[]=[];
  constructor(private  service:TravelsServiceService){}
  ngOnInit():void{
      this.getAllData();
  }
  getAllData(){
    const data=this.service.getAllTravels_ser();
    data.subscribe(
      (res) =>{
        this.trav_dash= res as TravelModel[];
        console.log("hi");

      }
  
    )

  }
}

  

