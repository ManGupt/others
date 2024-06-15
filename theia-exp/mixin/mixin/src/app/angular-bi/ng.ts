import { Component, OnInit } from '@angular/core';
import { IRank } from '../model/rank';
import { RankService } from './service';

@Component({
  selector: 'app-ng-rank',
  template: `
    <div>
      <span>ng-rank works!</span><br />
      <span *ngFor="let rank of ranks; let i = index"
        >{{ rank.name }} - {{ rank.age }} - <button (click)="addAge(i)">Add {{ rank.name }} age</button><br
      /></span>
      <br />
      <button (click)="addRank()">ADD XYZ</button>
    </div>
  `,
})
export class NgRankComponent implements OnInit {
  public ranks: IRank[];

  constructor(private rankService: RankService) {}

  ngOnInit() {
    this.rankService.getRanks$().subscribe((res: IRank[]) => {
      this.ranks = res;
    });
  }

  addAge(rankId: number) {
    this.rankService.updateRankAge(rankId, this.ranks[rankId].age + 1);
  }

  addRank() {
    this.rankService.addRanks({ name: 'xyz', age: 23 });
  }
}
