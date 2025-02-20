import { Component } from '@angular/core';
import { TravelsServiceService } from '../service/travels-service.service';
import TravelModel from '../models/travel-model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {


   trav_dash:TravelModel[]=[];
  travel_class:TravelModel=new TravelModel();

  constructor(private  service:TravelsServiceService){}

  update_ticket(){
    const ticket=this.travel_class.ticket_no;
    const data=this.service.update(ticket,this.travel_class);
    data.subscribe(
      (Response:any)=>{
        console.log('ticket updated successfully!',Response);
        alert('ticket updated successfully!');
      },
    (error)=>{
      console.log('something went wrong!',error);
      alert('something went wrong!');
    });
  }

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
