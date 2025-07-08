/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Profile
 */

import React from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

interface IProps {}

const Profile: React.FC<IProps> = (props) => {
  const user = useSelector((store: any) => store.user);

  return <>{user && <EditProfile user={user} />}</>;
};

export default Profile;
