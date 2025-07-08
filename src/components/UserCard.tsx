/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description UserCard
 */

import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

interface IProps {
  user: any;
}

const UserCard: React.FC<IProps> = (props) => {
  const { user } = props;
  const dispatch = useDispatch();

  const handleSendRequest = async (status: string, userId: string) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure className="mt-2">
        <img src={user?.photoUrl} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${user?.firstName} ${user?.lastName}`}</h2>
        {user?.age && user?.gender && <p>{user?.age + " " + user?.gender}</p>}
        <p>{user?.about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("ignored", user?._id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("interested", user?._id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
