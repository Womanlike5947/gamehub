import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
// <T> is a generic type that will be inferred by TypeScript


// #region Interface
interface FetchResponse<T> {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: T[];
}
// #endregion

const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?: any) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, deps? [...deps]: []);

  return { data, error, isLoading };
};

export default useData;
