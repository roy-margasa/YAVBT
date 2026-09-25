import { describe, it, expect } from 'vitest';
import { useColorRange } from '../useColorRange';

describe('useColorRange', () => {
  it('computes text and bg from the color values', () => {
    const result = useColorRange();

    result.colorRed.value = 101;
    result.colorGreen.value = 102;
    result.colorBlue.value = 103;

    expect(result.colorValue.value.text).toBe('rgb(101, 102, 103)');
    expect(result.colorValue.value.bg).toBe('rgb(154, 153, 152)');
  });
});
