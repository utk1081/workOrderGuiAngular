import { Component } from '@angular/core';
import { WorkOrder } from './model/work-order';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'workOrderGUI';

    showTimesheet = false;
    showAddWorkOrder = false;
    submitCounter = 0;
    submitCounterHistory = 0;
    updateOverview: number = 0;
    updateHistory: number= 0;
    public messageSuccess='';
    toggleTimesheet() {
        console.log('Update timesheet');
        this.showTimesheet = !this.showTimesheet;
    }

    toggleAddWorkOrder() {
        console.log('add new work order');
        this.showAddWorkOrder = !this.showAddWorkOrder;
    }
    refreshOverviewTable() {
        this.updateOverview = ++this.submitCounter;
        this.showTimesheet = false;
        this.showAddWorkOrder = false;
        this.updateHistory = ++this.submitCounterHistory;
    }
   
}