export class Timesheet {

    private _employeeName!: string;
    public get employeeName(): string {
        return this._employeeName;
    }
    public set employeeName(value: string) {
        this._employeeName = value;
    }
    private _projectNumber!: string;
    public get projectNumber(): string {
        return this._projectNumber;
    }
    public set projectNumber(value: string) {
        this._projectNumber = value;
    }

    private _dateFrom!: Date;
    public get dateFrom(): Date {
        return this._dateFrom;
    }
    public set dateFrom(value: Date) {
        this._dateFrom = value;
    }
    private _dateTo!: Date;
    public get dateTo(): Date {
        return this._dateTo;
    }
    public set dateTo(value: Date) {
        this._dateTo = value;
    }
    private _submittedWorkingDays!: number;
    public get submittedWorkingDays(): number {
        return this._submittedWorkingDays;
    }
    public set submittedWorkingDays(value: number) {
        this._submittedWorkingDays = value;
    }

}
