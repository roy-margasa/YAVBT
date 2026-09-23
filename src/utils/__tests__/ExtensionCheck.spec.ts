import { describe, it, expect } from 'vitest';
import { utilMediaCheck } from '../ExtensionCheck';

describe('utilMediaCheck', () => {
  it('return "pdf" string', () => {
    expect(utilMediaCheck('document.pdf')).toBe('pdf');
  });

  it('return "image" string', () => {
    expect(utilMediaCheck('media.png')).toBe('image');
  });

  it('return "audio" string', () => {
    expect(utilMediaCheck('song.mp3')).toBe('audio');
  });

  it('return "video" string', () => {
    expect(utilMediaCheck('rickroll.mp4')).toBe('video');
  });

  it('return null if the extension is not covered in FILETYPE', () => {
    expect(utilMediaCheck('huh.php')).toBe(null);
  });

  it('return null if there is a falsy filename', () => {
    expect(utilMediaCheck(undefined)).toBe(null);
  });

  it('return null if there is no file extension', () => {
    expect(utilMediaCheck('wow')).toBe(null);
  });

  it('return lowercase string if the extension is in uppercase', () => {
    expect(utilMediaCheck('UPPERCASE.PDF')).toBe('pdf');
  });
});
