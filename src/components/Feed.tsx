/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Feed
 */

import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

interface IProps {}

const Feed: React.FC<IProps> = (props) => {
  const {} = props;
  const feed = useSelector((store: any) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) {
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (feed?.length <= 0)
    return <h1 className="flex justify-center my-10">No users found</h1>;

  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed?.[0]} />
    </div>
  );
};

export default Feed;
