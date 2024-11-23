/* eslint-disable @typescript-eslint/no-explicit-any */
function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    return new Promise((resolve, reject) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        try {
          const output = callback(...args);
          resolve(output);
        } catch (err) {
          reject(err);
        }
      }, delay);
    });
  };
}

export default debounce;
