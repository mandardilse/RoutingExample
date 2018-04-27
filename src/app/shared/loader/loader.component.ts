import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgProgress } from '@ngx-progressbar/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  //httpActivity$: Observable<boolean>;
  constructor(private progressBar:NgProgress) { 
    
  }

  ngOnInit() {
  }

}
