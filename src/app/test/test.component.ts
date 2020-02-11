import { Component, OnInit } from '@angular/core';
import { BehaviorSubject,Subject, Observable,merge,pipe,fromEvent,of } from 'rxjs';
import {InfinityScrollService} from '../scroll/infinity-scroll.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[InfinityScrollService]
})
export class TestComponent implements OnInit {
  source=Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  item$
  numberOfItems=20;
  handle=page=>{
    let itemCount=(page-1)*this.numberOfItems;
    return of(this.source.slice(itemCount,itemCount+this.numberOfItems));
    };
  option={
    handle:this.handle,
    itemNumber:20,
    itemHeight:20,
    style:{
      height:'400px',
      width:'200px'
    },
    pageInit:2
  }

  constructor(private scrollService:InfinityScrollService) { }
  ngOnInit() {
  }
   ngAfterViewInit(): void {
    this.item$=this.scrollService.init(this.option);
  }
  refresh(){
    this.scrollService.refreshData(this.handle,true);
  }

}