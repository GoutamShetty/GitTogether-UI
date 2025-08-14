/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Premium
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import QueryBoundary from "./QueryBoundary";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Premium: React.FC = () => {
  const [premium, setPremium] = useState({
    isPremium: false,
    membershipType: null,
  });
  const [loading, setLoading] = useState(false);

  const verifyPremiumUser = async () => {
    setLoading(true);
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });

    if (res.data.isPremium) {
      setPremium({
        isPremium: true,
        membershipType: res.data.membershipType,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const handleBuyClick = async (type: "silver" | "gold") => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: type,
      },
      { withCredentials: true }
    );

    const { amount, keyId, notes, currency, orderId } = order.data;

    const options = {
      key: keyId,
      amount,
      currency,
      name: "Git Together",
      description: "Connect with developers",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
      },
      theme: {
        color: "#F37254",
      },
      handler: verifyPremiumUser,
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <QueryBoundary
      isLoading={loading}
      emptyTitle="Unable to fetch Premium details"
    >
      <div className="m-10">
        <div className="flex w-full">
          <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
            <h1 className="font-bold text-3xl">Silver Membership</h1>
            <ul>
              <li> - Chat with other people</li>
              <li> - 100 connection Requests per day</li>
              <li> - Blue Tick</li>
              <li> - 3 months</li>
            </ul>
            <button
              className="btn btn-secondary"
              disabled={premium.membershipType === "silver"}
              onClick={() => handleBuyClick("silver")}
            >
              {premium.membershipType === "silver"
                ? "Already a member"
                : "Buy Silver"}
            </button>
          </div>
          <div className="divider divider-horizontal">OR</div>
          <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
            <h1 className="font-bold text-3xl">Gold Membership</h1>
            <ul>
              <li> - Chat with other people</li>
              <li> - Infinite connection Requests per day</li>
              <li> - Blue Tick</li>
              <li> - 6 months</li>
            </ul>
            <button
              className="btn btn-primary"
              disabled={premium.membershipType === "gold"}
              onClick={() => handleBuyClick("gold")}
            >
              {premium.membershipType === "gold"
                ? "Already a member"
                : "Buy Gold"}
            </button>
          </div>
        </div>
      </div>
    </QueryBoundary>
  );
};

export default Premium;
