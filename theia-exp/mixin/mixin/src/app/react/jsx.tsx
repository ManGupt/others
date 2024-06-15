import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import ReactRank from './rjsx';
import { Injector } from '@angular/core';
import { createRoot } from 'react-dom/client';

interface IReactApplication {
  injector: Injector;
}

class ReactApp extends React.Component<IReactApplication, any> {
  constructor(props: any) {
    super(props);
  }

  override render() {
    return (
      <div className={'renderer'}>
        <ReactRank />
      </div>
    );
  }
}

export class ReactApplication {
  static initialize(containerId: string, injector: Injector) {
    //ReactDOM.render(
    //  <ReactApp injector={injector}/>,
    //  document.getElementById(containerId)
    //);
    const container = document.getElementById(containerId) as HTMLElement;
    const root = createRoot(container);
    root.render(<ReactApp injector={injector} />);
  }
}
