import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl,FormControlName,Validators} from '@angular/forms';
import { WorkOrder } from '../model/work-order';
import { WorkOrderService } from '../services/work-order.service';

@Component({
  selector: 'app-add-work-order',
  templateUrl: './add-work-order.component.html',
  styleUrls: ['./add-work-order.component.css']
})
export class AddWorkOrderComponent implements OnInit {
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
      workOrder: WorkOrder = new WorkOrder();
  
      projectIdOptions: string[] = [];
      @Input()
      submitCounter: number;
  
      @Output()
      timesheetSubmitted = new EventEmitter<number>();
  
    
  
  
      newWorkorderForm = new FormGroup({
          name: new FormControl('',Validators.required),
       //   workOrderDays: new FormControl('',Validators.required),
          projectId: new FormControl('',Validators.required),
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
  
      submit() {
          const workOrderList = this.response.filter(wo => wo.employeeName === this.newWorkorderForm.value.name   );
          if(workOrderList.length > 0) {
              const workOrder = workOrderList[0];
              //Update selected values 
              workOrder.workingDays =  this.newWorkorderForm.value.workingDays;
              workOrder.id = 0;
              workOrder.dateFrom=new Date(0);
              workOrder.dateTo=new Date(0);
              let name1:string = this.newWorkorderForm.value.projectId as string;
              workOrder.projectNumber = name1;
                  this.workOrderService.addWorkOrder(workOrder).subscribe({
                      next: response => this.timesheetUpdated(response),
                      error: e => console.error('Error while updating:' + e),
                  });
                  this.popupmessageSuccess='Records Updated succesfully.';
              
          } else {
              console.error('No project for the selected work order found');
          }
          
      }
  
      timesheetUpdated(response: WorkOrder) {
          this.timesheetSubmitted.emit();
          console.log('work order updated');
      }
  
    loginUser(){
      console.warn(this.newWorkorderForm.value);
      
    }
    get name(){
      return this.newWorkorderForm.get('name');
    }
    get workingDays(){
      return this.newWorkorderForm.get('workingDays');
    }
    get projectId(){
      return this.newWorkorderForm.get('projectId');
    }
  }
  