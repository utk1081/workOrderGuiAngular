import { Component, OnInit ,EventEmitter, Input,  Output,SimpleChanges } from '@angular/core';
import { History } from '../model/history.model';
import { WorkOrderService } from '../services/work-order.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  response: History[] = [];
  constructor(private workOrderService: WorkOrderService) { }
  @Input()
  updateHistory: number = 0;
  historys: History[] = [];

ngOnInit(): void {
  this.workOrderService.getAllHistory().subscribe({
      next: (response) => this.handleSuccessfulResponse(response),
      error: (e) => this.handleErrorResponse(e),
      complete: () => console.info('complete'),
      
  })
}

handleSuccessfulResponse(response: History[]): void {
  this.historys = response;
  console.log('finished successful response');
}
handleErrorResponse(e: any): void {
  console.log('Some error while retrieving history.')
}

ngOnChanges(changes: SimpleChanges) {
    
  for(const change in changes) {
      console.log('change:', change);
      if(change)
      this.ngOnInit();
  }
  console.log('updateHistory:', this.updateHistory);
}
}


