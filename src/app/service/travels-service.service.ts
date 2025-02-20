import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



const URL="http://localhost:1234";


@Injectable({
  providedIn: 'root'
})
export class TravelsServiceService {
  apiUrl: any;

  constructor(private http:HttpClient) { }

  
  getAllTravels_ser(){
    return this.http.get(URL +"/data_readall");
  }

 
  
  TicketNo(){
    return this.http.get(URL +"/data_allid");
  }
  getTicketNo(TicketNO:number){
    return this.http.get(URL+"/data_read?ticket_no="+TicketNO);
  }


  
  deleteData(ticketNO:number){
    return this.http.delete(URL+"/data_delete_tic?ticket_no="+ticketNO);

  }

  
  bookdata(travel:{
    ticket_no:number;
    name:string;
    mobile_number:number;
    date_of_booking:Date;
    place_from:string;
    place_to:string;})
  {

    return this.http.post(URL+"/data_insert",travel);
  }

  
  
  getByName(tic_name:string){
    return this.http.get(URL+"/data_allname?name="+tic_name);

  }


  update(ticket:number,travel_class:any){
    return this.http.put(URL+"/data_update?ticket_no="+ticket,travel_class);

  }

  fetchdate(startDate: Date, endDate: Date) {
    let params = new HttpParams()
      .set('startdate', formatDate(startDate))
      .set('enddate', formatDate(endDate));

    return this.http.get<any>(`${URL}/datefilter`, { params });
  }
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}
  

  
  



