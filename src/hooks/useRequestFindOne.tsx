import { useState } from "react";
import { api } from "../services/api";

interface Props {
  path: string;
  defaultQuery?: object;
}

export function useRequestFindOne<T>({ path, defaultQuery = {} }: Props) {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const execute = (params = {}) => {
    setLoading(true);

    api
      .get(path, {
        params: {
          ...defaultQuery,
          ...params,
        },
      })
      .then(({ data }) => {
        setResponse(data);

        setError(false);
        setLoading(false);
      })
      .catch(() => {
        setResponse(null);

        setError(true);
        setLoading(false);
      });
  };

  return {
    execute,
    response,
    error,
    loading,
  };
}
