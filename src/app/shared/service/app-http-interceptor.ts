import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, finalize } from 'rxjs/operators';
import { NgProgress } from '@ngx-progressbar/core';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private progressBar: NgProgress) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    //this.loader.setHttpStatus(false);
    //this.loader.setHttpCompletePercentage(0);
    this.progressBar.start()
    return next.handle(req)
      .pipe(map(event => {
        //this.loader.setHttpCompletePercentage(50)
        return event
      })
      ,catchError(error=>{return Observable.throw(error);})
      ,finalize(()=> {
        //this.loader.setHttpStatus(true)
        //this.loader.setHttpCompletePercentage(100)
        this.progressBar.complete()
      })
    );
  }

}
