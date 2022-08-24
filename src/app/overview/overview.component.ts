import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() {this.getData(); }
array:any=[{Name:"Utkarsh", ProjectId:"1234",Email:"utkarsh@gloresoft.com" , ToDate:"01-09-2021" ,TillDate:"10-08-2022",billingDays:"200"},
{Name:"Moulik", ProjectId:"1234",Email:"moulik@gloresoft.com" , ToDate:"01-09-2021" ,TillDate:"10-08-2022",billingDays:"200"},
{Name:"Gajanan", ProjectId:"1234",Email:"gajanan@gloresoft.com" , ToDate:"01-09-2021" ,TillDate:"10-08-2022",billingDays:"200"}];

tabKey:any=[];
tabValue:any=[];
getData(){
this.array.forEach((element:any) => {
  this.tabKey=Object.keys(element);
  this.tabValue.push(Object.values(element));
});
console.log(this.tabValue);
}

  ngOnInit(): void {
  }

}
