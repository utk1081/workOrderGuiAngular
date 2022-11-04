import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WorkOrder } from '../model/work-order';
import { WorkOrderService } from '../services/work-order.service';
 /** code for two way binding Start**/

/** code for two way binding End**/
@Component({
  selector: 'app-overview',
  //selector: 'app-root',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnChanges {
  public nameTest="Utkarsh";
  public message='';

  onSave($event){ 
    console.log("save button is clicked. ",$event);
  }

  @Input()
  updateOverview: number = 0;
  workOrders: WorkOrder[] = [];

  constructor(private workOrderService: WorkOrderService) {}
  ngOnInit() {
    this.workOrderService.getAll().subscribe({
      next: (response) => this.handleSuccessfulResponse(response),
      error: (e) => this.handleErrorResponse(e),
      complete: () => console.info('complete')
    })
  }
  handleErrorResponse(e: any): void {
    console.log('Some error while retrieving work orders.')
  }

  handleSuccessfulResponse(response: WorkOrder[]): void {
    this.workOrders = response;
    console.log('finished successful response');
  }

  ngOnChanges(changes: SimpleChanges) {
    
    for(const change in changes) {
        console.log('change:', change);
        if(change)
        this.ngOnInit();
    }
    console.log('updateOverview:', this.updateOverview);
  }

}
