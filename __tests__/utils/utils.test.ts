import { formatBalance } from '@utils/utils';

describe('utils', () => {
  it('[formatBalance] should return proper value', () => {
    const value = formatBalance(7999750000000000000);
    expect(value).toEqual('7.99975 EGLD');
  });
});
