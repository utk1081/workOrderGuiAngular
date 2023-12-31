import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkOrder } from '../model/work-order';
import { WorkOrderService } from '../services/work-order.service';
import { FormGroup, FormControl,FormControlName,Validators} from '@angular/forms';

@Component({
    selector: 'app-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
@Input('parentData1') public  aliasName;
@Output () public childEvent=new EventEmitter();
@Output () public childEventSuccess=new EventEmitter();
fireEvent(){
    this.childEvent.emit('reverse event test.');
}
fireEventSuccess(){
    this.childEventSuccess.emit('Result: Data Updated Sussesfully.');
}
    constructor(private workOrderService: WorkOrderService) {
        this.submitCounter = 0;
    }

    names: string[] = [];
    response: WorkOrder[] = [];
    selectedName = '';
    popupmessage='';
    popupmessageSuccess='';
    buttonType : string='';
    workOrder: WorkOrder = new WorkOrder();

    projectIdOptions: string[] = [];
    @Input()
    submitCounter: number;

    @Output()
    timesheetSubmitted = new EventEmitter<number>();

  


    timesheetForm = new FormGroup({
        name: new FormControl('',Validators.required),
        projectId: new FormControl('',Validators.required),
        //dateTo: new FormControl(Validators.required),
       // dateFrom: new FormControl(Validators.required),
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
   
    submitTimesheet(buttonType) {
      
        if(buttonType==="submit") {
            console.log(buttonType);
        

        const workOrderList = this.response.filter(wo => wo.employeeName === this.timesheetForm.value.name && wo.projectNumber === this.timesheetForm.value.projectId);
        if(workOrderList.length > 0) {
            const workOrder = workOrderList[0];
            if(workOrder.remainingDays > this.timesheetForm.value.workingDays) {
                workOrder.remainingDays = workOrder.remainingDays - this.timesheetForm.value.workingDays;
                workOrder.billingDays=this.timesheetForm.value.workingDays;
                this.workOrderService.update(workOrder).subscribe({
                    next: response => this.timesheetUpdated(response),
                    error: e => console.error('Error while updating:' + e),
                });
                this.popupmessageSuccess='Records Updated succesfully.';
            } else {
                this.popupmessage='insufficient work order balance!';
            }
            console.log(workOrder);
        } else {
            console.error('No project for the selected work order found');
        }
    }
    if(buttonType==="edit") {
        console.log(buttonType);
        const workOrderList = this.response.filter(wo => wo.employeeName === this.timesheetForm.value.name && wo.projectNumber === this.timesheetForm.value.projectId);

        if(workOrderList.length > 0) {
            const workOrder = workOrderList[0];
            workOrder.billingDays=this.timesheetForm.value.workingDays;
            workOrder.workingDays=this.timesheetForm.value.workingDays;
            workOrder.dateFrom=this.timesheetForm.value.dateFrom;
            workOrder.dateTo=this.timesheetForm.value.dateTo;
        this.workOrderService.update(workOrder).subscribe({
            next: response => this.timesheetUpdated(response),
            error: e => console.error('Error while updating:' + e),
        });
    }
    }
    }

    timesheetUpdated(response: WorkOrder) {
        this.timesheetSubmitted.emit();
        console.log('Timesheet updated');
    }


  // Angular Reactive form starts 
  title2 = 'angular8 Reactive form';
  
  loginUser(){
    console.warn(this.timesheetForm.value);
    
  }
  get name(){
    return this.timesheetForm.get('name');
  }
  get projectId(){
    return this.timesheetForm.get('projectId');
  }
  get dateFrom(){
    return this.timesheetForm.get('dateFrom');
  }
  get dateTo(){
    return this.timesheetForm.get('dateTo');
  }
  get workingDays(){
    return this.timesheetForm.get('workingDays');
  }
}
