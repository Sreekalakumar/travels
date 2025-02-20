import { Component } from '@angular/core';
import TravelModel from '../models/travel-model';
import { TravelsServiceService } from '../service/travels-service.service';

@Component({
  selector: 'app-filtername',
  templateUrl: './filtername.component.html',
  styleUrls: ['./filtername.component.scss']
})
export class FilternameComponent {
  travel_array:TravelModel[]=[];

  tic_name:any;

  constructor(private  service:TravelsServiceService){}

  get_Name(tic_name:string){
    const getname=this.service.getByName(tic_name);
    getname.subscribe(
      (data)=>{
        console.log("successfully fetched",data)
        this.travel_array=data as TravelModel[];
      },
      (error)=>{
        console.error("Data not found ",error);

      }
    );

  }




}
