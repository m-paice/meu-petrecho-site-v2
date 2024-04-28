import { useCallback, useRef } from "react";

export const useBebounce = (func: (params: string) => void, delay = 500) => {
  const timeout = useRef<number | undefined>();

  const debounce = useCallback(
    (args: string) => {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        func(args);
      }, delay);
    },
    [func, delay]
  );

  return debounce;
};
