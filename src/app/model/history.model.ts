export class History {
  
    private _id!: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _userName!: string;
    public get userName(): string {
        return this.userName;
    }
    public set userName(value: string) {
        this.userName = value;
    }
    private _projectNumber!: string;
    public get projectNumber(): string {
        return this.projectNumber;
    }
    public set projectNumber(value: string) {
        this.projectNumber = value;
    }
    private _emailId!: string;
    public get emailId(): string {
        return this._emailId;
    }
    public set emailId(value: string) {
        this._emailId = value;
    }
    private _timestamp!: Date;
    public get timestamp(): Date {
        return this._timestamp;
    }
    public set timestamp(value: Date) {
        this._timestamp = value;
    }
    private _action!: string;
    public get action(): string {
        return this._emailId;
    }
    public set action(value: string) {
        this._emailId = value;
    }
    
}
