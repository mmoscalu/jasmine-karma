import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let component: VoteComponent;

  it('should increment totalVotes when upvoted', () => {
    component = new VoteComponent();

    component.upVote();

    expect(component.totalVotes).toBe(1);

  });
});
