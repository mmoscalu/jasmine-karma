import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('shold raise voteChanged event when upvoted', () => {

    let totalVotes = null;
    component.voteChanged.subscribe(res => totalVotes = res);
    component.upVote();
    expect(totalVotes).not.toBeNull();

  });
});
