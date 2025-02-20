import { Component } from '@angular/core';
import { TravelsServiceService } from '../service/travels-service.service';
import TravelModel from '../models/travel-model';

@Component({
  selector: 'app-filterid',
  templateUrl: './filterid.component.html',
  styleUrls: ['./filterid.component.scss']
})
export class FilteridComponent {

  
   trav_fetidarray:TravelModel[]=[];
   TicketNO:number=0;
   trav_fetid:TravelModel=new TravelModel();
   constructor(private  service:TravelsServiceService){}

   ngOnInit():void{
    this.TicketData();

   }

  TicketData(){
    const id=this.service.TicketNo();
    id.subscribe(
      (res)=> {
        this.trav_fetidarray = res as TravelModel[];
       // console.log("hi");
      }
    );
  }

  getByTicket(TicketNO: number){
    const  getid=this.service. getTicketNo(TicketNO);
    getid.subscribe(
      (res)=>{
        this. trav_fetid=res as TravelModel;
      }

    );

  }

}
