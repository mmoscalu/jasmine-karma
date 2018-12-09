import { getCurrencies } from './getCurrencies';

describe('getCurrencies', function () {
  it('should return the suported currencies', function () {
    const result = getCurrencies();

    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
