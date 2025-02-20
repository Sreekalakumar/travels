import { Component } from '@angular/core';
import { TravelsServiceService } from '../service/travels-service.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent {
  
  ticketNO:any;
  constructor(private  service:TravelsServiceService){}
  
  deleteTicket(ticketNO:number){
    console.log("hi")
    const deleteTic=this.service.deleteData(ticketNO);
    deleteTic.subscribe(
      (res)=>{
        console.log("DElete Resonse",res);

      },
      function(error){
        //console.error()
        console.log(error);
        alert("somenting went wrong!,please try again");
      }
    )
  }
}
