import * as React from 'react';
import { IRank } from '../model/rank';
import { BehaviorSubject } from 'rxjs';

interface IReactBidirectionalRank {
  ranks$: BehaviorSubject<IRank[]>;
}

class ReactBidirectionalRank extends React.Component<IReactBidirectionalRank, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      ranks: [],
    };

    this.addAge = this.addAge.bind(this); // Register function to bump age
    this.addRank = this.addRank.bind(this); // Register function to add new Rank
  }

  override componentDidMount(): void {
    // In componentDidMount we subscribe ranks$ object
    this.props.ranks$.subscribe((res: IRank[]) => {
      // and we pass this data into React State object
      this.setState({ ranks: res });
    });
  }

  addAge(i: number) {
    const temp = this.state.ranks;
    temp[i].age = temp[i].age + 1;

    // In this way we update RxJS object
    this.props.ranks$.next(temp);
  }

  addRank() {
    const temp = this.state.ranks;
    temp.push({ name: 'MKG', age: 31 });

    // In this way we update RxJS object
    this.props.ranks$.next(temp);
  }

  override render() {
    // Hire we render RxJS part of application with addAge button and ADD MKG button below
    const ranks = this.state.ranks.map((rank: IRank, i: any) => {
      return (
        <span key={i}>
          {rank.name} - {rank.age} <button onClick={() => this.addAge(i)}>Add {rank.name} age</button>
          <br />
        </span>
      );
    });
    return (
      <span>
        <span>react-rank works!</span>
        <br />
        {ranks}
        <br />
        <button onClick={this.addRank}>ADD MKG</button>
      </span>
    );
  }
}

export default ReactBidirectionalRank;
