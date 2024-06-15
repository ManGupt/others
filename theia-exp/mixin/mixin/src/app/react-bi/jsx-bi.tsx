import * as React from 'react';
import { IRank } from '../model/rank';
import { BehaviorSubject } from 'rxjs';
import { Injector } from '@angular/core';
import { createRoot } from 'react-dom/client';
import ReactBidirectionalRank from './rjsx-bi';

interface IReactBidirectionalApp {
  injector: Injector;
  ranks$: BehaviorSubject<IRank[]>; // We use this interface to grab RxJS object
}

class ReactBidirectionalApp extends React.Component<IReactBidirectionalApp, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      ranks$: this.props.ranks$, // and we pass this data into ReactBidirectionalRank component
    };
  }

  override render() {
    return (
      <div className={'renderer'}>
        <ReactBidirectionalRank ranks$={this.state.ranks$} />
      </div>
    );
  }
}

export class ReactBidirectionalApplication {
  static initialize(
    containerId: string,
    injector: Injector,
    ranks$: BehaviorSubject<IRank[]> // This is necessary to get RxJS object
  ) {
    const container = document.getElementById(containerId) as HTMLElement;
    const root = createRoot(container);
    root.render(<ReactBidirectionalApp injector={injector} ranks$={ranks$} />);
  }
}
