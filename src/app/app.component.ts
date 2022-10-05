import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'workOrderGUI';

    showTimesheet = false;

    toggleTimesheet() {
        //console.log('Add timesheet');
        this.showTimesheet = !this.showTimesheet;
    }

}