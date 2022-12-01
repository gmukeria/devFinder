import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

export interface apiProps {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: number;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export const useAxios = <T>(
  config: AxiosRequestConfig<any>,
  loadOnStart: boolean = true
): [boolean, T | undefined, string, () => void] => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    if (loadOnStart) sendRequest();
    else setLoading(false);
  }, []);

  const request = () => {
    sendRequest();
  };

  const sendRequest = () => {
    setLoading(true);

    axios(config)
      .then(response => {
        setError("");
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  return [loading, data, error, request];
};
