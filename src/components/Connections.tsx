/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Connections
 */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import type { User } from "../types/common";
import QueryBoundary from "./QueryBoundary";
import { Link } from "react-router-dom";

const Connections: React.FC = () => {
  const dispatch = useDispatch();

  const connections = useSelector((store: any) => store.connections);
  const [loading, setLoading] = useState(false);

  const fetchConnections = async () => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>
      <QueryBoundary
        emptyTitle="No Connections Found"
        isLoading={loading}
        data={connections}
      >
        {connections?.map((connection: User) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            connection;
          return (
            <div
              key={_id}
              className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto justify-between"
            >
              <div className="flex">
                <img
                  alt="photo"
                  className="w-30 h-30 rounded-full"
                  src={photoUrl}
                />
                <div className="text-left mx-4">
                  <h2 className="font-bold text-xl">
                    {firstName + " " + lastName}
                  </h2>
                  {age && gender && <p>{age + " " + gender}</p>}
                  <p>{about}</p>
                </div>
              </div>
              <Link to={`/chat/${_id}`}>
                <button className="btn btn-primary justify-end">Chat</button>
              </Link>
            </div>
          );
        })}
      </QueryBoundary>
    </div>
  );
};

export default Connections;
