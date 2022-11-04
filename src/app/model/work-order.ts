export class WorkOrder {

    private _id!: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
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
    private _emailId!: string;
    public get emailId(): string {
        return this._emailId;
    }
    public set emailId(value: string) {
        this._emailId = value;
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
    private _workingDays!: number;
    public get workingDays(): number {
        return this._workingDays;
    }
    public set workingDays(value: number) {
        this._workingDays = value;
    }
    private _remainingDays!: number;
    public get remainingDays(): number {
        return this._remainingDays;
    }
    public set remainingDays(value: number) {
        this._remainingDays = value;
    }
    public get billingDays(): number {
        return this.billingDays;
    }
    public set billingDays(value: number) {
        this.billingDays = value;
    }
}
