import React from "react";

import classes from "./SearchResult.module.css";
import Card from "./Card";
import avatarImg from "../assets/avatar.jpeg";
import twitterIcon from "../assets/icon-twitter.svg";
import locationIcon from "../assets/icon-location.svg";
import websiteIcon from "../assets/icon-website.svg";
import companyIcon from "../assets/icon-company.svg";

export interface Props {
  data:
    | {
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
    | null
    | undefined;
}

const SearchResult = ({ data }: Props) => {
  return (
    <Card>
      <div className={classes["search-result-container"]}>
        <div className={classes["user-section"]}>
          <div className={classes["avatar-box"]}>
            <img
              src={data ? data.avatar_url : avatarImg}
              alt=""
              className={classes["avatar"]}
            />
          </div>
          <div className={classes["fullname"]}>
            <p className={classes["name"]}>{data ? data.name : "name"}</p>
            <p className={classes["nikname"]}>@{data ? data.login : "user"}</p>
            <p className={classes["joined-date"]}>
              Joined At {data ? data.created_at : "00:00:00"}
            </p>
          </div>
        </div>

        <div className={classes["description-section"]}>
          {data ? data.bio : " no data"}
        </div>

        <div className={classes["statistic-sectoin"]}>
          <div className={classes["stat"]}>
            <p className={classes["stat-title"]}>Repos</p>
            <p className={classes["stat-value"]}>
              {data ? data.public_repos : "0"}
            </p>
          </div>

          <div className={classes["stat"]}>
            <h4 className={classes["stat-title"]}>Followers</h4>
            <p className={classes["stat-value"]}>
              {data ? data.followers : "0"}
            </p>
          </div>

          <div className={classes["stat"]}>
            <h4 className={classes["stat-title"]}>Following</h4>
            <p className={classes["stat-value"]}>
              {data ? data.following : "0"}
            </p>
          </div>
        </div>

        <div className={classes["contact-section"]}>
          <div className={classes["contact"]}>
            <img
              className={classes["contact-icon"]}
              src={locationIcon}
              alt=""
            />
            <p className={classes["contact-value"]}>
              {data ? data.location : "location"}
            </p>
          </div>

          <div className={classes["contact"]}>
            <img className={classes["contact-icon"]} src={websiteIcon} alt="" />
            <p className={classes["contact-value"]}>
              {data ? data.blog : "https://github.blog"}
            </p>
          </div>

          <div className={classes["contact"]}>
            <img className={classes["contact-icon"]} src={twitterIcon} alt="" />
            <p className={classes["contact-value"]}>
              {data ? data.twitter_username : "Not Available"}
            </p>
          </div>

          <div className={classes["contact"]}>
            <img className={classes["contact-icon"]} src={companyIcon} alt="" />
            <p className={classes["contact-value"]}>
              {data ? data.company : "00:00:00"}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SearchResult;
