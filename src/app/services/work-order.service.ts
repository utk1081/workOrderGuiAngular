import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkOrder } from '../model/work-order';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  private workOrderApiUrl: string;
  constructor(private http: HttpClient) {
    this.workOrderApiUrl = 'http://localhost:8080/workOrders';
  }

  public getAll(): Observable<WorkOrder[]> {
    return this.http.get<WorkOrder[]>(this.workOrderApiUrl);
  }
}
