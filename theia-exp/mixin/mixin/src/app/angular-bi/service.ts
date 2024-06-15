import { Injectable } from '@angular/core';
import { IRank } from '../model/rank';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RankService {
  private ranks$: BehaviorSubject<IRank[]> = new BehaviorSubject<IRank[]>([]);

  constructor() {}

  addRanks(rank: IRank) {
    // To add new rank
    const actualRank = this.ranks$.value;
    actualRank.push(rank);
    this.ranks$.next(actualRank);
  }

  updateRankAge(rankId: number, age: number) {
    // To update age of selected rank
    const actualRank = this.ranks$.value;
    actualRank[rankId].age = age;
    this.ranks$.next(actualRank);
  }

  getRanks$(): BehaviorSubject<IRank[]> {
    // To get BehaviorSubject and pass it into ReactJS
    return this.ranks$;
  }
}
