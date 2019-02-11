import { CapitalizefirstPipe } from './capitalizefirst.pipe';

describe('Pipe: CapitalizefirstPipe', () => {

  let pipe: CapitalizefirstPipe;
  const value = null;
  beforeEach(() => {
      pipe = new CapitalizefirstPipe();
  });

  it('create an instance', () => {
      expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "Abc"', () => {
      expect(pipe.transform('abc')).toBe('Abc');
    });

  it('should return not assigned', () => {
      expect(pipe.transform(value)).toBe('Not assigned');
  });
});
