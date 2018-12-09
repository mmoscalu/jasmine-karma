import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', function () {
    expect(greet('mosh')).toContain('mosh');
  });
});
