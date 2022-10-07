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
    console.log('5555');
    this.workOrderApiUrl = 'http://localhost:8080/workOrders';
  }

  public getAll(): Observable<WorkOrder[]> {
    return this.http.get<WorkOrder[]>(this.workOrderApiUrl);
  }

  updateWorkOrder(employee: WorkOrder): Observable<Object>{
    console.log('1 5555 called update service');
    console.log('id '+employee.id);
    return this.http.put( '${this.workOrderApiUrl}/${ employee.id}' ,employee);
  }
}
