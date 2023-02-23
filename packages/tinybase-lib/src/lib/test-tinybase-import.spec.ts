import { useRow } from 'tinybase/cjs/ui-react';
describe('TinybaseLib', () => {
  it('exposes useRow as a function', () => {
    expect(typeof useRow).toBe('function');
  });
});
