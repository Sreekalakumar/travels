import { Component } from '@angular/core';
import TravelModel from '../models/travel-model';
import { TravelsServiceService } from '../service/travels-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
   
  travel:TravelModel=new TravelModel();

  constructor(private  service:TravelsServiceService){}

  Book(){
    const data=this.service.bookdata(this.travel);
    data.subscribe(
      (res:any)=>{
        console.log(res);
        alert("Booked successfully !!");
      },function(error){
        console.log(error);
        alert("somenting went wrong!,please try again");
      }
    )
  }

   

}
