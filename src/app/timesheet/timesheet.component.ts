import { Component, OnInit } from '@angular/core';
import { WorkOrder } from '../model/work-order';
import { WorkOrderService } from '../services/work-order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

    constructor(
        private workOrderService: WorkOrderService,
        private router: Router) { }

    names: string[] = [];
    response: WorkOrder[] = [];
    selectedName = '';
    workOrder: WorkOrder = new WorkOrder();

    projectIdOptions: string[] = [];

    ngOnInit(): void {
        this.workOrderService.getAll().subscribe({
            next: (response) => this.handleSuccessfulResponse(response),
            error: (e) => this.handleErrorResponse(e),
            complete: () => console.info('complete'),
            
        })
    }

    handleErrorResponse(e: any): void {
        console.log('Some error while retrieving work orders.')
    }

    handleSuccessfulResponse(response: WorkOrder[]): void {
        this.response = response;
        this.names = response.map(w => w.employeeName);
        console.log('finished successful response');
    }

    nameChanged() {
        this.projectIdOptions = this.response.filter(workOrder => workOrder.employeeName === this.selectedName)
            .map(workOrder => workOrder.projectNumber);
        //this.projectIdOptions.forEach(x => console.log('projectId', x));
    }

    submitTimesheet() {
        console.log('0 submitTimesheet called ');
        this.workOrderService.updateWorkOrder(this.workOrder).subscribe( data =>{
            this.goToEmployeeList();
          }
          , error => console.log(error));
        }
        goToEmployeeList(){
            console.log('2 before call ');
            this.router.navigate(['/employees']);
            console.log('3 after call ');
          }
}
