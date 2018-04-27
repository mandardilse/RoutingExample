import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoaderService {
  private requestInProcess$: BehaviorSubject<boolean>
  private requestCompletePercentage$: BehaviorSubject<Number>
  constructor() { 
    this.requestInProcess$ = new BehaviorSubject<boolean>(false)
    this.requestCompletePercentage$ = new BehaviorSubject<Number>(0)
  }

  setHttpStatus(inProcess: boolean){
    this.requestInProcess$.next(inProcess)
  }

  setHttpCompletePercentage(percentage: Number){
    this.requestCompletePercentage$.next(percentage);
  }

  getHttpStatus():Observable<boolean>{
    return this.requestInProcess$.asObservable()
  }

  getHttpCompletePercentage(): Observable<Number>{
    return this.requestCompletePercentage$.asObservable()
  }
}
