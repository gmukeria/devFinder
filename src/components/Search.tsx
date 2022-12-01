import React, { useEffect } from "react";

import classes from "./Search.module.css";
import searchIcon from "../assets/icon-search.svg";

type Props = {
  onSearch: () => void;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ onSearch, onInput }: Props) => {
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className={classes["search-card"]}>
      <form className={classes["search-container"]} onSubmit={onFormSubmit}>
        <div className={classes["search-input-group"]}>
          <img src={searchIcon} alt="" id={classes["search-icon"]} />
          <input
            type="text"
            className={classes["search-input"]}
            placeholder="Search GitHub Username..."
            onChange={onInput}
          />
        </div>

        <button type="submit" className={classes["search-button"]}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
