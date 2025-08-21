/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Feed
 */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import QueryBoundary from "./QueryBoundary";

const Feed: React.FC = () => {
  const feed = useSelector((store: any) => store.feed);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getFeed = async () => {
    if (feed) {
      return;
    }
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex justify-center my-10">
      <QueryBoundary
        emptyTitle="No users found"
        noHeight
        isLoading={loading}
        data={feed}
      >
        <UserCard user={feed?.[0]} />
      </QueryBoundary>
    </div>
  );
};

export default Feed;
