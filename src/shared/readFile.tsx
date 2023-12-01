export const readFileAsBase64 = (
  file: File | undefined
): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve(undefined);
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    }
  });
};
