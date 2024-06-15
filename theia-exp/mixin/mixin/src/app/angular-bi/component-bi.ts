import { Component, Injector, OnInit, Input } from '@angular/core';
import { IRank } from '../model/rank';
import { ReactBidirectionalApplication } from '../react-bi/jsx-bi';
import { BehaviorSubject } from 'rxjs';
import { RankService } from './service';

@Component({
  selector: 'app-react-bi-renderer',
  template: `<div class="react-container" id="react-bi-renderer"></div>`,
})
export class ReactBidirectionalRendererComponent implements OnInit {
  // Hire we get data from the parent component, but of course, we can also subscribe this data directly from RankService if we prefer this way
  @Input() ranks$: BehaviorSubject<IRank[]>;

  constructor(public injector: Injector, private rankService: RankService) {
    this.ranks$ = this.rankService.getRanks$();
  }

  ngOnInit() {
    // We add only one parameter into initialize function
    ReactBidirectionalApplication.initialize('react-bi-renderer', this.injector, this.ranks$);
  }
}
