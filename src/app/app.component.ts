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
    submitCounter = 0;
    updateOverview: number = 0;

    toggleTimesheet() {
        //console.log('Add timesheet');
        this.showTimesheet = !this.showTimesheet;
    }

    refreshOverviewTable() {
        this.updateOverview = ++this.submitCounter;
        this.showTimesheet = false;
    }

}