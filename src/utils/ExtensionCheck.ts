import { FILETYPE } from '@/constants/example/etc';

export const utilMediaCheck = (filename: string | undefined) => {
  if (filename) {
    const filenameArray = filename.split('.');
    const lastElement = filenameArray[filenameArray.length - 1]?.toLowerCase();

    return FILETYPE[lastElement as keyof typeof FILETYPE];
  }

  return null;
};
