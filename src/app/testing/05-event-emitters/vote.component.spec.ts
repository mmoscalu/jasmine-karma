import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('shold raise voteChanged event when upvoted', () => {

    const totalVotes = null;
    component.voteChanged.subscribe(res => totalVotes = res);
    component.upVote();
    expect(totalVotes).not.toBeNull();

  });
});
