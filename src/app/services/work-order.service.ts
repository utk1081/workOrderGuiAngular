import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { History } from '../model/history.model';
import { WorkOrder } from '../model/work-order';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  private workOrderApiUrl: string;
  private historyApiUrl: string;
  constructor(private http: HttpClient) {
    this.workOrderApiUrl = 'http://localhost:8080/workOrders';
    this.historyApiUrl = 'http://localhost:8080/histories';
  }

  public getAll(): Observable<WorkOrder[]> {
    return this.http.get<WorkOrder[]>(this.workOrderApiUrl);
  }
  public getAllHistory(): Observable<History[]> {
    return this.http.get<History[]>(this.historyApiUrl);
  }
  public update(workOrder: WorkOrder): Observable<WorkOrder> {
    return this.http.put<WorkOrder>(this.workOrderApiUrl + '/' + workOrder.id, workOrder);
  }
  public addWorkOrder(workOrder: WorkOrder): Observable<WorkOrder> {
    return this.http.post<WorkOrder>(this.workOrderApiUrl , workOrder);
  }
}
