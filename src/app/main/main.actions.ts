import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';



import { IAppStateRecord } from '../store/index.state';

@Injectable()
export class MainActions {
  static RESET = 'main/RESET';
  constructor(
    private store: NgRedux<IAppStateRecord>,
    private http: HttpClient
  ) { }

  public initialiseDataStream(): void {
    this.http.get('./assets/data.json')
    .subscribe((response: Response): void => 
      this.addDataToStore(response)
    );

  }

  private addDataToStore(data: any): void {
    
  }
}
