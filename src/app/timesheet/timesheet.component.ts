import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkOrder } from '../model/work-order';
import { WorkOrderService } from '../services/work-order.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

    constructor(private workOrderService: WorkOrderService) {
        this.submitCounter = 0;
    }

    names: string[] = [];
    response: WorkOrder[] = [];
    selectedName = '';
    workOrder: WorkOrder = new WorkOrder();

    projectIdOptions: string[] = [];
    @Input()
    submitCounter: number;

    @Output()
    timesheetSubmitted = new EventEmitter<number>();

    timesheetForm = new FormGroup({
        name: new FormControl(''),
        projectId: new FormControl(''),
        dateTo: new FormControl(),
        dateFrom: new FormControl(),
        workingDays: new FormControl()
    });

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
        //response.map(w => w.employeeName).map(m => this.names.push(m));
        this.names = [...new Map(response.map((m) => [m.employeeName, m])).values()].map(m => m.employeeName);
        console.log('finished successful response');
    }

    nameChanged() {
        this.projectIdOptions = this.response.filter(workOrder => workOrder.employeeName === this.selectedName)
            .map(workOrder => workOrder.projectNumber);
        //this.projectIdOptions.forEach(x => console.log('projectId', x));
    }

    submitTimesheet() {
        const workOrderList = this.response.filter(wo => wo.employeeName === this.timesheetForm.value.name && wo.projectNumber === this.timesheetForm.value.projectId);
        if(workOrderList.length > 0) {
            const workOrder = workOrderList[0];
            if(workOrder.remainingDays > this.timesheetForm.value.workingDays) {
                workOrder.remainingDays = workOrder.remainingDays - this.timesheetForm.value.workingDays;
                this.workOrderService.update(workOrder).subscribe({
                    next: response => this.timesheetUpdated(response),
                    error: e => console.error('Error while updating:' + e),
                });
            } else {
                console.error('Not enough balance in the work order.');
            }
            console.log(workOrder);
        } else {
            console.error('No project for the selected work order found');
        }
        
    }

    timesheetUpdated(response: WorkOrder) {
        this.timesheetSubmitted.emit();
        console.log('Timesheet updated');
    }


}
