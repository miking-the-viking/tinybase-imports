import { TinybaseWrapper } from './TinybaseWrapper';

describe('TinybaseLib', () => {
  it('exposes useRow as a function', () => {
    const tb = new TinybaseWrapper();
    expect(typeof tb.useRow).toBe('function');
  });
});
