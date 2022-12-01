import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import Search from "./components/Search";
import axios from "axios";
import { useAxios } from "./components/useAxios";

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

function App() {
  const [username, setUserName] = useState("taylorotwell");

  const [loading, data, error, request] = useAxios<apiProps | null>({
    method: "GET",
    url: "https://api.github.com/users/" + username
  });

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <Header />
      <Search onSearch={request} onInput={handleSearchInput} />
      <SearchResult data={data} />
    </>
  );
}

export default App;
