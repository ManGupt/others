import { Component, OnInit } from '@angular/core';
import { IRank } from './model/rank';
import { RankService } from './angular-bi/service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root-emit',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mixin';
  public ranksObj$: BehaviorSubject<IRank[]> | undefined;
  public ranks: IRank[] | undefined;

  constructor(private rankService: RankService) {}

  ngOnInit(): void {
    this.rankService.getRanks$().subscribe((res: IRank[]) => {
      this.ranks = res;
    });

    this.ranksObj$ = this.rankService.getRanks$();

    this.initRanks();
  }

  initRanks() {
    this.rankService.addRanks({ name: 'ABC', age: 88 });
    this.rankService.addRanks({ name: 'DEF', age: 46 });
  }

  log(event: any) {
    console.log(event);
  }
}
