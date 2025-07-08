/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description SuccessToast
 */

import React from "react";

interface IProps {
  msg: string;
}

const SuccessToast: React.FC<IProps> = (props) => {
  const { msg } = props;

  return (
    <div className="toast toast-top toast-center">
      <div className="alert alert-success">
        <span>{msg}</span>
      </div>
    </div>
  );
};

export default SuccessToast;
